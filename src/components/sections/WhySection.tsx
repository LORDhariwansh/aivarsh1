import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';

const points = [
  "Human-centered",
  "AI-powered",
  "Business-focused",
  "Design-driven",
  "Built for growth"
];

export const WhySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    
    const ctx = gsap.context(() => {
      // Split the words manually for animation
      if (wordsRef.current) {
        const spans = Array.from(wordsRef.current.children);
        gsap.fromTo(spans,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            }
          }
        );
      }
      
      const listItems = gsap.utils.toArray<HTMLElement>('.why-list-item');
      gsap.fromTo(listItems,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.why-list-container',
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="py-32 md:py-48 bg-ivory text-charcoal border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-display font-medium leading-[1.05] tracking-tight" ref={wordsRef}>
              <span className="inline-block mr-3">Technology</span>
              <span className="inline-block mr-3">with</span>
              <span className="inline-block mr-3">a</span>
              <span className="inline-block text-saffron">purpose.</span>
            </h2>
          </div>

          <div className="why-list-container">
            <ul className="space-y-6 md:space-y-8">
              {points.map((point, idx) => (
                <li key={idx} className="why-list-item flex items-center gap-6">
                  <div className="w-12 h-px bg-saffron shrink-0" />
                  <span className="text-2xl md:text-3xl font-display font-medium text-charcoal/80">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
