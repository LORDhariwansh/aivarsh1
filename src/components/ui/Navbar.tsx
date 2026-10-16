import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#explorer' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    },
    [location.pathname, navigate]
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#08080C]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-violet-600/30 to-white/10 border border-white/15 p-1 group-hover:border-violet-500/50 transition-colors">
              <img
                src="/logo.png"
                alt="AI VARSH Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-extrabold text-sm text-white absolute">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base tracking-tight text-white group-hover:text-lavender transition-colors">
                AI VARSH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 px-5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-text-secondary hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-medium text-text-secondary hover:text-white px-4 py-2 rounded-full border border-white/15 hover:border-violet-400/40 hover:bg-white/[0.03] transition-all duration-200"
            >
              Let's Talk
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 px-4 py-2 rounded-full shadow-violet-glow hover:brightness-110 hover:shadow-violet-glow-lg transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-text-primary p-2 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#08080C]/95 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl font-medium text-text-secondary hover:text-white py-2 border-b border-white/[0.06] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-violet-glow"
              >
                Get Started
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 text-sm font-medium text-text-secondary hover:text-white rounded-full border border-white/15"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
