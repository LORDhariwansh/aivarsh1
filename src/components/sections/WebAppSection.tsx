import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';

const tech = [
  "AI Automation Pipelines", "Python & PyTorch", "YOLO Computer Vision", 
  "FastAPI", "React 19 & Next.js", "TypeScript", 
  "Android & Mobile", "Cloud APIs & Webhooks", "PostgreSQL & Firebase", 
  "Motion Graphics", "Technical SEO"
];

export const WebAppSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.tech-item');
      gsap.fromTo(items,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium">
            Engineering Tooling
          </span>
          <p className="text-xl md:text-2xl font-display font-medium text-foreground max-w-2xl">
            Modern, battle-tested technology without legacy drag.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {tech.map((item, idx) => (
            <span 
              key={idx}
              className="tech-item px-5 py-2.5 rounded-full border border-border bg-surface text-sm font-medium text-foreground/85 hover:border-accent hover:text-accent hover:shadow-xs transition-all duration-300 cursor-default shadow-2xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
