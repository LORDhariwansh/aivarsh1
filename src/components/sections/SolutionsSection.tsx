import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

const solutions = [
  { title: 'AI Automation', desc: 'Intelligent workflows that reduce manual effort.' },
  { title: 'Business Websites', desc: 'Fast, minimal websites that convert.' },
  { title: 'AI Video Analytics', desc: 'Enterprise detection and monitoring.' },
  { title: 'Digital Platforms', desc: 'Custom portals built to spec.' },
  { title: 'Customer Automation', desc: 'WhatsApp bots and lead qualification.' },
  { title: 'AI Integrations', desc: 'Chatbots and data processing.' },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-taste-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-taste-text sticky top-32">
              Solutions for real business.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {solutions.map((sol, index) => (
              <div key={sol.title} className="border-b border-taste-border py-8 group first:pt-0 last:border-0 hover:pl-4 transition-all duration-300">
                <h3 className="text-xl font-medium text-taste-text mb-2 tracking-tight group-hover:text-taste-muted transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-taste-muted font-light">
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
