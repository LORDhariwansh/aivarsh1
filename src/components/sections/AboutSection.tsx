import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-white border-y border-ai-graphite/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
        
        {/* Abstract visual beside text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-ai-teal/5 rounded-full blur-3xl -z-10 hidden lg:block"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-ai-graphite/5 rounded-full blur-3xl -z-10 hidden lg:block"></div>

        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-12 text-ai-graphite text-balance leading-[1.05]">
            We believe good technology should feel simple.
          </h2>
          
          <div className="text-xl md:text-2xl text-ai-graphite/70 leading-relaxed max-w-3xl mx-auto font-medium">
            <p>
              AI Varsh brings together AI, automation, development, design, video and digital growth to help businesses build better digital experiences.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
