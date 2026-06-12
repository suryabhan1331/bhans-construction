/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onQuoteOpen: () => void;
}

export default function Navbar({ onQuoteOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80; // height of sticky nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#D4AF37]/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center gap-2.5 outline-none"
            >
              <div className="relative p-2 bg-gradient-to-br from-[#D4AF37]/10 to-white border border-[#D4AF37]/30 rounded-lg group-hover:border-[#D4AF37] transition-colors duration-300 shadow-sm">
                <Landmark className="w-6 h-6 text-[#D4AF37] group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-950 font-sans uppercase">
                  Bhan's <span className="text-[#D4AF37] font-light">CONSTRUCTION</span>
                </span>
                <span className="text-[9px] text-slate-500 tracking-[0.22em] font-mono leading-none select-none uppercase">
                  Luxury & Architecture
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-slate-700 hover:text-[#D4AF37] transition-colors relative py-1.5 focus:outline-none focus:text-[#D4AF37] group uppercase tracking-widest text-[11px]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop Header Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15553020980"
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-700 hover:text-[#D4AF37] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono font-medium">+1 (555) 302-0980</span>
              </a>
              <button
                type="button"
                id="navbar-get-quote-btn"
                onClick={onQuoteOpen}
                className="px-5 py-2.5 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-colors duration-300 font-bold cursor-pointer"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Actions (Hamburger) */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={onQuoteOpen}
                className="px-3 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Side Panel Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-8 mt-16">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                    Bhan's Build Navigation
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-lg font-medium text-slate-700 hover:text-[#D4AF37] transition-colors py-1 block"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-150 pt-6">
                <a
                  href="tel:+15553020980"
                  className="flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm font-mono hover:text-[#D4AF37] duration-300"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>+1 (555) 302-0980</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onQuoteOpen();
                  }}
                  className="w-full py-3.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-widest text-xs transition-colors duration-300 rounded flex items-center justify-center cursor-pointer shadow-lg"
                >
                  Get A Quote
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
