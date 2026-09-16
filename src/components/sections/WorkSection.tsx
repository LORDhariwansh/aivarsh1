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
    <section id="work" className="py-24 md:py-32 bg-ai-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <AnimatedSection className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 text-ai-forest text-balance">
            {SITE_CONTENT.workIntro.heading}
          </h2>
          <p className="text-lg md:text-xl text-ai-forest/70 leading-relaxed font-light max-w-2xl">
            {SITE_CONTENT.workIntro.paragraph}
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={100} className="mb-16">
          <div className="flex flex-wrap gap-6 md:gap-8 border-b border-ai-border/50 pb-4">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm tracking-widest uppercase transition-all duration-300 pb-4 -mb-[17px] ${
                  filter === f 
                    ? 'text-ai-forest border-b-2 border-ai-gold font-medium' 
                    : 'text-ai-forest/40 hover:text-ai-forest border-b-2 border-transparent'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.id}
                className="group relative flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-white border border-ai-border/40 rounded-sm overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-stone-100 opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                  {/* Subtle placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center text-ai-forest/10 font-display font-bold text-4xl">
                    {project.name.charAt(0)}
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ai-gold">
                      {project.category}
                    </span>
                    {project.name.includes("Prototype") && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-ai-border"></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-ai-forest/40">
                          Demo
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-2 tracking-tight text-ai-forest group-hover:text-ai-gold transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-ai-forest/60 text-sm mb-6 font-light">
                    {project.desc}
                  </p>

                  <div className="mt-auto pt-4">
                    <a href={project.link} className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-ai-forest group-hover:text-ai-gold transition-colors pb-1 border-b border-transparent group-hover:border-ai-gold">
                      View project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
