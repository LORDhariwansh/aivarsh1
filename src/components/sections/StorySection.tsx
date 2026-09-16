import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowDown } from 'lucide-react';

export const StorySection = () => {
  return (
    <div className="bg-ai-bg">
      {/* AI Automation Story */}
      <section className="py-24 md:py-32 border-t border-ai-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-ai-muted mb-6 block">
              {SITE_CONTENT.aiStory.label}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              {SITE_CONTENT.aiStory.heading}
            </h2>
          </AnimatedSection>

          {/* Visual Flowchart */}
          <div className="max-w-3xl mx-auto mb-16 relative">
            <div className="flex flex-col items-center gap-2">
              {SITE_CONTENT.aiStory.steps.map((step, index) => (
                <React.Fragment key={step}>
                  <AnimatedSection delay={index * 100}>
                    <div className="bg-white border border-ai-border px-6 py-3 rounded-lg shadow-sm text-sm font-medium tracking-wide">
                      {step}
                    </div>
                  </AnimatedSection>
                  
                  {index < SITE_CONTENT.aiStory.steps.length - 1 && (
                    <AnimatedSection delay={index * 100 + 50}>
                      <ArrowDown size={16} className="text-ai-border my-1" />
                    </AnimatedSection>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-ai-muted leading-relaxed mb-8">
              {SITE_CONTENT.aiStory.paragraph}
            </p>
            <a href="#contact" className="inline-block text-ai-text font-medium hover:text-ai-accent transition-colors">
              {SITE_CONTENT.aiStory.cta}
            </a>
          </AnimatedSection>

        </div>
      </section>

      {/* Creative Story */}
      <section className="py-24 md:py-32 bg-ai-card border-t border-ai-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8 text-balance">
              {SITE_CONTENT.creativeStory.heading}
            </h2>
            <p className="text-lg text-ai-muted leading-relaxed">
              {SITE_CONTENT.creativeStory.paragraph}
            </p>
          </AnimatedSection>

          {/* Visual Equation */}
          <AnimatedSection delay={200} className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base font-medium text-ai-muted mb-16">
              {SITE_CONTENT.creativeStory.equation.map((item, index) => (
                <React.Fragment key={item}>
                  <span className="px-5 py-3 rounded-full bg-ai-bg border border-ai-border text-ai-text">{item}</span>
                  {index < SITE_CONTENT.creativeStory.equation.length - 1 && (
                    <span>+</span>
                  )}
                </React.Fragment>
              ))}
              <span className="mx-2">=</span>
              <span className="px-6 py-3 rounded-full bg-ai-text text-white shadow-soft">{SITE_CONTENT.creativeStory.result}</span>
            </div>

            <div className="text-center">
              <a href="#contact" className="inline-block text-ai-text font-medium hover:text-ai-accent transition-colors">
                {SITE_CONTENT.creativeStory.cta}
              </a>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
};
