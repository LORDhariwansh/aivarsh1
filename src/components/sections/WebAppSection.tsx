import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Python', 'Computer Vision', 'Generative AI',
  'Cloud Architecture', 'Database Design'
];

export const WebAppSection = () => {
  return (
    <section className="py-24 md:py-32 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-display font-medium tracking-tight text-taste-text mb-6">
              Technology Stack
            </h2>
            <p className="text-taste-muted text-sm font-light leading-relaxed max-w-sm">
              We use modern, reliable tools. No legacy code, no bloated frameworks. Just fast, scalable, and secure technology.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 content-start">
            {technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 border border-taste-border text-xs text-taste-muted font-mono tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
