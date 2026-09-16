import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { ContactForm } from '../ui/ContactForm';
import { AnimatedSection } from '../ui/AnimatedSection';

export const FinalSection = () => {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ai-dark via-[#0d1020] to-ai-dark" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: CTA Content */}
          <AnimatedSection variant="fade-up">
            <div className="lg:sticky lg:top-32">
              <span className="text-ai-cyan font-bold tracking-widest text-xs uppercase mb-4 block">
                Get Started
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold whitespace-pre-line tracking-tight mb-6 leading-[1.05]">
                {SITE_CONTENT.final.heading}
              </h2>

              <p className="text-lg md:text-xl text-white/50 whitespace-pre-line leading-relaxed mb-8">
                {SITE_CONTENT.final.support}
              </p>

              <p className="text-white/20 text-sm font-display font-bold tracking-widest uppercase">
                {SITE_CONTENT.final.tagline}
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection variant="fade-up" delay={200}>
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-lg font-display font-bold mb-6 text-white/80">
                Start a Conversation
              </h3>
              <ContactForm />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
