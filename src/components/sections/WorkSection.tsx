import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const projects = [
  {
    id: 1,
    name: 'SmartFlow Automations',
    category: 'AI / Automation',
    desc: 'Intelligent lead qualification and CRM sync.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'BuildCorp Dynamics',
    category: 'Web / Software',
    desc: 'Scalable web platform for enterprise management.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'TechNova Identity',
    category: 'Design / Branding',
    desc: 'Complete visual identity and digital presence.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2584&auto=format&fit=crop'
  }
];

export const WorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.work-item');
      
      items.forEach((item) => {
        const img = item.querySelector('.work-image');
        
        // Reveal animation
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            }
          }
        );

        if (img) {
          gsap.fromTo(img,
            { scale: 1.08, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="py-32 md:py-48 bg-ivory border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-charcoal">
            Selected Work
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, idx) => (
            <div key={project.id} className="work-item group">
              <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl bg-ivory-dark relative mb-8">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="work-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-charcoal mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm font-mono text-muted uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-6 text-left md:text-right">
                  <p className="text-base text-muted font-light max-w-sm">
                    {project.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-saffron transition-colors">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
