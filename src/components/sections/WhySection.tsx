import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const points = [
  'Human-centered design',
  'AI-powered automation',
  'Business-outcome focused',
  'Engineering rigor & reliability',
  'Built to evolve and scale',
];

export const WhySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const ctx = gsap.context(() => {
      if (wordsRef.current) {
        const spans = Array.from(wordsRef.current.children);
        gsap.fromTo(
          spans,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      const listItems = gsap.utils.toArray<HTMLElement>('.why-list-item');
      gsap.fromTo(
        listItems,
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.why-list-container',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="py-32 md:py-48 bg-background border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-accent mb-4 block font-medium">
              Why AI VARSH
            </span>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold leading-[1.08] tracking-tight text-foreground"
              ref={wordsRef}
            >
              <span className="inline-block mr-3">Technology</span>
              <span className="inline-block mr-3">with</span>
              <span className="inline-block mr-3">a</span>
              <span className="inline-block text-accent">purpose.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted font-light leading-relaxed max-w-md">
              We eliminate technical vanity. Every line of code, automated workflow, and visual moment is shaped to move your actual business indicators.
            </p>
          </div>

          <div className="why-list-container">
            <ul className="space-y-6 md:space-y-8">
              {points.map((point, idx) => (
                <li key={idx} className="why-list-item flex items-center gap-6">
                  <div className="w-10 h-[2px] bg-accent shrink-0" />
                  <span className="text-xl md:text-2xl font-display font-semibold text-foreground/85 hover:text-accent transition-colors duration-200">
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
