import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const LocalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-cloud">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-ai-graphite text-balance leading-tight">
                Starting here.<br/>Thinking beyond.
              </h2>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <AnimatedSection delay={100} className="flex flex-col gap-8 text-lg md:text-xl text-ai-graphite/70 leading-relaxed font-medium">
              <p>
                AI Varsh is building its foundation in <span className="text-ai-teal font-bold">Chhattisgarh</span>, working with businesses across Raipur, Bhilai, Durg and surrounding regions.
              </p>
              <p>
                Our goal is to make modern technology, AI, creative services and digital growth accessible to businesses that want to move forward.
              </p>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};
