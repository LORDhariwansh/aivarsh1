import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { ContactForm } from '../ui/ContactForm';
import { AnimatedSection } from '../ui/AnimatedSection';

export const FinalSection = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-white border-t border-ai-border relative overflow-hidden">
      
      {/* Decorative generous whitespace and subtle gradients can remain minimal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16">
          
          {/* Left: Emotional Closing */}
          <div className="lg:sticky lg:top-32 h-fit">
            <AnimatedSection>
              <span className="text-xs font-bold tracking-widest uppercase text-ai-muted mb-6 block">
                {SITE_CONTENT.final.label}
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-balance">
                {SITE_CONTENT.final.heading}
              </h2>
              
              <p className="text-lg md:text-xl text-ai-muted leading-relaxed mb-10 max-w-md">
                {SITE_CONTENT.final.support}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {/* Visual cue to the form next to it on desktop, or down on mobile */}
                <p className="text-sm font-medium text-ai-text flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {SITE_CONTENT.final.smallText}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Contact Form */}
          <AnimatedSection delay={200}>
            <div className="bg-ai-bg border border-ai-border rounded-2xl p-8 md:p-10 shadow-soft">
              <h3 className="text-2xl font-display font-bold mb-2">Tell us what you're working on.</h3>
              <p className="text-sm text-ai-muted mb-8">
                A website. An app. An automation. A brand. A campaign. Or something completely new.
              </p>
              
              <ContactForm />
            </div>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  );
};
