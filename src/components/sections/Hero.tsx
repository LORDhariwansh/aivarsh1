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
    <section id="hero" className="relative min-h-[90vh] w-full flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-ai-accent text-xs font-bold tracking-widest uppercase mb-6 block">
                {SITE_CONTENT.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] mb-6 tracking-tight text-balance"
            >
              {SITE_CONTENT.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-ai-muted leading-relaxed mb-10 text-balance"
            >
              {SITE_CONTENT.hero.support}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a
                href="#contact"
                onClick={scrollTo('#contact')}
                className="bg-ai-text text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-colors"
              >
                Start a Conversation →
              </a>
              <a
                href="#work"
                onClick={scrollTo('#work')}
                className="text-ai-text font-medium hover:text-ai-accent transition-colors"
              >
                Explore Our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 pt-6 border-t border-ai-border/50"
            >
              <p className="text-xs font-semibold text-ai-muted tracking-wide uppercase">
                {SITE_CONTENT.hero.subline}
              </p>
            </motion.div>
          </div>

          {/* Right Visual (Calm, abstract, no cliches) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/3] bg-ai-card rounded-2xl border border-ai-border shadow-soft flex items-center justify-center p-8 overflow-hidden relative">
              {/* Very subtle abstract composition */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-stone-100 rounded-full blur-3xl opacity-50"></div>
              
              <div className="w-full h-full border border-dashed border-ai-border/60 rounded-xl flex flex-col items-center justify-center gap-4 relative z-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-ai-border"></div>
                  <div className="w-3 h-3 rounded-full bg-ai-border"></div>
                  <div className="w-3 h-3 rounded-full bg-ai-accent/20"></div>
                </div>
                <div className="h-px w-24 bg-ai-border mt-4"></div>
                <div className="text-ai-muted/40 text-xs font-mono uppercase tracking-widest mt-2">Design & System</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
