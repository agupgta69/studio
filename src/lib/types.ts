export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageId: string;
  category: "Staffing" | "Technology" | "Design";
  topics: string[];
  lastRead?: string;
};
