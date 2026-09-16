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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 flex items-center justify-between ${
          isScrolled
            ? 'py-4 bg-ai-ivory/95 backdrop-blur-md shadow-sm border-b border-ai-border'
            : 'py-6 bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="text-ai-forest font-display font-bold text-xl tracking-tight z-50 relative group">
          AI VARSH
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-gold transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-ai-forest/70 hover:text-ai-gold transition-colors duration-300"
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
            className="hidden sm:inline-flex items-center gap-2 bg-ai-forest text-ai-ivory px-6 py-2.5 text-sm font-medium hover:bg-ai-gold transition-colors duration-300"
          >
            Let's Talk <span className="text-lg leading-none">→</span>
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-ai-forest p-2 -mr-2 hover:text-ai-gold transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
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
          className="absolute inset-0 bg-ai-ivory"
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
              className="text-3xl font-display font-medium text-ai-forest hover:text-ai-gold transition-colors"
              style={{ transitionDelay: isMobileOpen ? `${i * 75}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-6 flex items-center gap-2 bg-ai-forest text-ai-ivory px-8 py-4 text-lg font-medium hover:bg-ai-gold transition-colors"
          >
            Let's Talk <span>→</span>
          </a>
        </div>
      </div>
    </>
  );
};
