"use client";

import { useState, useMemo, useEffect } from "react";
import { allArticles } from "@/lib/data";
import type { Article } from "@/lib/types";
import { ArticleCard } from "@/components/content/article-card";
import { ArticleFilters } from "@/components/content/article-filters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = ["All", ...Array.from(new Set(allArticles.map((a) => a.category)))];

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setArticles(allArticles);
  }, []);

  const filteredArticles = useMemo(() => {
    let result = articles;

    if (activeCategory !== "All") {
      result = result.filter((article) => article.category === activeCategory);
    }

    if (searchTerm) {
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [articles, activeCategory, searchTerm]);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
          OrcaS Solutions Insights
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your curated knowledge hub for the latest in business, technology, and design.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ArticleFilters
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
