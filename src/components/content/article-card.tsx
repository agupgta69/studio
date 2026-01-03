import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === article.imageId);

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Link href={`/articles/${article.slug}`} className="block">
          {image && (
            <Image
              src={image.imageUrl}
              alt={article.title}
              width={600}
              height={400}
              className="object-cover w-full aspect-[3/2]"
              data-ai-hint={image.imageHint}
            />
          )}
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <Badge variant="outline" className="mb-2">{article.category}</Badge>
          <h2 className="text-xl font-headline font-semibold mb-2 leading-snug">
            <Link href={`/articles/${article.slug}`} className="hover:text-primary transition-colors">
              {article.title}
            </Link>
          </h2>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {article.excerpt}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xs text-muted-foreground">
            {article.lastRead}
          </p>
          <Button variant="ghost" size="icon" aria-label="Save article">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
