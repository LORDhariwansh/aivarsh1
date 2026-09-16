import React from 'react';
import { SERVICES } from '../../data/services';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ai-dark border-t border-white/5 relative z-10" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="font-display font-bold text-2xl tracking-tight text-ai-base mb-4">AI-VARSH</div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Build better. Automate smarter. Grow faster. We combine design, development, AI automation and digital growth to solve real business problems.
            </p>
          </div>

          {/* Services - Build */}
          <div>
            <h4 className="text-white/80 font-bold text-xs tracking-widest uppercase mb-5">
              {SERVICES.build.subtitle}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.build.items.slice(0, 5).map(item => (
                <li key={item}>
                  <span className="text-white/50 text-sm hover:text-white transition-colors cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Automate */}
          <div>
            <h4 className="text-white/80 font-bold text-xs tracking-widest uppercase mb-5">
              {SERVICES.automate.subtitle}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.automate.items.slice(0, 5).map(item => (
                <li key={item}>
                  <span className="text-white/50 text-sm hover:text-white transition-colors cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + Contact */}
          <div>
            <h4 className="text-white/80 font-bold text-xs tracking-widest uppercase mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 mb-8">
              <li><a href="#services" onClick={scrollTo('#services')} className="text-white/50 text-sm hover:text-white transition-colors">Services</a></li>
              <li><a href="#solutions" onClick={scrollTo('#solutions')} className="text-white/50 text-sm hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#process" onClick={scrollTo('#process')} className="text-white/50 text-sm hover:text-white transition-colors">Process</a></li>
              <li><a href="#about" onClick={scrollTo('#about')} className="text-white/50 text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-white/50 text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            © {currentYear} AI-VARSH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-default">Privacy Policy</span>
            <span className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
