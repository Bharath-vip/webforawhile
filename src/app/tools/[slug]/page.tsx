import React from 'react';
import { AdSpace } from '@/components/ads/AdSpace';
import { ExternalLink, Check, X, Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { tools, getToolBySlug } from '@/data/tools';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-12 pb-24">
      {/* Header */}
      <header className="container mx-auto px-4 max-w-4xl mb-12">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Directory
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                {tool.category}
              </span>
              <span className="flex items-center gap-1 text-yellow-500 font-semibold text-sm">
                <Star className="w-4 h-4 fill-current" />
                {tool.rating} <span className="text-muted-foreground font-normal">({tool.reviewsCount.toLocaleString()})</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              {tool.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {tool.description}
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-3 min-w-[200px]">
            <Button asChild size="lg" className="w-full text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
              <a href={tool.url} target="_blank" rel="noopener noreferrer">
                Try {tool.name} <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Pricing: <strong className="text-white">{tool.pricing}</strong>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-8">
            <AdSpace format="rectangle" />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 max-w-3xl space-y-12">
          
          <section className="glass rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {tool.longDescription}
            </p>
          </section>

          <section className="glass rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1 bg-primary/20 p-1 rounded text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="glass rounded-2xl p-8 border border-white/10 border-t-4 border-t-green-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" /> Pros
              </h2>
              <ul className="space-y-4">
                {tool.pros.map((pro, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-8 border border-white/10 border-t-4 border-t-red-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" /> Cons
              </h2>
              <ul className="space-y-4">
                {tool.cons.map((con, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <div className="my-12">
            <AdSpace format="inline" />
          </div>

          <section className="glass rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Pricing Details</h2>
            <p className="text-xl text-primary font-semibold mb-2">{tool.pricing}</p>
            <p className="text-muted-foreground">{tool.priceDetails || 'Visit their website for detailed pricing.'}</p>
            <Button asChild variant="outline" className="mt-6 border-white/10 text-white hover:bg-white/10">
              <a href={tool.url} target="_blank" rel="noopener noreferrer">
                View Pricing Page <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </section>

        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <AdSpace format="rectangle" />
          </div>
        </div>
      </div>
    </article>
  );
}
