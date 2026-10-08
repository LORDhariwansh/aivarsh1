import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(headlineRef.current, {
        scale: 0.92,
        opacity: 0.65,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(bgRef.current, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container}
      id="hero" 
      className="relative min-h-[100dvh] w-full flex items-center pt-20 overflow-hidden bg-ivory"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-ivory-dark/20"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-start justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <span className="text-sm font-semibold tracking-wide uppercase text-saffron">AI VARSH</span>
        </motion.div>

        <div className="w-full max-w-5xl" ref={headlineRef}>
          <h1 className="text-[clamp(42px,7vw,120px)] font-display font-medium leading-[1.05] tracking-tight text-charcoal">
            <span className="block overflow-hidden pb-2">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                Intelligence.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                Creativity.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span 
                className="block text-muted"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                Growth.
              </motion.span>
            </span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 text-lg md:text-xl text-muted leading-relaxed font-light max-w-2xl text-balance"
        >
          We build intelligent digital experiences, AI-powered solutions and creative technology that help ambitious businesses move forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-charcoal text-ivory rounded-full font-medium text-center hover:bg-charcoal-light hover:scale-105 transition-all duration-300">
            Explore Our Work
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border text-charcoal rounded-full font-medium text-center hover:border-charcoal transition-all duration-300">
            Let's Build Something
          </a>
        </motion.div>

      </div>
    </section>
  );
};
