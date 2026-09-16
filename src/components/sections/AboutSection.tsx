import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-white border-t border-ai-border/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        
        <AnimatedSection className="flex flex-col items-center">
          <div className="w-px h-16 bg-ai-gold mb-10"></div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-16 text-ai-forest text-balance leading-[1.1]">
            Technology should make business simpler.
          </h2>
          
          <div className="flex flex-col gap-8 text-lg md:text-xl text-ai-forest/60 leading-relaxed mb-20 max-w-2xl mx-auto font-light">
            <p>{SITE_CONTENT.about.p1}</p>
            <p>{SITE_CONTENT.about.p2}</p>
          </div>

          <div className="border-t border-ai-border/30 pt-12 w-full max-w-sm mx-auto">
            <p className="text-sm tracking-[0.2em] font-semibold text-ai-gold uppercase">
              {SITE_CONTENT.about.closing}
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
