import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Python', 'Computer Vision', 'Generative AI',
  'Cloud Architecture', 'PostgreSQL', 'Firebase'
];

export const WebAppSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-display font-medium tracking-tight text-zinc-50 mb-6">Technology Stack</h2>
            <p className="text-sm text-zinc-500 font-light leading-relaxed">
              Modern, reliable tooling. No legacy debt, no bloated dependencies.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="px-5 py-2.5 border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 font-mono tracking-wide hover:border-zinc-600 hover:text-zinc-50 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
