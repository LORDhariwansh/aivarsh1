import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-ai-midnight relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-ai-saffron/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-ai-saffron/70 mb-4 font-bold">
            HOW WE WORK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ai-ivory">
            Our Process
          </h2>
        </AnimatedSection>

        {/* Desktop: Horizontal layout */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-ai-ivory/5 z-0" />
          <div className="hidden lg:block absolute top-5 left-0 w-1/2 h-px bg-gradient-to-r from-ai-saffron/40 to-ai-saffron/10 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
            {SITE_CONTENT.process.steps.map((step, index) => (
              <AnimatedSection key={step.num} delay={index * 100}>
                <div className="relative group">
                  {/* Mobile vertical line */}
                  {index < SITE_CONTENT.process.steps.length - 1 && (
                    <div className="lg:hidden absolute left-[5px] top-12 bottom-[-32px] w-px bg-ai-ivory/5 z-0" />
                  )}

                  {/* Dot */}
                  <div
                    className={`w-3 h-3 rounded-full mb-6 transition-colors duration-300 relative z-10 ring-4 ring-ai-midnight ${
                      index < 3
                        ? 'bg-ai-saffron'
                        : 'bg-ai-ivory/20 group-hover:bg-ai-saffron'
                    }`}
                  />

                  <span
                    className={`text-xs font-bold block mb-2 transition-colors font-mono ${
                      index < 3
                        ? 'text-ai-saffron'
                        : 'text-ai-muted/40 group-hover:text-ai-saffron'
                    }`}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-ai-ivory tracking-tight">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-ai-muted/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
