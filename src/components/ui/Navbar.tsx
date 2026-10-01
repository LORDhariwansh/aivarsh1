import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 flex items-center justify-between ${
          isScrolled
            ? 'py-4 bg-taste-bg/80 backdrop-blur-md border-b border-taste-border'
            : 'py-8 bg-transparent border-b border-transparent'
        }`}
      >
        <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 z-50 group">
          <img src="/logo.png" alt="AI-VARSH Logo" className="w-8 h-8 rounded-full opacity-90 group-hover:opacity-100 transition-opacity" />
          <span className="font-display font-medium text-lg tracking-tight text-taste-text">
            AI-VARSH
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-xs font-medium uppercase tracking-widest text-taste-muted hover:text-taste-text transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 z-50">
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hidden sm:inline-flex items-center justify-center text-xs font-medium uppercase tracking-widest text-taste-text border border-taste-border px-6 py-2.5 rounded-full hover:bg-taste-surface transition-colors duration-300">
            Contact
          </a>

          <button className="lg:hidden text-taste-muted hover:text-taste-text transition-colors" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 bg-taste-bg ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl font-display font-medium text-taste-text hover:text-taste-muted transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="mt-8 text-sm font-medium uppercase tracking-widest text-taste-bg bg-taste-text px-8 py-4 rounded-full">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};
