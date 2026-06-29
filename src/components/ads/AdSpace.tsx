'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdSpaceProps {
  className?: string;
  format?: 'banner' | 'rectangle' | 'inline';
  // Optional: pass the Adsterra Zone ID if you want to make it dynamic
  zoneId?: string;
}

export function AdSpace({ className, format = 'banner320x50', zoneId }: AdSpaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const formatClasses = {
    banner320x50: 'w-[320px] h-[50px] min-h-[50px]', // Banner 320x50
    rectangle160x300: 'w-[160px] h-[300px] min-h-[300px]', // Banner 160x300
    rectangle300x250: 'w-[300px] h-[250px] min-h-[250px]', // Banner 300x250
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
      } else if (format === 'rectangle160x300') {
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
      } else if (format === 'rectangle300x250') {
        // Banner 300x250 (aacb847978857f9d6b537e348d7e7f03)
        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.innerHTML = `
          atOptions = {
            'key' : 'aacb847978857f9d6b537e348d7e7f03',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        `;
        const invoke = document.createElement('script');
        invoke.type = 'text/javascript';
        invoke.src = `//www.highperformanceformat.com/aacb847978857f9d6b537e348d7e7f03/invoke.js`;
        invoke.async = true;

        containerRef.current.appendChild(conf);
        containerRef.current.appendChild(invoke);
      } else if (format === 'banner320x50') {
        // Banner 320x50 (fca2560aab27d3ca282e540c3ba6db55)
        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.innerHTML = `
          atOptions = {
            'key' : 'fca2560aab27d3ca282e540c3ba6db55',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        `;
        const invoke = document.createElement('script');
        invoke.type = 'text/javascript';
        invoke.src = `//www.highperformanceformat.com/fca2560aab27d3ca282e540c3ba6db55/invoke.js`;
        invoke.async = true;

        containerRef.current.appendChild(conf);
        containerRef.current.appendChild(invoke);
      } else {
        // Fallback for custom generic banner if needed
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
