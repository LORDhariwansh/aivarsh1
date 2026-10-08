import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + (href !== '#hero' ? href : ''));
      setTimeout(() => {
        if (href === '#hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'py-4 bg-ivory/80 backdrop-blur-xl border-b border-charcoal/5 shadow-sm'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-3 group shrink-0"
          >
            <span className="font-display font-medium text-lg tracking-tight text-charcoal transition-colors duration-200">
              AI VARSH
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted hover:text-charcoal transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-sm font-medium text-muted hover:text-charcoal transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-ivory bg-charcoal px-6 py-2.5 rounded-full hover:bg-charcoal-light hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </a>
            <button
              className="lg:hidden text-charcoal hover:text-saffron transition-colors p-1"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — AnimatePresence slide-down */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ivory flex flex-col px-8 pt-32 pb-12 overflow-hidden"
          >
            {/* Nav links */}
            <div className="flex flex-col w-full flex-1 gap-6">
              {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                  className="text-4xl md:text-6xl leading-none font-display font-medium tracking-tight text-charcoal hover:text-saffron transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-6"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 text-base font-medium bg-charcoal text-ivory px-8 py-4 rounded-full hover:bg-charcoal-light transition-colors duration-200"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
