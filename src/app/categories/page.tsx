import { tools } from "@/data/tools";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AdSpace } from "@/components/ads/AdSpace";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Categories | AI Directory",
  description: "Browse the best AI tools by category.",
};

export default function CategoriesPage() {
  // Group tools by category
  const categories = Array.from(new Set(tools.map((t) => t.category))).sort();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Browse by Category</h1>
        <p className="text-xl text-muted-foreground">
          Find the perfect AI tool for your specific workflow.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => {
          const categoryTools = tools.filter((t) => t.category === category);
          
          return (
            <div key={category} className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold">{category}</h2>
                <Badge variant="outline">{categoryTools.length} tools</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool) => (
                  <Link href={`/tools/${tool.slug}`} key={tool.slug}>
                    <div className="group bg-card/30 border border-white/5 rounded-xl p-5 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 h-full flex flex-col glass">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tool.name}</h3>
                        <Badge variant={tool.pricing === 'Free' ? 'default' : 'secondary'}>
                          {tool.pricing}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-6 flex-grow">{tool.description}</p>
                      <div className="flex items-center text-sm font-medium text-primary mt-auto">
                        View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
         <AdSpace format="inline" className="mx-auto max-w-4xl" />
      </div>
    </div>
  );
}
