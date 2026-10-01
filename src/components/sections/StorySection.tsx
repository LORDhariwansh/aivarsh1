import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StorySection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const filter = useTransform(scrollYProgress, [0, 0.5], ['blur(20px)', 'blur(0px)']);

  return (
    <section ref={containerRef} id="about" className="py-32 md:py-64 bg-taste-surface border-t border-taste-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div style={{ scale, opacity, filter }}>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium tracking-tighter text-taste-text leading-[0.9] mb-12 mix-blend-difference">
            We build things<br />that actually<br />do something.
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-taste-muted leading-relaxed font-light mb-8">
              AI-VARSH combines engineering, automation, and design to solve real business problems without unnecessary complexity. We remove the noise.
            </p>
            <p className="text-xs font-mono tracking-widest text-taste-text uppercase">
              Based in India. Working globally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
