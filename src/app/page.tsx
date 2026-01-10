"use client";

import { useState } from "react";
import { allArticles } from "@/lib/data";
import type { Article } from "@/lib/types";
import { ArticleCard } from "@/components/content/article-card";
import { ArticleFilters } from "@/components/content/article-filters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const allCategories = ["All", ...Array.from(new Set(allArticles.map((a) => a.category)))];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = allArticles.filter((article) => {
    const categoryMatch = activeCategory === "All" || article.category === activeCategory;
    const searchMatch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ArticleFilters
          categories={allCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      
      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p>No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
