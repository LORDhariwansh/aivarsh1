import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-ai-card border-t border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        <AnimatedSection className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-10">
            {SITE_CONTENT.about.heading}
          </h2>
          
          <div className="flex flex-col gap-6 text-lg md:text-xl text-ai-muted leading-relaxed mb-12">
            <p>{SITE_CONTENT.about.p1}</p>
            <p>{SITE_CONTENT.about.p2}</p>
          </div>

          <p className="text-xl md:text-2xl font-display font-bold text-ai-text text-balance">
            {SITE_CONTENT.about.closing}
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
};
