import React from 'react';
import { ContactForm } from '../ui/ContactForm';
import { AnimatedSection } from '../ui/AnimatedSection';

export const FinalSection = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-taste-text leading-[1] mb-8">
                Ready to build.
              </h2>
              <p className="text-lg text-taste-muted font-light mb-12 max-w-md">
                Tell us what you're trying to build, automate, or grow. We'll handle the rest.
              </p>
              <div className="space-y-2 text-sm text-taste-muted font-light">
                <p>contact@ai-varsh.com</p>
                <p>+91 7804877448</p>
              </div>
            </AnimatedSection>
          </div>
          <div className="flex lg:justify-end">
            <AnimatedSection delay={200} className="w-full">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
