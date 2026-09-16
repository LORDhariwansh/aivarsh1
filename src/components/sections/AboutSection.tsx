import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 bg-[#F7F6F2] text-ai-dark py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 md:mb-28">
          {/* Left: Heading */}
          <AnimatedSection variant="fade-up">
            <span className="text-ai-violet font-bold tracking-widest text-xs uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold whitespace-pre-line tracking-tight leading-[1.05]">
              {SITE_CONTENT.about.heading}
            </h2>
          </AnimatedSection>

          {/* Right: Description + Mission */}
          <AnimatedSection variant="fade-up" delay={200} className="flex flex-col justify-end gap-8">
            <p className="text-ai-dark/60 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {SITE_CONTENT.about.support}
            </p>

            <blockquote className="border-l-2 border-ai-violet/30 pl-6 py-2">
              <p className="text-ai-dark/50 text-sm md:text-base italic leading-relaxed">
                "{SITE_CONTENT.about.philosophy}"
              </p>
            </blockquote>

            <div className="pt-4">
              <h4 className="text-xs font-bold tracking-widest text-ai-dark/40 uppercase mb-3">Our Mission</h4>
              <p className="text-ai-dark/70 text-sm md:text-base leading-relaxed">
                {SITE_CONTENT.about.mission}
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Technology Grid */}
        <AnimatedSection variant="fade-up" delay={300}>
          <div className="border-t border-ai-dark/10 pt-12 md:pt-16">
            <h4 className="text-xs font-bold tracking-widest text-ai-dark/40 uppercase mb-8">
              Technologies We Work With
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {SITE_CONTENT.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-white border border-ai-dark/5 text-sm font-semibold text-ai-dark/60 hover:text-ai-dark hover:border-ai-violet/20 hover:shadow-sm transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tagline */}
        <AnimatedSection variant="fade-in" delay={400}>
          <div className="mt-20 md:mt-28 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-ai-dark/20 tracking-tight">
              Build. Automate. Grow.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
