import React from 'react';
import { ContactForm } from '../ui/ContactForm';
import { AnimatedSection } from '../ui/AnimatedSection';

export const FinalSection = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-6">
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-taste-text leading-[1] mb-8">
                Ready to build.
              </h2>
              <p className="text-lg text-taste-muted font-light mb-12 max-w-md leading-relaxed">
                Tell us what you're trying to build, automate, or grow. We start with a conversation to understand the business before writing a single line of code.
              </p>
              
              <div className="flex flex-col gap-1 text-sm text-taste-text font-light">
                <span className="text-[10px] font-mono tracking-widest text-taste-muted uppercase mb-2">Direct Contact</span>
                <a href="mailto:contact@ai-varsh.com" className="hover:text-taste-muted transition-colors">contact@ai-varsh.com</a>
                <a href="https://wa.me/917804877448" className="hover:text-taste-muted transition-colors">+91 7804877448</a>
              </div>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <AnimatedSection delay={200} className="w-full lg:max-w-md">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
