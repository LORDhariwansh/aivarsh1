import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const WhySection = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-ai-graphite/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-ai-graphite">
            Technology should feel simpler than it is.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SITE_CONTENT.whyUs.blocks.map((block, index) => (
            <AnimatedSection key={block.title} delay={index * 100}>
              <div className="flex flex-col h-full border-l-2 border-ai-graphite/10 pl-6 group hover:border-ai-teal transition-colors duration-300">
                <h3 className="text-lg font-bold tracking-tight mb-4 text-ai-graphite group-hover:text-ai-teal transition-colors">
                  {block.title}
                </h3>
                <p className="text-ai-graphite/60 text-base leading-relaxed font-medium">
                  {block.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
