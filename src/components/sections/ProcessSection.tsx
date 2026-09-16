import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-card border-t border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
            {SITE_CONTENT.process.heading}
          </h2>
          <p className="text-lg text-ai-muted leading-relaxed">
            {SITE_CONTENT.process.statement}
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-ai-border z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {SITE_CONTENT.process.steps.map((step, index) => (
              <AnimatedSection key={step.num} delay={index * 100}>
                <div className="relative pl-8 lg:pl-0">
                  {/* Mobile Vertical Line */}
                  {index < SITE_CONTENT.process.steps.length - 1 && (
                    <div className="lg:hidden absolute left-[5px] top-8 bottom-[-48px] w-px bg-ai-border z-0" />
                  )}
                  
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 lg:top-0 lg:relative lg:mb-8 w-3 h-3 rounded-full bg-ai-text border-4 border-ai-card shadow-sm z-10" />

                  <div className="lg:pr-4">
                    <span className="text-xs font-bold tracking-widest text-ai-muted uppercase block mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-display font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-ai-muted text-sm leading-relaxed">
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
