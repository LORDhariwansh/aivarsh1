import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-midnight relative overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-ai-saffron/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-ai-ivory/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-8 text-ai-ivory text-balance leading-[1.15]">
            We believe good technology should feel simple.
          </h2>
          <p className="text-lg md:text-xl text-ai-muted leading-relaxed max-w-2xl mx-auto">
            AI-VARSH brings together AI, automation, development, design, video and digital growth to help businesses build better digital experiences.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
