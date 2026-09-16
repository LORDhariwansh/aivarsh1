import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ai-bg border-t border-ai-border text-ai-text" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="font-display font-bold text-2xl tracking-tight mb-4">AI VARSH</div>
            <p className="font-medium text-sm mb-4">Build. Automate. Create. Grow.</p>
            <p className="text-ai-muted text-sm leading-relaxed max-w-xs">
              AI, technology, creative and digital growth solutions for modern businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#solutions" onClick={scrollTo('#solutions')} className="text-ai-muted text-sm hover:text-ai-text transition-colors">Solutions</a></li>
              <li><a href="#work" onClick={scrollTo('#work')} className="text-ai-muted text-sm hover:text-ai-text transition-colors">Work</a></li>
              <li><a href="#industries" onClick={scrollTo('#industries')} className="text-ai-muted text-sm hover:text-ai-text transition-colors">Industries</a></li>
              <li><a href="#about" onClick={scrollTo('#about')} className="text-ai-muted text-sm hover:text-ai-text transition-colors">About</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-ai-muted text-sm hover:text-ai-text transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-ai-muted text-sm">AI & Automation</li>
              <li className="text-ai-muted text-sm">Web & Apps</li>
              <li className="text-ai-muted text-sm">SEO</li>
              <li className="text-ai-muted text-sm">Graphic Design</li>
              <li className="text-ai-muted text-sm">Video</li>
              <li className="text-ai-muted text-sm">Branding</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-6">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-ai-muted text-sm hover:text-ai-text transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-ai-muted text-sm hover:text-ai-text transition-colors">Instagram</a></li>
              <li><a href="#" className="text-ai-muted text-sm hover:text-ai-text transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-ai-muted text-sm hover:text-ai-text transition-colors">Email</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ai-border px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ai-muted text-sm">
            © {currentYear} AI Varsh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-ai-muted text-sm hover:text-ai-text transition-colors">Privacy Policy</a>
            <a href="#" className="text-ai-muted text-sm hover:text-ai-text transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
