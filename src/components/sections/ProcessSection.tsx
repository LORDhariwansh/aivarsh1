import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ai-cloud">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-ai-graphite text-balance">
            {SITE_CONTENT.process.heading}
          </h2>
        </AnimatedSection>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-4 left-0 right-0 h-px bg-ai-graphite/10 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {SITE_CONTENT.process.steps.map((step, index) => {
              // Highlight the middle step as "active" for visual interest, or step 1
              const isActive = index === 1;
              
              return (
                <AnimatedSection key={step.num} delay={index * 100}>
                  <div className="relative pl-10 lg:pl-0 group">
                    {/* Mobile Vertical Line */}
                    {index < SITE_CONTENT.process.steps.length - 1 && (
                      <div className="lg:hidden absolute left-[3px] top-8 bottom-[-48px] w-px bg-ai-graphite/10 z-0" />
                    )}
                    
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 lg:top-0 lg:relative lg:mb-8 w-2 h-2 rounded-full z-10 ring-4 ring-ai-cloud transition-colors duration-300 ${
                      isActive ? 'bg-ai-teal' : 'bg-ai-graphite/20 group-hover:bg-ai-teal'
                    }`} />

                    <div className="lg:pr-4">
                      <span className={`text-sm font-bold block mb-2 transition-colors ${
                        isActive ? 'text-ai-teal' : 'text-ai-graphite/30 group-hover:text-ai-teal'
                      }`}>
                        {step.num}
                      </span>
                      <h3 className="text-xl font-bold mb-3 text-ai-graphite tracking-tight">
                        {step.title.toUpperCase()}
                      </h3>
                      <p className="text-ai-graphite/60 text-base leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
