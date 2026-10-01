import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

const creativeWords = ['Web', 'Design', 'Motion', 'Growth'];

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-40 bg-taste-surface border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-display font-medium tracking-tight text-taste-text">
            Creative Services
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {creativeWords.map((word, i) => (
            <AnimatedSection key={word} delay={i * 100}>
              <div className="group border-b border-taste-border py-8 hover:px-6 transition-all duration-500 cursor-default">
                <span className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter text-taste-muted/20 group-hover:text-taste-text transition-colors duration-500">
                  {word}.
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
