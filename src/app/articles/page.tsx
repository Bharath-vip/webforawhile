import { articles } from "@/data/articles";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AdSpace } from "@/components/ads/AdSpace";

export const metadata = {
  title: "Articles & Guides | AI Directory",
  description: "Read the latest articles, guides, and reviews on the best AI tools and workflows.",
};

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">AI Articles & Guides</h1>
        <p className="text-xl text-muted-foreground">
          Deep dives, tutorials, and insights into the world of AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug}>
            <div className="group h-full bg-card/30 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/50 flex flex-col glass cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                  {article.category}
                </Badge>
                <span className="text-sm text-muted-foreground">{article.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-muted-foreground mb-6 flex-grow">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                  {article.author[0]}
                </div>
                <span className="text-sm font-medium">{article.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-16">
        {/* Placeholder for global display banner ad */}
        <AdSpace format="banner320x50" className="mx-auto" />
      </div>
    </div>
  );
}
