import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../../data/content';
import { NeuralBackground } from '../ui/NeuralBackground';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <NeuralBackground />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ai-dark/60 via-ai-dark/40 to-ai-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-ai-dark/80 via-transparent to-transparent" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-violet/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {SITE_CONTENT.hero.badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 text-xs font-bold tracking-widest text-ai-cyan/80 border border-ai-cyan/20 rounded-full bg-ai-cyan/5"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] mb-5 whitespace-pre-line tracking-tight"
          >
            {SITE_CONTENT.hero.heading1}
          </motion.h1>

          {/* Sub Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ai-cyan mb-8 tracking-tight"
          >
            {SITE_CONTENT.hero.heading2}
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl whitespace-pre-line leading-relaxed mb-10"
          >
            {SITE_CONTENT.hero.support}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="group inline-flex items-center gap-2 bg-ai-base text-ai-dark px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:shadow-lg hover:shadow-ai-cyan/20 transition-all duration-300"
            >
              START BUILDING
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="text-white/60 font-bold hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs sm:text-sm px-4 py-3"
            >
              EXPLORE THE SYSTEM
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#services"
          onClick={scrollTo('#services')}
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
