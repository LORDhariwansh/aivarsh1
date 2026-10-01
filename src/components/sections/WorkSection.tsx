import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

const creativeWords = ['Web', 'Design', 'Motion', 'Growth'];

export const WorkSection = () => {
  return (
    <section id="work" className="py-32 md:py-48 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <AnimatedSection>
              <h2 className="text-sm font-medium tracking-widest uppercase text-taste-muted">
                Creative Output
              </h2>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {creativeWords.map((word, i) => (
              <AnimatedSection key={word} delay={i * 100}>
                <div className="group border-b border-taste-border py-12 hover:px-8 transition-all duration-500 cursor-default">
                  <span className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter text-taste-muted/10 group-hover:text-taste-text transition-colors duration-500">
                    {word}.
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
