import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ai-graphite text-ai-cloud border-t border-ai-graphite/90" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 pr-8">
            <div className="font-display font-bold text-2xl tracking-tight mb-6 text-white">AI VARSH</div>
            <p className="text-ai-cloud/60 text-base leading-relaxed max-w-sm font-medium">
              Modern digital solutions, AI automation, development, and creative design.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-bold text-sm mb-6 text-white tracking-wide">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#solutions" onClick={scrollTo('#solutions')} className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">Solutions</a></li>
              <li><a href="#work" onClick={scrollTo('#work')} className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">Work</a></li>
              <li><a href="#industries" onClick={scrollTo('#industries')} className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">Industries</a></li>
              <li><a href="#about" onClick={scrollTo('#about')} className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">About</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm mb-6 text-white tracking-wide">Services</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-ai-cloud/70 font-medium">AI & Automation</li>
              <li className="text-ai-cloud/70 font-medium">Web & Apps</li>
              <li className="text-ai-cloud/70 font-medium">SEO</li>
              <li className="text-ai-cloud/70 font-medium">Graphic Design</li>
              <li className="text-ai-cloud/70 font-medium">Video</li>
              <li className="text-ai-cloud/70 font-medium">Branding</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm mb-6 text-white tracking-wide">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">WhatsApp</a></li>
              <li><a href="#" className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">Instagram</a></li>
              <li><a href="#" className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">LinkedIn</a></li>
              <li><a href="#" className="text-ai-cloud/70 hover:text-ai-teal transition-colors font-medium">Email</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ai-cloud/40 text-sm font-medium">
            © {currentYear} AI Varsh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-ai-cloud/40 text-sm hover:text-ai-teal transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-ai-cloud/40 text-sm hover:text-ai-teal transition-colors font-medium">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
