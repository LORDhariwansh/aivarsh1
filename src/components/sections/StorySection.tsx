import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const StorySection = () => {
  return (
    <section id="about" className="py-32 md:py-44 bg-ai-deep relative overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-ai-saffron/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[200px] h-[200px] bg-ai-ivory/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-ai-saffron/70 mb-8 font-bold">
            ABOUT AI-VARSH
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight text-ai-ivory leading-[1.1] mb-12">
            WE LIKE BUILDING THINGS
            <br />
            THAT ACTUALLY DO
            <br />
            <span className="text-ai-saffron">SOMETHING.</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-ai-muted leading-relaxed mb-6">
              AI-VARSH combines AI, development, automation, design and growth solutions to solve real business problems.
            </p>
            <p className="text-base text-ai-muted/60 leading-relaxed">
              We're proudly based in India, working with businesses locally and globally — combining world-class technical talent with a genuine commitment to quality.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
