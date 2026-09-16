import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-32 pb-20 overflow-hidden bg-ai-cloud">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8 tracking-tight text-ai-graphite text-balance"
          >
            We build <span className="text-ai-teal">digital solutions</span> that move businesses forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-ai-graphite/70 leading-relaxed mb-12 max-w-lg font-medium"
          >
            AI Varsh combines AI, automation, development, design and digital growth to help businesses build better, work smarter and grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="bg-ai-graphite text-ai-cloud px-8 py-4 font-bold hover:bg-black transition-colors duration-300 flex items-center gap-3 group rounded-md shadow-modern-sm"
            >
              Start a Conversation 
              <span className="w-1.5 h-1.5 rounded-full bg-ai-teal group-hover:scale-150 transition-transform"></span>
            </a>
            <a
              href="#work"
              onClick={scrollTo('#work')}
              className="border border-ai-graphite text-ai-graphite px-8 py-4 font-bold hover:bg-ai-graphite/5 transition-colors duration-300 rounded-md"
            >
              Explore Our Work
            </a>
          </motion.div>
        </div>

        {/* Right Visual: Digital Operating System */}
        <div className="lg:col-span-6 lg:h-[600px] relative hidden lg:block perspective-1000">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <path d="M150,200 L250,150 L350,250 L250,350 Z" fill="none" stroke="#20B8A6" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
              <path d="M250,150 L400,100" fill="none" stroke="#17191C" strokeWidth="1" className="opacity-10" />
              <path d="M350,250 L450,300" fill="none" stroke="#17191C" strokeWidth="1" className="opacity-10" />
              <path d="M250,350 L150,450" fill="none" stroke="#17191C" strokeWidth="1" className="opacity-10" />
            </svg>

            {/* Floating Module: AI */}
            <div className="absolute top-[15%] left-[20%] animate-float-slow z-10">
              <div className="bg-white border border-ai-graphite/10 p-5 rounded-xl shadow-modern w-40">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-2 h-2 rounded-full bg-ai-teal"></div>
                  <div className="text-[10px] font-bold text-ai-graphite/40 tracking-wider">01</div>
                </div>
                <div className="text-sm font-bold text-ai-graphite">AI Engine</div>
                <div className="w-full h-1 bg-ai-graphite/5 mt-2 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-ai-teal"></div>
                </div>
              </div>
            </div>

            {/* Floating Module: AUTOMATION */}
            <div className="absolute top-[35%] right-[15%] animate-float-delayed z-20">
              <div className="bg-ai-graphite text-ai-cloud p-5 rounded-xl shadow-modern w-48">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-ai-teal tracking-wider uppercase">Automation</div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-full h-1.5 bg-ai-cloud/10 rounded-full"></div>
                  <div className="w-4/5 h-1.5 bg-ai-cloud/10 rounded-full"></div>
                  <div className="w-full h-1.5 bg-ai-teal/80 rounded-full mt-2"></div>
                </div>
              </div>
            </div>

            {/* Floating Module: WEB/APP */}
            <div className="absolute bottom-[20%] left-[25%] animate-float-slow z-10" style={{ animationDelay: '1s' }}>
              <div className="bg-white border border-ai-graphite/10 p-4 rounded-xl shadow-modern w-56 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-ai-cloud border border-ai-graphite/5 flex flex-wrap gap-0.5 p-2">
                  <div className="w-2.5 h-2.5 bg-ai-graphite/20 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-ai-teal rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-ai-graphite/20 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-ai-graphite/20 rounded-sm"></div>
                </div>
                <div>
                  <div className="text-xs font-bold text-ai-graphite">Web & App</div>
                  <div className="text-[10px] text-ai-graphite/50 font-medium">Responsive scaling</div>
                </div>
              </div>
            </div>

            {/* Subtle central node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-ai-teal/5 rounded-full blur-2xl z-0"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
