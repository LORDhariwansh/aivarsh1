import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { ContactForm } from '../ui/ContactForm';
import { AnimatedSection } from '../ui/AnimatedSection';

export const FinalSection = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-ai-forest text-ai-ivory relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16">
          
          {/* Left: Emotional Closing */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <AnimatedSection>
              <span className="text-ai-gold text-xs font-semibold tracking-[0.2em] uppercase mb-8 block flex items-center gap-3">
                <span className="w-6 h-px bg-ai-gold"></span>
                {SITE_CONTENT.final.label}
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-balance leading-tight">
                {SITE_CONTENT.final.heading}
              </h2>
              
              <p className="text-lg md:text-xl text-ai-ivory/60 leading-relaxed mb-12 max-w-md font-light">
                {SITE_CONTENT.final.support}
              </p>
              
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-ai-gold/60 animate-pulse"></span>
                <p className="text-sm font-medium text-ai-ivory/80 tracking-wide uppercase">
                  {SITE_CONTENT.final.smallText}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 lg:pl-12">
            <AnimatedSection delay={200}>
              <div className="bg-ai-forest border border-ai-ivory/10 p-10 md:p-12">
                <h3 className="text-3xl font-display font-medium mb-4">Tell us what you're working on.</h3>
                <p className="text-base text-ai-ivory/50 mb-12 font-light">
                  A website. An app. An automation. A brand. A campaign. Or something completely new.
                </p>
                
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  );
};
