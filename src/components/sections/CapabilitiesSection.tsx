import React from 'react';
import { CAPABILITIES } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export const CapabilitiesSection = () => {
  return (
    <section id="solutions" className="relative z-10 bg-ai-dark py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="mb-16 md:mb-20">
          <span className="text-ai-cyan font-bold tracking-widest text-xs uppercase mb-4 block">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4">
            CONNECTED SYSTEMS
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
            Every solution combines multiple services into one connected system that works together.
          </p>
        </AnimatedSection>

        {/* Capability Cards */}
        <div className="flex flex-col gap-0">
          {CAPABILITIES.map((cap, i) => (
            <AnimatedSection key={i} variant="fade-up" delay={i * 100}>
              <a
                href="#contact"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 border-b border-white/5 py-8 md:py-10 hover:border-ai-cyan/20 transition-all duration-500 cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 group-hover:text-ai-cyan transition-colors duration-300 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                    {cap.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-white/30 text-xs md:text-sm tracking-widest font-bold hidden sm:block">
                    {cap.components}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-ai-cyan/50 group-hover:bg-ai-cyan/10 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-ai-cyan transition-colors duration-300" />
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
