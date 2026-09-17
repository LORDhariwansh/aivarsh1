import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const TrustSection = () => {
  return (
    <section className="py-12 md:py-16 bg-ai-deep border-y border-ai-ivory/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SITE_CONTENT.trust.principles.map((principle, index) => (
            <div key={principle.title} className="flex items-start gap-4 group">
              <div className="w-px h-12 bg-ai-saffron/30 shrink-0 group-hover:bg-ai-saffron transition-colors" />
              <div>
                <h3 className="text-base font-bold text-ai-ivory mb-1 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm text-ai-muted leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
