import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { FeaturedTools } from '@/components/sections/FeaturedTools';
import { TrendingFeed } from '@/components/sections/TrendingFeed';
import { AdSpace } from '@/components/ads/AdSpace';
import { ArrowRight, BookOpen, Layers, Code, PenTool, Video, Image as ImageIcon, Briefcase, Search, Gavel, LineChart, GraduationCap, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CATEGORIES = [
  { name: 'Coding', icon: Code, count: 124, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Writing', icon: PenTool, count: 85, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { name: 'Video', icon: Video, count: 64, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { name: 'Image', icon: ImageIcon, count: 156, color: 'text-pink-400', bg: 'bg-pink-400/10' },
  { name: 'Business', icon: Briefcase, count: 92, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { name: 'SEO', icon: Search, count: 43, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { name: 'Legal', icon: Gavel, count: 18, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { name: 'Finance', icon: LineChart, count: 35, color: 'text-green-400', bg: 'bg-green-400/10' },
  { name: 'Education', icon: GraduationCap, count: 72, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
  { name: 'Healthcare', icon: HeartPulse, count: 24, color: 'text-rose-400', bg: 'bg-rose-400/10' },
];

const ARTICLES = [
  {
    id: 1,
    title: 'The Ultimate Guide to AI Coding Assistants in 2026',
    excerpt: 'Comparing Cursor, GitHub Copilot, and Claude 3.5 Sonnet for modern software development.',
    author: 'Sarah Chen',
    date: 'Jun 24, 2026',
    readTime: '8 min read',
    category: 'Development'
  },
  {
    id: 2,
    title: 'Automating SEO Workflows with LLMs',
    excerpt: 'How to build programmatic SEO engines using OpenAI and Vercel without sacrificing quality.',
    author: 'Alex Rivera',
    date: 'Jun 22, 2026',
    readTime: '12 min read',
    category: 'Marketing'
  },
  {
    id: 3,
    title: 'State of AI Video Generation',
    excerpt: 'An in-depth look at Runway Gen-3, Sora, and the future of creative production.',
    author: 'Marcus Johnson',
    date: 'Jun 18, 2026',
    readTime: '6 min read',
    category: 'Creative'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Top Ad Unit */}
      <div className="container mx-auto px-4 py-8">
        <AdSpace format="banner320x50" />
      </div>

      <FeaturedTools />
      
      <TrendingFeed />

      {/* Categories Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Find exactly what you need. From development to healthcare, explore specialized AI tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.name} href={`/categories/${cat.name.toLowerCase()}`} className="group">
                  <div className="bg-card/30 border border-white/5 hover:border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-card/50 hover:shadow-xl hover:-translate-y-1">
                    <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground">{cat.count} tools</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Middle Ad Unit */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <AdSpace format="rectangle300x250" />
      </div>

      {/* Compare Tools Section */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6">
                <Layers className="w-4 h-4" />
                <span className="text-sm font-medium">Compare Features</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Don&apos;t guess. <br />
                <span className="text-gradient-secondary">Compare head-to-head.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                Use our interactive comparison engine to line up features, pricing, and community ratings before committing to a subscription.
              </p>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium">
                Try the Comparison Engine
              </Button>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[80px] rounded-full" />
                <div className="relative glass border border-white/10 rounded-2xl p-6 shadow-2xl">
                  {/* Mock Comparison UI */}
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                      <div className="text-xs text-muted-foreground mb-4">Feature</div>
                      <div className="space-y-4 text-white font-medium">
                        <div>API Access</div>
                        <div>Context Window</div>
                        <div>Fine-tuning</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-primary/30 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                      <div className="text-xs text-primary font-bold mb-4">Tool A</div>
                      <div className="space-y-4 text-white">
                        <div>Yes</div>
                        <div>200K</div>
                        <div>Available</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                      <div className="text-xs text-muted-foreground mb-4">Tool B</div>
                      <div className="space-y-4 text-white">
                        <div>No</div>
                        <div>32K</div>
                        <div>Coming Soon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Insights
              </h2>
              <p className="text-muted-foreground text-lg">
                Expert analysis, guides, and industry news.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex border-white/10 hover:bg-white/5 text-white">
              Read all articles <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className="group h-full">
                <article className="flex flex-col h-full bg-card/30 border border-white/5 rounded-2xl p-6 hover:bg-card/60 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-white">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary" />
                      <span className="text-sm text-white/80">{article.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Ad Unit */}
      <div className="container mx-auto px-4 py-8 pb-16">
        <AdSpace format="banner320x50" />
      </div>

    </div>
  );
}
