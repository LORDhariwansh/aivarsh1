import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const StorySection = () => {
  return (
    <div className="w-full">
      {/* AI Automation Story - Graphite Theme */}
      <section className="py-32 md:py-48 bg-ai-graphite text-ai-cloud">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8">
              Less repetitive work. <span className="text-ai-teal block mt-2">More time for what matters.</span>
            </h2>
          </AnimatedSection>

          {/* Premium Software Interface Workflow */}
          <div className="max-w-4xl mx-auto mb-24 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
              {/* Desktop horizontal line */}
              <div className="hidden md:block absolute top-1/2 left-10 right-10 h-px bg-ai-teal/20 -translate-y-1/2 z-0"></div>
              
              {SITE_CONTENT.aiStory.steps.map((step, index) => (
                <React.Fragment key={step}>
                  <AnimatedSection delay={index * 100} className="z-10 bg-ai-graphite">
                    <div className="text-xs font-bold tracking-widest uppercase text-ai-cloud/80 border border-ai-teal/30 px-4 py-3 rounded-md text-center hover:border-ai-teal transition-colors cursor-default whitespace-nowrap bg-ai-graphite relative">
                      {step}
                      {/* Active glow dot */}
                      {index === 2 && (
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-ai-teal shadow-[0_0_10px_rgba(32,184,166,0.6)]"></div>
                      )}
                    </div>
                  </AnimatedSection>
                  
                  {/* Mobile vertical line */}
                  {index < SITE_CONTENT.aiStory.steps.length - 1 && (
                    <AnimatedSection delay={index * 100 + 50} className="md:hidden">
                      <div className="h-6 w-px bg-ai-teal/30"></div>
                    </AnimatedSection>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Creative Story - Visual Composition */}
      <section className="py-24 md:py-32 bg-ai-cloud border-t border-ai-graphite/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-ai-graphite text-balance">
              Technology gets things working. <br />
              <span className="text-ai-graphite/40">Design makes people care.</span>
            </h2>
          </AnimatedSection>

          {/* Visual Editorial Grid (Placeholder for real creative assets) */}
          <AnimatedSection delay={200} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
              <div className="col-span-2 row-span-2 bg-[#E2E8F0] rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-ai-graphite/20 font-display font-bold text-3xl">Brand Identity</div>
              </div>
              <div className="col-span-1 row-span-1 bg-[#CBD5E1] rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-ai-graphite/20 font-display font-bold text-xl text-center px-4">Social Media</div>
              </div>
              <div className="col-span-1 row-span-1 bg-[#94A3B8] rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-ai-graphite/20 font-display font-bold text-xl text-center px-4">Campaign</div>
              </div>
              <div className="col-span-2 row-span-1 bg-[#F1F5F9] border border-ai-graphite/5 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-ai-graphite/20 font-display font-bold text-xl text-center px-4">Website UI</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <a href="#work" className="inline-flex items-center gap-2 text-ai-graphite font-bold hover:text-ai-teal transition-colors">
              View Creative Work <span className="text-xl">→</span>
            </a>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
};
