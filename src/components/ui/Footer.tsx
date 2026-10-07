import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const INDEX_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

const CONNECT_LINKS = [
  { label: 'WhatsApp', href: 'https://wa.me/917804877448', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/ai.varsh/', external: true },
  { label: 'Email', href: 'mailto:contact@ai-varsh.com', external: false },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 py-20 md:py-24">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-10 group">
              <img src="/logo.png" alt="AI-VARSH" className="w-7 h-7 object-contain" />
              <span className="font-display font-semibold text-base tracking-tight text-zinc-50 group-hover:text-zinc-300 transition-colors duration-200">
                AI-VARSH
              </span>
            </Link>
            <p className="text-2xl md:text-3xl font-display font-semibold tracking-tighter text-zinc-50 leading-tight max-w-xs">
              Intelligence.<br />Creativity.<br />Growth.
            </p>
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed max-w-xs font-light">
              AI automation, development, design and digital growth — built for real business outcomes.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] border border-zinc-700 text-zinc-50 px-5 py-3 hover:border-[#E85D04] hover:text-[#E85D04] transition-all duration-200"
            >
              Start a project
              <ArrowUpRight size={11} strokeWidth={1.5} />
            </a>
          </div>

          {/* Index column */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-600 mb-6 border-b border-zinc-800 pb-4">
              Index
            </p>
            <ul className="flex flex-col gap-4">
              {INDEX_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200 font-light"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-600 mb-6 border-b border-zinc-800 pb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-4">
              {CONNECT_LINKS.map(({ label, href, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200 font-light"
                  >
                    {label}
                    {external && <ArrowUpRight size={11} strokeWidth={1.5} className="opacity-40" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[10px] font-mono tracking-[0.22em] text-zinc-700 uppercase">
            © {currentYear} AI-VARSH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[10px] font-mono tracking-[0.22em] text-zinc-500 hover:text-zinc-300 uppercase transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy" className="text-[10px] font-mono tracking-[0.22em] text-zinc-500 hover:text-zinc-300 uppercase transition-colors">
              Terms & Conditions
            </Link>
            <p className="text-[10px] font-mono tracking-[0.22em] text-zinc-700 uppercase">
              Built in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
