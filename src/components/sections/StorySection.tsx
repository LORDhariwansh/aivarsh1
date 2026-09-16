import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const StorySection = () => {
  return (
    <div className="w-full">
      {/* AI Automation Story - Deep Forest */}
      <section className="py-24 md:py-32 bg-ai-forest text-ai-ivory border-t border-ai-border/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-ai-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">
              {SITE_CONTENT.aiStory.label}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">
              {SITE_CONTENT.aiStory.heading}
            </h2>
          </AnimatedSection>

          {/* Visual Flowchart - Premium Tech Presentation */}
          <div className="max-w-md mx-auto mb-20 relative">
            <div className="flex flex-col items-center">
              {SITE_CONTENT.aiStory.steps.map((step, index) => (
                <React.Fragment key={step}>
                  <AnimatedSection delay={index * 150}>
                    <div className="text-sm tracking-[0.1em] font-light uppercase text-ai-ivory bg-ai-forest border border-ai-gold/30 px-6 py-4 w-64 text-center rounded-sm">
                      {step}
                    </div>
                  </AnimatedSection>
                  
                  {index < SITE_CONTENT.aiStory.steps.length - 1 && (
                    <AnimatedSection delay={index * 150 + 75}>
                      <div className="h-10 w-px bg-ai-gold/40 my-2"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-ai-gold/60 mb-2"></div>
                    </AnimatedSection>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-ai-ivory/70 leading-relaxed mb-10 font-light">
              {SITE_CONTENT.aiStory.paragraph}
            </p>
            <a href="#contact" className="inline-block text-ai-ivory font-medium hover:text-ai-gold transition-colors pb-1 border-b border-ai-gold/30 hover:border-ai-gold">
              {SITE_CONTENT.aiStory.cta}
            </a>
          </AnimatedSection>

        </div>
      </section>

      {/* Creative Story - Warm Ivory */}
      <section className="py-24 md:py-32 bg-ai-ivory border-t border-ai-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-ai-forest text-balance">
              {SITE_CONTENT.creativeStory.heading}
            </h2>
            <p className="text-lg md:text-xl text-ai-forest/70 leading-relaxed font-light">
              {SITE_CONTENT.creativeStory.paragraph}
            </p>
          </AnimatedSection>

          {/* Visual Equation */}
          <AnimatedSection delay={200} className="max-w-5xl mx-auto mt-20 mb-20">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-ai-forest/80">
              {SITE_CONTENT.creativeStory.equation.map((item, index) => (
                <React.Fragment key={item}>
                  <span className="px-6 py-4 rounded-sm border border-ai-border text-ai-forest uppercase tracking-widest text-xs">{item}</span>
                  {index < SITE_CONTENT.creativeStory.equation.length - 1 && (
                    <span className="text-ai-gold font-light text-xl">+</span>
                  )}
                </React.Fragment>
              ))}
              <span className="mx-2 text-ai-gold font-light text-2xl">=</span>
              <span className="px-8 py-4 rounded-sm bg-ai-forest text-ai-ivory shadow-soft uppercase tracking-widest text-xs mt-4 md:mt-0">
                {SITE_CONTENT.creativeStory.result}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="text-center">
            <a href="#contact" className="inline-block text-ai-forest font-medium hover:text-ai-gold transition-colors pb-1 border-b border-ai-forest/20 hover:border-ai-gold">
              {SITE_CONTENT.creativeStory.cta}
            </a>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
};
