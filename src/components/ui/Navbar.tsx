import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Work', href: '#work' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 flex items-center justify-between ${
          isScrolled
            ? 'py-4 bg-ai-cloud/80 backdrop-blur-lg border-b border-ai-graphite/5'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        role="navigation"
      >
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="text-ai-graphite font-display font-bold text-xl tracking-tight z-50 relative group">
          AI VARSH
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-teal transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-ai-graphite/60 hover:text-ai-teal transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-6 z-50 relative">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 text-ai-graphite font-bold text-sm hover:text-ai-teal transition-colors group"
          >
            Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-ai-graphite p-2 -mr-2 hover:text-ai-teal transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-ai-cloud"
          onClick={() => setIsMobileOpen(false)}
        />

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-10 transition-transform duration-700 ease-out ${
            isMobileOpen ? 'translate-y-0' : '-translate-y-12'
          }`}
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-display font-bold text-ai-graphite hover:text-ai-teal transition-colors"
              style={{ transitionDelay: isMobileOpen ? `${i * 75}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-6 flex items-center gap-2 bg-ai-graphite text-ai-cloud px-8 py-4 text-lg font-bold hover:bg-ai-teal transition-colors rounded-lg"
          >
            Let's Talk <span>→</span>
          </a>
        </div>
      </div>
    </>
  );
};
