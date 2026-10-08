import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES_LINKS = [
  { label: 'AI Automation', href: '#services' },
  { label: 'Software', href: '#services' },
  { label: 'Web', href: '#services' },
  { label: 'Design', href: '#services' },
  { label: 'SEO', href: '#services' },
];

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/ai.varsh/' },
  { label: 'GitHub', href: 'https://github.com' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-ivory pt-24 pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 mb-24">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
            <Link to="/" className="inline-block mb-8 group">
              <span className="font-display font-medium text-2xl tracking-tight text-ivory group-hover:text-saffron transition-colors duration-200">
                AI VARSH
              </span>
            </Link>
            <p className="text-3xl md:text-4xl font-display font-medium tracking-tight text-ivory leading-tight max-w-sm">
              Intelligence.<br />Creativity.<br />Growth.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-2 lg:col-start-7">
            <h4 className="text-sm font-mono tracking-widest uppercase text-muted-light mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={(e) => handleNavClick(e, href)} className="text-base text-ivory/80 hover:text-saffron transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-mono tracking-widest uppercase text-muted-light mb-8">Services</h4>
            <ul className="flex flex-col gap-4">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={(e) => handleNavClick(e, href)} className="text-base text-ivory/80 hover:text-saffron transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-12">
              <h4 className="text-sm font-mono tracking-widest uppercase text-muted-light mb-8">Social</h4>
              <ul className="flex flex-col gap-4">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-base text-ivory/80 hover:text-saffron transition-colors">
                      {label}
                      <ArrowUpRight size={14} className="opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-mono tracking-widest uppercase text-muted-light mb-8">Contact</h4>
              <a href="mailto:hello@aivarsh.in" className="inline-flex items-center gap-1 text-base text-ivory/80 hover:text-saffron transition-colors break-all">
                hello@aivarsh.in
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-charcoal-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-light">
            © {currentYear} AI VARSH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-muted-light hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
