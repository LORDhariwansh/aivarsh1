import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-20 overflow-hidden bg-taste-bg">
      {/* Absolute minimal subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#FAFAFA 1px, transparent 1px), linear-gradient(90deg, #FAFAFA 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          <div className="lg:col-span-8 flex flex-col items-start pt-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] tracking-[0.2em] uppercase text-taste-muted mb-8 font-mono"
            >
              Intelligence. Creativity. Growth.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-[7rem] font-display font-medium leading-[0.95] tracking-tighter text-taste-text mb-8"
            >
              Build.<br />
              Automate.<br />
              <span className="text-taste-muted">Grow.</span>
            </motion.h1>
          </div>

          <div className="lg:col-span-4 flex flex-col pb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-taste-muted leading-relaxed mb-10 max-w-sm font-light"
            >
              Intelligent digital solutions designed for real business impact. We focus on clarity, performance, and automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                onClick={scrollTo('#contact')}
                className="w-full sm:w-auto bg-taste-text text-taste-bg px-8 py-4 text-sm font-medium hover:bg-taste-muted transition-colors duration-300 whitespace-nowrap text-center"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                onClick={scrollTo('#services')}
                className="w-full sm:w-auto text-taste-muted hover:text-taste-text px-8 py-4 text-sm font-medium transition-colors duration-300 border border-taste-border text-center"
              >
                Explore Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
