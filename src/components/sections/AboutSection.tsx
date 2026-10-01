import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection = () => {
  return (
    <section className="py-24 md:py-40 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
          {[
            { num: '01', title: 'Business first', body: 'We understand the problem before choosing any technology. Most teams do it backwards.' },
            { num: '02', title: 'Simple by design', body: 'Complex systems should feel simple. We remove layers, not add them.' },
            { num: '03', title: 'One team', body: 'Technology, design, content, and digital growth — no managing multiple vendors.' },
          ].map((item) => (
            <div key={item.num} className="bg-zinc-950 p-10 md:p-12 group hover:bg-zinc-900 transition-colors duration-500">
              <span className="block text-[10px] font-mono text-zinc-700 mb-8">{item.num}</span>
              <h3 className="text-lg font-display font-medium text-zinc-50 mb-4">{item.title}</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
