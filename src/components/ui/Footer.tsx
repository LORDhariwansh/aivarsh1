import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ai-midnight border-t border-ai-ivory/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5 pr-8">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/favicon.svg" alt="" className="w-7 h-7" aria-hidden="true" />
              <span className="font-display font-bold text-xl tracking-tight text-ai-ivory">AI-VARSH</span>
            </div>
            <p className="text-sm text-ai-ivory/40 leading-relaxed max-w-xs mb-4 font-medium">
              Intelligence. Creativity. Growth.
            </p>
            <p className="text-sm text-ai-muted/60 leading-relaxed max-w-sm">
              Modern digital solutions combining technology, creativity and AI to help businesses grow.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs tracking-[0.2em] uppercase text-ai-muted/40 mb-6 font-bold">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" onClick={scrollTo('#services')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">Services</a></li>
              <li><a href="#solutions" onClick={scrollTo('#solutions')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">Solutions</a></li>
              <li><a href="#process" onClick={scrollTo('#process')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">Process</a></li>
              <li><a href="#about" onClick={scrollTo('#about')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">About</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-ai-muted/40 mb-6 font-bold">Services</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-ai-muted font-medium">AI & Automation</li>
              <li className="text-sm text-ai-muted font-medium">Web & Apps</li>
              <li className="text-sm text-ai-muted font-medium">SEO & Growth</li>
              <li className="text-sm text-ai-muted font-medium">Design & Creative</li>
              <li className="text-sm text-ai-muted font-medium">Computer Vision</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-ai-muted/40 mb-6 font-bold">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">WhatsApp</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">Instagram</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">LinkedIn</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-sm text-ai-muted hover:text-ai-saffron transition-colors font-medium">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ai-ivory/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ai-muted/40 font-medium">
            © {currentYear} AI-VARSH. All rights reserved.
          </p>
          <p className="text-xs text-ai-muted/30 font-medium">
            Designed & built by AI-VARSH
          </p>
        </div>
      </div>
    </footer>
  );
};
