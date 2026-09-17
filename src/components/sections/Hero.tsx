import React from 'react';
import { motion } from 'framer-motion';
import { HeroGeometry } from '../ui/HeroGeometry';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-28 pb-20 overflow-hidden bg-ai-midnight">
      <HeroGeometry />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs tracking-[0.3em] uppercase text-ai-saffron/80 mb-8 font-bold flex items-center gap-3"
          >
            <span className="w-6 h-px bg-ai-saffron/40" />
            AI • TECHNOLOGY • CREATIVITY
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] mb-8 tracking-tight text-ai-ivory"
          >
            BUILD.
            <br />
            AUTOMATE.
            <br />
            <span className="text-ai-saffron">GROW.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl text-ai-muted leading-relaxed mb-12 max-w-xl"
          >
            AI-VARSH builds intelligent digital solutions that help businesses automate, create and grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="bg-ai-saffron text-ai-midnight px-8 py-4 font-bold text-sm tracking-wide hover:bg-ai-saffron/90 transition-all duration-300 flex items-center gap-3 group rounded-full"
            >
              LET'S TALK
              <span className="w-1.5 h-1.5 rounded-full bg-ai-midnight/40 group-hover:scale-150 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="border border-ai-ivory/20 text-ai-ivory px-8 py-4 font-bold text-sm tracking-wide hover:border-ai-saffron/40 hover:text-ai-saffron transition-all duration-300 rounded-full"
            >
              EXPLORE SOLUTIONS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
