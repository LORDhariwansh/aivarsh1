import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const solutions = [
  { title: 'AI Automation', desc: 'Intelligent workflows that reduce manual effort and scale operations.' },
  { title: 'Business Websites', desc: 'Professional, fast websites that convert visitors into customers.' },
  { title: 'AI Video Analytics', desc: 'Enterprise detection and monitoring systems for security and retail.' },
  { title: 'Digital Platforms', desc: 'Custom dashboards, portals and web applications built to spec.' },
  { title: 'Customer Automation', desc: 'WhatsApp bots, lead qualification and automated follow-ups.' },
  { title: 'AI Integrations', desc: 'Chatbots, recommendation engines and intelligent data processing.' },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-ai-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-ai-saffron/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-ai-saffron/40" />
            SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ai-ivory">
            SOLUTIONS FOR REAL BUSINESS
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, index) => (
            <AnimatedSection key={sol.title} delay={index * 80}>
              <div className="group bg-ai-deep border border-ai-ivory/5 rounded-xl p-7 h-full hover:-translate-y-1 hover:border-ai-saffron/20 transition-all duration-400 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-display font-bold text-ai-ivory group-hover:text-ai-saffron transition-colors duration-300">
                    {sol.title}
                  </h3>
                  <ArrowRight
                    size={14}
                    className="text-ai-muted/20 group-hover:text-ai-saffron group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1"
                  />
                </div>
                <p className="text-sm text-ai-muted/60 leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
