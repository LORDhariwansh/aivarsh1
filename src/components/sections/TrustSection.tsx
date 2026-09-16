import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-card border-y border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-3xl mb-16 md:mb-24">
          <p className="text-ai-accent text-sm font-medium mb-6">
            {SITE_CONTENT.trust.smallText}
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8 text-balance">
            {SITE_CONTENT.trust.heading}
          </h2>
          <p className="text-lg text-ai-muted leading-relaxed">
            {SITE_CONTENT.trust.paragraph}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {SITE_CONTENT.trust.principles.map((principle, index) => (
            <AnimatedSection key={principle.title} delay={index * 100}>
              <div className="border-l border-ai-border pl-6 py-1">
                <h3 className="text-xl font-display font-bold mb-3">{principle.title}</h3>
                <p className="text-ai-muted leading-relaxed text-sm md:text-base">
                  {principle.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
