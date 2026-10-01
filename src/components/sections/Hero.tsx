import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-20 overflow-hidden bg-taste-bg">
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
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
              className="w-px h-24 bg-taste-border mb-8 ml-2 hidden md:block"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] tracking-[0.2em] uppercase text-taste-muted mb-8 font-mono"
            >
              Intelligence. Creativity. Growth.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl lg:text-[9rem] font-display font-medium leading-[0.9] tracking-tighter text-taste-text mb-8 mix-blend-difference"
            >
              Build.<br />
              Automate.<br />
              <span className="text-taste-muted">Grow.</span>
            </motion.h1>
          </div>

          <div className="lg:col-span-4 flex flex-col pb-4">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-taste-muted leading-relaxed mb-16 max-w-sm font-light"
            >
              Intelligent digital solutions designed for real business impact. We focus on clarity, performance, and automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center"
            >
              <MagneticButton 
                href="#contact" 
                onClick={scrollTo('#contact')} 
                className="w-32 h-32 rounded-full bg-taste-text text-taste-bg flex items-center justify-center text-xs font-medium uppercase tracking-widest hover:bg-taste-accent hover:text-white transition-colors duration-500 shadow-2xl"
              >
                Let's Talk
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
