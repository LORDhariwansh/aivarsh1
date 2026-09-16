import React from 'react';
import { ContactForm } from '../ui/ContactForm';
import { AnimatedSection } from '../ui/AnimatedSection';

export const FinalSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left: Emotional Closing */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-balance leading-[1.1] text-ai-graphite">
                Let's talk about what you're building.
              </h2>
              
              <p className="text-lg md:text-xl text-ai-graphite/70 leading-relaxed mb-12 max-w-md font-medium">
                You don't need a perfect brief. Tell us what you have in mind, and we'll figure out the next step together.
              </p>
              
              <div className="flex items-center gap-6">
                <a href="#contact" className="text-ai-graphite font-bold hover:text-ai-teal transition-colors flex items-center gap-2 group">
                  WhatsApp Us
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Approachable Contact Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <AnimatedSection delay={200}>
              <div className="bg-ai-cloud/50 rounded-2xl p-8 md:p-10 border border-ai-graphite/5">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  );
};
