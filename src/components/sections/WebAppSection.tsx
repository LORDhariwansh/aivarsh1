import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

const technologies = [
  'React / Next.js', 'TypeScript', 'Node.js',
  'Python', 'Computer Vision', 'Generative AI',
  'Cloud Architecture', 'Database Design', 'Workflow Automation'
];

export const WebAppSection = () => {
  return (
    <section className="py-24 md:py-32 bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="text-2xl font-display font-medium tracking-tight text-taste-text mb-6">
              Technology Stack
            </h2>
            <p className="text-taste-muted text-sm font-light leading-relaxed">
              We use modern, reliable tools. No legacy code, no bloated frameworks. Just fast, scalable, and secure technology tailored for scale.
            </p>
          </div>
          <div className="md:col-span-7 lg:col-span-8 flex flex-wrap gap-3 content-start">
            {technologies.map((tech) => (
              <span key={tech} className="px-5 py-3 border border-taste-border bg-taste-surface text-xs text-taste-muted font-mono tracking-wide hover:border-taste-text hover:text-taste-text transition-colors duration-300">
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
