import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-taste-surface border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium tracking-tight text-taste-text leading-tight mb-6">
            We start with the business, not the technology.
          </h2>
          <p className="text-taste-muted text-base font-light">
            Every business has different challenges. We understand how your business works and build what actually makes sense.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
