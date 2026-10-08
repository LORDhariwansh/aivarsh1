import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';

const tech = [
  "AI Automation", "Python", "FastAPI", "React", 
  "Next.js", "Android", "Cloud APIs", "Data", 
  "Design", "SEO"
];

export const WebAppSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.tech-item');
      gsap.fromTo(items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="py-24 md:py-32 bg-ivory border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest uppercase text-muted mb-4">Capabilities</h2>
          <p className="text-xl md:text-2xl font-light text-charcoal max-w-2xl">
            Modern, reliable tooling without legacy debt.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {tech.map((item, idx) => (
            <span 
              key={idx}
              className="tech-item px-5 py-3 rounded-full border border-border bg-white text-sm font-medium text-charcoal hover:border-saffron hover:text-saffron transition-colors duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
