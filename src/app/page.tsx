"use client";

import { allArticles } from "@/lib/data";
import type { Article } from "@/lib/types";
import { ArticleCard } from "@/components/content/article-card";

export default function Home() {
  const articles: Article[] = allArticles;

  return (
    <div className="min-h-[calc(100vh_-_7rem)] grid md:grid-cols-2 gap-4 items-stretch">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
