"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { getSummary } from "@/lib/actions";
import type { FormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  summary: null,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="outline">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Summarize with AI
        </>
      )}
    </Button>
  );
}

export function Summarizer({ content }: { content: string }) {
  const [state, formAction] = useFormState(getSummary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state.message, toast]);

  return (
    <div className="space-y-4">
      <form action={formAction}>
        <input type="hidden" name="articleContent" value={content} />
        <SubmitButton />
      </form>

      {state.summary && (
        <Card className="bg-secondary border-accent shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-headline">
              <Lightbulb className="mr-2 h-5 w-5 text-accent" />
              AI Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-foreground">{state.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
