import React from 'react';
import { cn } from '@/lib/utils';

interface AdSpaceProps {
  className?: string;
  format?: 'banner' | 'rectangle' | 'inline';
}

export function AdSpace({ className, format = 'banner' }: AdSpaceProps) {
  // This is a placeholder for Monetag direct links and ad scripts.
  // The user will inject Monetag tags in this container.
  
  const formatClasses = {
    banner: 'w-full h-24',
    rectangle: 'w-[300px] h-[250px]',
    inline: 'w-full h-auto min-h-[100px]',
  };

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center bg-card/30 border border-white/5 rounded-xl overflow-hidden glass", 
        formatClasses[format],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-20" />
      <span className="text-muted-foreground/50 text-xs tracking-widest uppercase relative z-10">
        Advertisement
      </span>
      {/* Monetag script will be inserted here */}
    </div>
  );
}
