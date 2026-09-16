import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const LocalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-ivory border-t border-ai-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-ai-forest text-balance leading-tight">
                Starting from <span className="text-ai-gold italic pr-2">Chhattisgarh.</span> Building for everywhere.
              </h2>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <AnimatedSection delay={100} className="flex flex-col gap-6 text-lg text-ai-forest/70 leading-relaxed font-light">
              <p>{SITE_CONTENT.local.p1}</p>
              <p>{SITE_CONTENT.local.p2}</p>
              <p>{SITE_CONTENT.local.p3}</p>
              
              <div className="mt-8">
                <a href="#contact" className="inline-block text-ai-forest font-medium hover:text-ai-gold transition-colors pb-1 border-b border-ai-forest/20 hover:border-ai-gold">
                  {SITE_CONTENT.local.cta}
                </a>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};
