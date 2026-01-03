"use server";

import { summarizeArticle } from "@/ai/flows/summarize-article";
import { z } from "zod";

const schema = z.object({
  articleContent: z.string().min(50, { message: "Article content is too short to summarize." }),
});

export type FormState = {
  summary: string | null;
  message: string | null;
};

export async function getSummary(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    articleContent: formData.get("articleContent"),
  });

  if (!validatedFields.success) {
    return {
      summary: null,
      message: validatedFields.error.flatten().fieldErrors.articleContent?.[0] ?? "Invalid input.",
    };
  }

  try {
    const result = await summarizeArticle(validatedFields.data);
    if (result.summary) {
      return { summary: result.summary, message: null };
    }
    return { summary: null, message: "Failed to generate a summary." };
  } catch (error) {
    console.error("Summarization error:", error);
    return {
      summary: null,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
