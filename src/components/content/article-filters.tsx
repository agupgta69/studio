"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ArticleFiltersProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function ArticleFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: ArticleFiltersProps) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={cn("transition-all", 
            activeCategory === category && "bg-primary text-primary-foreground"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
