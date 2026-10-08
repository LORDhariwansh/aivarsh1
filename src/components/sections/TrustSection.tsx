import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current;
      if (el) {
        gsap.fromTo(el.querySelector('.trust-content'),
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 md:py-40 bg-ivory-dark border-y border-border" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center trust-content">
        <p className="text-sm font-mono text-saffron uppercase tracking-widest mb-8">
          The standard
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-medium tracking-tight text-charcoal leading-[1.1] text-balance mx-auto">
          Built for ambitious teams that want to move fast and scale without friction.
        </h2>
      </div>
    </section>
  );
};
