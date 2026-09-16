import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../../data/content';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex items-center pt-32 pb-20 overflow-hidden bg-ai-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-ai-forest/60 text-xs font-semibold tracking-[0.2em] uppercase mb-8 block flex items-center gap-3">
              <span className="w-6 h-px bg-ai-gold"></span>
              {SITE_CONTENT.hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-medium leading-[1.05] mb-8 tracking-tight text-ai-forest text-balance"
          >
            We build digital solutions that move businesses <span className="text-ai-gold italic pr-2">forward.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-ai-forest/70 leading-relaxed mb-12 max-w-2xl text-balance font-light"
          >
            {SITE_CONTENT.hero.support}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16"
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="bg-ai-forest text-ai-ivory px-8 py-4 font-medium hover:bg-ai-gold transition-colors duration-300 flex items-center gap-2 group"
            >
              Start a Conversation <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#work"
              onClick={scrollTo('#work')}
              className="border border-ai-forest text-ai-forest px-8 py-4 font-medium hover:bg-ai-forest hover:text-ai-ivory transition-colors duration-300 relative overflow-hidden group"
            >
              Explore Our Work
              {/* Very subtle gold detail on hover */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ai-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="pt-8 border-t border-ai-border"
          >
            <p className="text-sm text-ai-forest/60 tracking-wide font-medium flex flex-wrap items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ai-gold"></span>
              {SITE_CONTENT.hero.subline}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
