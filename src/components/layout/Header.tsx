"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Sparkles, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { tools, Tool } from '@/data/tools';
import { useRouter } from 'next/navigation';

// Initialize Fuse.js for fuzzy searching tools outside component to avoid recreation
const fuse = new Fuse(tools, {
  keys: ['name', 'description', 'category'],
  threshold: 0.3,
});

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearchOpen(false);
    } else {
      const results = fuse.search(searchQuery).map(result => result.item);
      setSearchResults(results);
      setIsSearchOpen(true);
    }
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (slug: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    router.push(`/tools/${slug}`);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary overflow-hidden">
            <div className="absolute inset-0 opacity-50 mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            AI<span className="text-muted-foreground font-normal">Directory</span>
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl relative group" ref={searchRef}>
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          <div className="relative flex items-center w-full bg-card/80 backdrop-blur-md rounded-full border border-white/10 overflow-hidden px-4">
            <Search className="w-5 h-5 text-muted-foreground mr-2" />
            <Input 
              type="text" 
              placeholder="Search tools, categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-12 text-base"
            />
          </div>

          {/* Search Dropdown */}
          <AnimatePresence>
            {isSearchOpen && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-14 left-0 w-full bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2"
              >
                {searchResults.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => handleResultClick(tool.slug)}
                    className="w-full flex items-center px-4 py-3 hover:bg-white/5 transition-colors text-left"
                  >
                    <div>
                      <div className="text-white font-medium">{tool.name}</div>
                      <div className="text-sm text-muted-foreground truncate">{tool.description}</div>
                    </div>
                    <span className="ml-auto text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                      {tool.category}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/categories" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
            Categories <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="/articles" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/submit" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Submit Tool
          </Link>
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
            Get Newsletter
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-card border-b border-white/10 p-4 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="relative flex items-center w-full bg-background rounded-full border border-white/10 overflow-hidden px-4">
                <Search className="w-5 h-5 text-muted-foreground mr-2" />
                <Input 
                  type="text" 
                  placeholder="Search tools..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-12"
                />
              </div>
              
              {/* Mobile Search Results */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="bg-background rounded-xl border border-white/5 overflow-hidden">
                  {searchResults.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleResultClick(tool.slug)}
                      className="w-full flex items-center px-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors text-left"
                    >
                      <div>
                        <div className="text-white font-medium text-sm">{tool.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <Link href="/categories" className="block py-2 text-white font-medium border-b border-white/5">Categories</Link>
              <Link href="/articles" className="block py-2 text-white font-medium border-b border-white/5">Articles</Link>
              <Link href="/submit" className="block py-2 text-white font-medium border-b border-white/5">Submit Tool</Link>
              <Button className="w-full bg-white text-black mt-2">Get Newsletter</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
