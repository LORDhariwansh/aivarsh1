import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const LocalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-bg border-t border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-8 text-balance">
                {SITE_CONTENT.local.heading}
              </h2>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <AnimatedSection delay={100} className="flex flex-col gap-6 text-lg text-ai-muted leading-relaxed">
              <p>{SITE_CONTENT.local.p1}</p>
              <p>{SITE_CONTENT.local.p2}</p>
              <p>{SITE_CONTENT.local.p3}</p>
              
              <div className="mt-4">
                <a href="#contact" className="inline-block text-ai-text font-medium hover:text-ai-accent transition-colors">
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
