import { notFound } from "next/navigation";
import Image from "next/image";
import { allArticles } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Summarizer } from "@/components/content/summarizer";
import { Separator } from "@/components/ui/separator";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === article.imageId);

  return (
    <article className="max-w-4xl mx-auto py-8">
      <header className="mb-8 text-center">
        <Badge variant="secondary" className="mb-4">{article.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
          {article.title}
        </h1>
        <p className="text-muted-foreground text-lg">{article.excerpt}</p>
      </header>
      
      {image && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={image.imageUrl}
            alt={article.title}
            width={1200}
            height={675}
            className="w-full object-cover"
            data-ai-hint={image.imageHint}
            priority
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <p>{article.content}</p>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-2xl font-headline font-semibold mb-4">
          Too long; didn't read?
        </h2>
        <p className="text-muted-foreground mb-4">
          Let AI give you a quick summary of the key points.
        </p>
        <Summarizer content={article.content} />
      </div>

    </article>
  );
}
