export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageId: string;
  category: "Staffing" | "Real Estate Channel Partner" | "Design";
  topics: string[];
  lastRead?: string;
};
