import React, { useState } from 'react';
import { PORTFOLIO } from '../../data/services';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const FILTERS = ['All', 'Web', 'Apps', 'AI', 'Automation', 'Branding', 'Design', 'Video'];

export const WorkSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 md:py-32 bg-ai-cloud">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-ai-graphite text-balance">
            {SITE_CONTENT.workIntro.heading}
          </h2>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={100} className="mb-16">
          <div className="flex flex-wrap gap-4 md:gap-6 border-b border-ai-graphite/10 pb-4">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm tracking-wide font-bold transition-all duration-300 pb-4 -mb-[17px] ${
                  filter === f 
                    ? 'text-ai-teal border-b-2 border-ai-teal' 
                    : 'text-ai-graphite/50 hover:text-ai-graphite border-b-2 border-transparent'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Asymmetrical Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Create an asymmetrical layout based on index
              const isLarge = index === 0 || index === 3 || index === 6;
              const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
              const aspectRatio = isLarge ? 'aspect-[16/9]' : 'aspect-[4/5]';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={project.id}
                  className={`group relative flex flex-col ${colSpan}`}
                >
                  {/* Image Container with hover zoom */}
                  <div className={`w-full ${aspectRatio} bg-white rounded-xl overflow-hidden mb-6 relative shadow-modern-sm border border-ai-graphite/5`}>
                    <div className="absolute inset-0 bg-stone-100 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                    
                    {/* Hover Overlay Title */}
                    <div className="absolute inset-0 bg-ai-graphite/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-2xl font-display font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.name}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-ai-teal text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        <span className="text-xl leading-none">→</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-ai-graphite/50">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight text-ai-graphite">
                      {project.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
