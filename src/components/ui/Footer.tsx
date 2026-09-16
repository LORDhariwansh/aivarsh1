import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ai-forest text-ai-ivory border-t border-ai-forest/90" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 pr-8">
            <div className="font-display font-medium text-3xl tracking-tight mb-6">AI VARSH</div>
            <p className="font-semibold text-sm mb-4 tracking-widest uppercase text-ai-gold">
              Build. Automate. Create. Grow.
            </p>
            <p className="text-ai-ivory/70 text-base leading-relaxed max-w-sm font-light">
              AI, technology, creative and digital growth solutions for modern businesses.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-medium text-sm mb-8 text-ai-ivory/50 tracking-widest uppercase">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#solutions" onClick={scrollTo('#solutions')} className="text-ai-ivory hover:text-ai-gold transition-colors font-light">Solutions</a></li>
              <li><a href="#work" onClick={scrollTo('#work')} className="text-ai-ivory hover:text-ai-gold transition-colors font-light">Work</a></li>
              <li><a href="#industries" onClick={scrollTo('#industries')} className="text-ai-ivory hover:text-ai-gold transition-colors font-light">Industries</a></li>
              <li><a href="#about" onClick={scrollTo('#about')} className="text-ai-ivory hover:text-ai-gold transition-colors font-light">About</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-ai-ivory hover:text-ai-gold transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-medium text-sm mb-8 text-ai-ivory/50 tracking-widest uppercase">Services</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-ai-ivory font-light">AI & Automation</li>
              <li className="text-ai-ivory font-light">Web & Apps</li>
              <li className="text-ai-ivory font-light">SEO</li>
              <li className="text-ai-ivory font-light">Graphic Design</li>
              <li className="text-ai-ivory font-light">Video</li>
              <li className="text-ai-ivory font-light">Branding</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="font-medium text-sm mb-8 text-ai-ivory/50 tracking-widest uppercase">Connect</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-ai-ivory hover:text-ai-gold transition-colors font-light">WhatsApp</a></li>
              <li><a href="#" className="text-ai-ivory hover:text-ai-gold transition-colors font-light">Instagram</a></li>
              <li><a href="#" className="text-ai-ivory hover:text-ai-gold transition-colors font-light">LinkedIn</a></li>
              <li><a href="#" className="text-ai-ivory hover:text-ai-gold transition-colors font-light">Email</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ai-ivory/10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ai-ivory/50 text-sm font-light">
            © {currentYear} AI Varsh. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-ai-ivory/50 text-sm hover:text-ai-gold transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-ai-ivory/50 text-sm hover:text-ai-gold transition-colors font-light">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
