'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdSpaceProps {
  className?: string;
  format?: 'banner' | 'rectangle' | 'inline';
  // Optional: pass the Adsterra Zone ID if you want to make it dynamic
  zoneId?: string;
}

export function AdSpace({ className, format = 'banner', zoneId }: AdSpaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const formatClasses = {
    banner: 'w-full h-[90px] min-h-[90px]', // Adsterra typical banner 728x90
    rectangle: 'w-[300px] h-[250px] min-h-[250px]', // Adsterra typical rectangle 300x250
    inline: 'w-full h-auto min-h-[100px]',
  };

  useEffect(() => {
    // If you pass a zoneId, we can inject the script dynamically
    if (zoneId && containerRef.current && !containerRef.current.hasChildNodes()) {
      // 1. Inject configuration script
      const conf = document.createElement('script');
      conf.type = 'text/javascript';
      let width = 728;
      let height = 90;
      if (format === 'rectangle') {
        width = 300;
        height = 250;
      }
      
      conf.innerHTML = `
        atOptions = {
          'key' : '${zoneId}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;

      // 2. Inject Adsterra invoke script
      const invoke = document.createElement('script');
      invoke.type = 'text/javascript';
      invoke.src = `//www.highperformanceformat.com/${zoneId}/invoke.js`;
      invoke.async = true;

      containerRef.current.appendChild(conf);
      containerRef.current.appendChild(invoke);
    }
  }, [zoneId, format]);

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center bg-card/30 border border-white/5 rounded-xl overflow-hidden glass", 
        formatClasses[format],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-20" />
      
      {!zoneId && (
        <span className="text-muted-foreground/50 text-xs tracking-widest uppercase relative z-10 text-center px-4">
          Adsterra Ad Space<br/>
          (Pass zoneId prop to activate)
        </span>
      )}

      {/* The Adsterra scripts will render the iframe inside this container */}
      <div ref={containerRef} className="relative z-10 w-full h-full flex items-center justify-center" />
    </div>
  );
}
