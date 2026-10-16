import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES_LINKS = [
  { label: 'AI Automation & Workflows', href: '#services' },
  { label: 'AI Video Analytics & Vision', href: '#services' },
  { label: 'Software & Web Development', href: '#services' },
  { label: 'Creative Design & Video', href: '#services' },
  { label: 'SEO & Digital Growth', href: '#services' },
];

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#showcase' },
  { label: 'Process', href: '#process' },
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
    <footer className="bg-[#060609] text-[#F8F7FF] pt-24 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      {/* Luminous violet accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
            <Link to="/" className="inline-block mb-6 group">
              <span className="font-sans font-bold text-2xl tracking-tight text-white group-hover:text-lavender transition-colors duration-200">
                AI VARSH
              </span>
            </Link>
            <p className="text-2xl md:text-3xl font-display font-medium tracking-tight text-white leading-tight max-w-sm mb-6">
              Intelligence.<br />Creativity.<br />Growth.
            </p>
            <p className="text-sm text-text-secondary font-light leading-relaxed max-w-xs">
              AI automation, video analytics, custom software, and digital experiences built to help businesses move forward.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="col-span-1 md:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-mono tracking-widest uppercase text-lavender mb-6 font-semibold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-mono tracking-widest uppercase text-lavender mb-6 font-semibold">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Direct Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-8">
              <h4 className="text-xs font-mono tracking-widest uppercase text-lavender mb-6 font-semibold">
                Social
              </h4>
              <ul className="flex flex-col gap-3.5">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors"
                    >
                      {label}
                      <ArrowUpRight size={13} className="opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-mono tracking-widest uppercase text-lavender mb-3 font-semibold">
                Direct Contact
              </h4>
              <a
                href="mailto:hello@aivarsh.in"
                className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-white transition-colors break-all"
              >
                hello@aivarsh.in
              </a>
              <p className="text-xs text-text-dim mt-1.5">+91 78048 77448</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-text-dim">
            © {currentYear} AI VARSH. All rights reserved. Building what's next.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs font-mono text-text-dim hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
