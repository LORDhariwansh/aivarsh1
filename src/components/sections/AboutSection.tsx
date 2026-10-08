import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export const AboutSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const lines = Array.from(textRef.current.children);
        gsap.fromTo(lines, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            stagger: 0.15, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-32 md:py-48 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 ref={textRef} className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1] max-w-5xl">
          <span className="block overflow-hidden"><span className="block">Technology should</span></span>
          <span className="block overflow-hidden"><span className="block text-muted">not only work.</span></span>
          <span className="block overflow-hidden"><span className="block">It should create</span></span>
          <span className="block overflow-hidden"><span className="block text-saffron">possibilities.</span></span>
        </h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 max-w-2xl mx-auto text-lg md:text-xl text-muted font-light leading-relaxed"
        >
          <p>
            AI VARSH is a modern technology and creative digital studio. We build intelligent digital experiences, automate workflows, and design practical AI solutions that help ambitious businesses move forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
