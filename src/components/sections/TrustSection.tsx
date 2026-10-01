import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const TrustSection = () => {
  return (
    <section className="py-32 md:py-48 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <p className="text-[clamp(1.5rem,4vw,4rem)] font-display font-light leading-[1.15] tracking-tight text-zinc-300 max-w-4xl">
            We start with the business,{' '}
            <span className="text-zinc-600">not the technology.</span>{' '}
            We understand how your business works and build what actually makes sense.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
