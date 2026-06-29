"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full bg-background z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">Discover 5,000+ Premium AI Tools</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Find the Best AI Tools <br className="hidden md:block" />
            <span className="text-gradient">Before Everyone Else.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            The curated directory for professionals. Discover workflows, coding assistants, and automation software used by top Silicon Valley startups.
          </p>

          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 animate-pulse" />
            <div className="relative flex items-center bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
              <Search className="w-6 h-6 text-muted-foreground ml-3 hidden sm:block" />
              <Input 
                type="text" 
                placeholder="Try 'SEO tools' or 'Code generation'..." 
                className="border-0 bg-transparent text-lg h-14 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70"
              />
              <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 rounded-xl font-medium text-lg">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Popular:</span>
            {['ChatGPT', 'Midjourney', 'Claude', 'Cursor', 'Perplexity'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: Math.random() * 100 + 50, opacity: 0 }}
            animate={{ 
              y: [Math.random() * 100, Math.random() * -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 rotate-12 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary/50" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
