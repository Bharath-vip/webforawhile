"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle, Code, Briefcase, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call to newsletter service (e.g., Formspree, Mailchimp)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <footer className="border-t border-white/10 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-secondary">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                AI<span className="text-muted-foreground font-normal">Directory</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Discover the best AI tools, workflows, and productivity systems used by top Silicon Valley startups.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Code className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Coding Assistants</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Content Writing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Image Generation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Video Editing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Business & SEO</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Submit a Tool</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Advertising</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Stay Ahead</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest AI tools and workflows delivered to your inbox weekly.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading' || status === 'success'}
                className="bg-card/50 border-white/10 text-white placeholder:text-muted-foreground focus-visible:ring-primary disabled:opacity-50"
              />
              <Button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white transition-all disabled:opacity-80"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === 'success' ? (
                  <><CheckCircle2 className="w-4 h-4 mr-2" /> Subscribed!</>
                ) : (
                  <>Subscribe <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} AI Directory. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">Made with</span>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">in Silicon Valley</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
