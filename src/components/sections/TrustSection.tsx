import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-taste-surface border-t border-taste-border overflow-hidden relative">
      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-taste-border/50" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-taste-border/50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-taste-text leading-[1.1]">
            We start with the business, not the technology.
          </h2>
          <div className="lg:pt-4">
            <p className="text-taste-muted text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
              Every business has different challenges. We understand how your business works and build what actually makes sense. No bloated frameworks, no unnecessary complexity.
            </p>
            <div className="w-12 h-px bg-taste-border" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
