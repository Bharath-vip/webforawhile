"use client";

import React, { useState } from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { tools, ToolCategory } from '@/data/tools';
import Link from 'next/link';

const categories: (ToolCategory | 'All')[] = ['All', 'Coding', 'Marketing', 'Design', 'Business'];

export function TrendingFeed() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All'>('All');

  const filteredTools = activeCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section className="py-24 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/3">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Live Data</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trending Today
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Watch the market move in real-time. Discover the fastest growing AI tools based on daily user adoption and search volume.
              </p>

              {/* Filter Buttons */}
              <div className="hidden md:flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            {/* Mobile Filters */}
            <div className="flex md:hidden overflow-x-auto pb-4 mb-4 gap-2 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-2 md:p-4 overflow-hidden relative min-h-[400px]">
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
              
              <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                  {filteredTools.map((tool, index) => (
                    <motion.div 
                      key={tool.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={`/tools/${tool.slug}`}>
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group cursor-pointer">
                          <div className="flex items-center gap-4 md:gap-6">
                            <div className="w-8 text-center font-mono text-xl font-bold text-white/20 group-hover:text-primary transition-colors">
                              0{index + 1}
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                {tool.name}
                              </h4>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs text-muted-foreground">{tool.category}</span>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
                                  <Clock className="w-3 h-3" />
                                  Trending Now
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md text-sm font-medium">
                              <TrendingUp className="w-3 h-3" />
                              {tool.rating}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  {filteredTools.length === 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-8 text-center text-muted-foreground"
                    >
                      No tools found in this category.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
