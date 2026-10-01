import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection = () => {
  return (
    <section className="py-24 md:py-40 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-taste-text leading-tight">
            Technology is complicated.<br />Using it shouldn't be.
          </h2>
          <p className="text-lg md:text-xl text-taste-muted leading-relaxed font-light">
            AI-VARSH exists to bridge the gap between advanced capability and everyday business utility. We focus on clarity, performance, and results.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
