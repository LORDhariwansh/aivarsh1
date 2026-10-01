import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const StorySection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-taste-surface border-t border-taste-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter text-taste-text leading-[1.1] mb-12">
            We build things<br />that actually do something.
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-taste-muted leading-relaxed font-light mb-6">
              AI-VARSH combines AI, development, automation, and design to solve real business problems without unnecessary complexity.
            </p>
            <p className="text-sm text-taste-muted/60 leading-relaxed font-light">
              Based in India. Working globally.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
