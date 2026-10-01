import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-taste-bg border-t border-taste-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="AI-VARSH Logo" className="w-8 h-8 rounded-full opacity-90" />
              <span className="font-display font-medium text-xl tracking-tight text-taste-text">AI-VARSH</span>
            </div>
            <p className="text-sm text-taste-muted leading-relaxed max-w-xs font-light">
              Intelligence. Creativity. Growth. Modern digital solutions.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-taste-muted mb-8 font-medium">Index</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#services" onClick={scrollTo('#services')} className="text-sm text-taste-muted hover:text-taste-text transition-colors">Services</a></li>
              <li><a href="#solutions" onClick={scrollTo('#solutions')} className="text-sm text-taste-muted hover:text-taste-text transition-colors">Solutions</a></li>
              <li><a href="#process" onClick={scrollTo('#process')} className="text-sm text-taste-muted hover:text-taste-text transition-colors">Process</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-taste-muted mb-8 font-medium">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="https://wa.me/917804877448" target="_blank" rel="noopener noreferrer" className="text-sm text-taste-muted hover:text-taste-text transition-colors">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/ai.varsh/" target="_blank" rel="noopener noreferrer" className="text-sm text-taste-muted hover:text-taste-text transition-colors">Instagram</a></li>
              <li><a href="mailto:contact@ai-varsh.com" className="text-sm text-taste-muted hover:text-taste-text transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-taste-border px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-widest text-taste-muted font-medium">
            © {currentYear} AI-VARSH
          </p>
          <p className="text-[11px] uppercase tracking-widest text-taste-muted font-medium">
            Built in India
          </p>
        </div>
      </div>
    </footer>
  );
};
