import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ProcessSection = () => {
  return (
    <section id="process" className="relative z-10 bg-ai-dark py-24 md:py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Heading */}
          <AnimatedSection variant="fade-up">
            <span className="text-ai-violet font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold whitespace-pre-line tracking-tight leading-[1.1] lg:sticky lg:top-32">
              {SITE_CONTENT.process.heading}
            </h2>
          </AnimatedSection>

          {/* Right: Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {SITE_CONTENT.process.steps.map((step, index) => (
              <AnimatedSection key={step.num} variant="fade-up" delay={index * 100}>
                <div className="group relative pl-8 md:pl-12">
                  {/* Vertical line */}
                  {index < SITE_CONTENT.process.steps.length - 1 && (
                    <div className="absolute left-[3px] md:left-[5px] top-10 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
                  )}

                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-[7px] h-[7px] md:w-[11px] md:h-[11px] rounded-full border-2 border-ai-violet/40 bg-ai-dark group-hover:border-ai-violet group-hover:bg-ai-violet/20 transition-colors duration-300" />

                  {/* Number */}
                  <div className="text-white/10 font-display font-bold text-5xl md:text-7xl absolute -top-4 -right-2 md:right-0 select-none pointer-events-none">
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3 group-hover:text-ai-violet transition-colors duration-300 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md">
                    {step.description}
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
