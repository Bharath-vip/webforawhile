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
    banner: 'w-full h-[90px] min-h-[90px]', // Default banner
    rectangle: 'w-[160px] h-[300px] min-h-[300px]', // Banner 160x300
    inline: 'w-full h-auto min-h-[100px]', // Native Banner
  };

  useEffect(() => {
    if (containerRef.current && !containerRef.current.hasChildNodes()) {
      if (format === 'inline') {
        // Native Banner (d66692b4f3538724c0dc75aa907b789f)
        const invoke = document.createElement('script');
        invoke.type = 'text/javascript';
        invoke.async = true;
        invoke.setAttribute('data-cfasync', 'false');
        invoke.src = `//pl30129586.effectivecpmnetwork.com/d66692b4f3538724c0dc75aa907b789f/invoke.js`;
        
        const container = document.createElement('div');
        container.id = 'container-d66692b4f3538724c0dc75aa907b789f';

        containerRef.current.appendChild(invoke);
        containerRef.current.appendChild(container);
      } else if (format === 'rectangle') {
        // Banner 160x300 (1b9d35c4bfddcf50bcf91a7aa1473c47)
        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.innerHTML = `
          atOptions = {
            'key' : '1b9d35c4bfddcf50bcf91a7aa1473c47',
            'format' : 'iframe',
            'height' : 300,
            'width' : 160,
            'params' : {}
          };
        `;
        const invoke = document.createElement('script');
        invoke.type = 'text/javascript';
        invoke.src = `//www.highperformanceformat.com/1b9d35c4bfddcf50bcf91a7aa1473c47/invoke.js`;
        invoke.async = true;

        containerRef.current.appendChild(conf);
        containerRef.current.appendChild(invoke);
      } else {
        // Fallback for standard banner if needed, can use the same rectangle zone but adjusted or generic placeholder
        if (zoneId) {
            const conf = document.createElement('script');
            conf.type = 'text/javascript';
            conf.innerHTML = `
              atOptions = {
                'key' : '${zoneId}',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `;
            const invoke = document.createElement('script');
            invoke.type = 'text/javascript';
            invoke.src = `//www.highperformanceformat.com/${zoneId}/invoke.js`;
            invoke.async = true;

            containerRef.current.appendChild(conf);
            containerRef.current.appendChild(invoke);
        }
      }
    }
  }, [zoneId, format]);

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center overflow-hidden", 
        formatClasses[format],
        className
      )}
    >
      {/* The Adsterra scripts will render the iframe/native ad inside this container */}
      <div ref={containerRef} className="relative z-10 w-full h-full flex items-center justify-center" />
    </div>
  );
}
