import { notFound } from "next/navigation";
import Image from "next/image";
import { allArticles } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

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

const renderContent = (content: string) => {
  const sections = content.split(/\n\n/);

  return sections.map((section, index) => {
    if (section.startsWith('**') && section.endsWith('**')) {
      return <h3 key={index} className="font-bold text-xl mt-4">{section.replace(/\*\*/g, '')}</h3>;
    }
    if (section.startsWith('- ')) {
      const listItems = section.split('\n').map(item => item.replace('- ', '').trim());
      return (
        <ul key={index} className="list-disc pl-5 space-y-2 my-4">
          {listItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    }
     if (section.startsWith('📞')) {
      return <p key={index} className="mt-4">{section}</p>;
    }
    const listRegex = /\n- /;
    if(listRegex.test(section)){
        const sectionParts = section.split(listRegex);
        const heading = sectionParts[0];
        const listItems = sectionParts.slice(1).map(item => item.trim());
         return (
        <div key={index}>
          <p>{heading}</p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    return section.split('\n').map((paragraph, pIndex) => (
      paragraph.trim() ? <p key={`${index}-${pIndex}`}>{paragraph}</p> : null
    ));
  });
};


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

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12 space-y-4">
        {renderContent(article.content)}
      </div>
    </article>
  );
}
