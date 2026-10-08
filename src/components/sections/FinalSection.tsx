import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const FinalSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background subtle transition
      gsap.fromTo(bgRef.current,
        { backgroundColor: '#F7F4EE' }, // ivory
        {
          backgroundColor: '#EDE8DF', // ivory-dark
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      // Elements reveal
      const elements = gsap.utils.toArray<HTMLElement>('.cta-reveal');
      gsap.fromTo(elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative py-40 md:py-64 border-t border-border overflow-hidden" ref={containerRef}>
      <div ref={bgRef} className="absolute inset-0 z-0" />
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="cta-reveal text-[clamp(3.5rem,8vw,7rem)] font-display font-medium tracking-tight leading-[1] text-charcoal mb-8">
          Have an idea<br />
          worth building?
        </h2>
        
        <p className="cta-reveal text-xl md:text-2xl text-muted font-light max-w-xl mb-16">
          Let's turn it into something real. We start with a conversation, not a contract.
        </p>

        <div className="cta-reveal flex flex-col sm:flex-row items-center gap-6">
          <a href="mailto:contact@ai-varsh.com" className="w-full sm:w-auto px-8 py-4 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark hover:scale-105 transition-all duration-300">
            Start a Conversation
          </a>
          <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-white border border-border text-charcoal rounded-full font-medium hover:border-charcoal hover:scale-105 transition-all duration-300">
            Explore Our Work
          </a>
        </div>
        
        <div className="cta-reveal mt-20 flex flex-col items-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">Or reach us directly</p>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/917804877448" className="text-sm font-medium text-charcoal hover:text-saffron transition-colors">+91 78048 77448</a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href="mailto:contact@ai-varsh.com" className="text-sm font-medium text-charcoal hover:text-saffron transition-colors">contact@ai-varsh.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};
