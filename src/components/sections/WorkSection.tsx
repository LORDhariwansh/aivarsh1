import React, { useState } from 'react';
import { PORTFOLIO } from '../../data/services';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FILTERS = ['All', 'Web', 'Apps', 'AI', 'Automation', 'Branding', 'Design', 'Video'];

export const WorkSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 md:py-32 bg-ai-bg border-t border-ai-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
            {SITE_CONTENT.workIntro.heading}
          </h2>
          <p className="text-lg text-ai-muted leading-relaxed">
            {SITE_CONTENT.workIntro.paragraph}
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={100} className="mb-12">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f 
                    ? 'bg-ai-text text-white' 
                    : 'bg-transparent border border-ai-border text-ai-muted hover:border-ai-text hover:text-ai-text'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-ai-card border border-ai-border rounded-xl p-8 hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ai-muted bg-ai-bg px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  
                  {project.name.includes("Prototype") && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-sm border border-orange-100">
                      Demo
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 tracking-tight group-hover:text-ai-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-ai-muted text-sm mb-8 line-clamp-2">
                  {project.desc}
                </p>

                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-ai-text">
                  View project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
