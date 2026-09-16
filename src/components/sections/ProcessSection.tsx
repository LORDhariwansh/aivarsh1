import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-ivory border-t border-ai-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-20 md:mb-32 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-ai-forest text-balance">
            {SITE_CONTENT.process.heading}
          </h2>
          <p className="text-lg md:text-xl text-ai-forest/70 leading-relaxed font-light">
            {SITE_CONTENT.process.statement}
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-4 left-0 right-0 h-px bg-ai-border z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {SITE_CONTENT.process.steps.map((step, index) => (
              <AnimatedSection key={step.num} delay={index * 100}>
                <div className="relative pl-10 lg:pl-0">
                  {/* Mobile Vertical Line */}
                  {index < SITE_CONTENT.process.steps.length - 1 && (
                    <div className="lg:hidden absolute left-[3px] top-8 bottom-[-48px] w-px bg-ai-border z-0" />
                  )}
                  
                  {/* Minimal Dot */}
                  <div className="absolute left-0 top-1.5 lg:top-0 lg:relative lg:mb-8 w-2 h-2 rounded-full bg-ai-gold z-10 ring-4 ring-ai-ivory" />

                  <div className="lg:pr-4">
                    <span className="text-xs font-semibold tracking-[0.2em] text-ai-gold uppercase block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-display font-bold mb-3 text-ai-forest tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-ai-forest/60 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
