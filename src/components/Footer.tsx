/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, ArrowUp, Linkedin, Twitter, Instagram, Facebook, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 relative overflow-hidden">
      
      {/* Absolute gold highlight line on the very top of footer */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand & Bio (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 outline-none w-fit"
            >
              <div className="p-2 bg-white border border-[#D4AF37]/45 rounded-none shadow-sm">
                <Landmark className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 uppercase leading-none">
                  Bhan's <span className="text-[#D4AF37] font-light">CONSTRUCTION</span>
                </span>
                <span className="text-[8px] text-slate-500 tracking-[0.22em] font-mono mt-1 uppercase leading-none">
                  Luxury & Architecture
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-light">
              We design and formulate premium high-rise commercial structures and award-winning private villa sanctuaries that combine seismic steel validation with elegant space planning aesthetics.
            </p>
            
            {/* Social Icons mapping */}
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: '#' },
                { label: 'Twitter', icon: <Twitter className="w-4 h-4" />, href: '#' },
                { label: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: '#' },
                { label: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: '#' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="p-2 bg-white border border-slate-200 hover:border-[#D4AF37]/40 text-slate-500 hover:text-[#D4AF37] rounded-none transition-all focus:outline-none shadow-sm"
                  aria-label={`Official Bhan's Build ${item.label} Link`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono border-b border-slate-200 pb-2">
              Corporate Map
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-light">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Projects', href: '#projects' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Team', href: '#team' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#D4AF37] hover:underline transition-colors block py-0.5 text-slate-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Certifications & Legal clearances (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono border-b border-slate-200 pb-2">
              Validations
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 uppercase text-[10px] tracking-wide">LEED Environmental Accerted</p>
                  <p className="text-[10px] text-slate-500 leading-normal font-light">High-performance green cooling and solar containment layouts.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 uppercase text-[10px] tracking-wide">Heavy Seismic Structural cleared</p>
                  <p className="text-[10px] text-slate-500 leading-normal font-light">Fully licensed under strict global load thresholds.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="mt-16 pt-8 border-t border-slate-205 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-slate-500">
          <p className="text-center sm:text-left select-none uppercase tracking-widest font-mono text-[9px]">
            © {currentYear} Bhan's Construction Co. All rights reserved.
          </p>
          <div className="flex gap-4 font-light">
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">Safety Standards</a>
          </div>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 py-1 px-3 bg-white hover:bg-[#D4AF37] hover:text-[#050B14] rounded-none border border-slate-200 text-slate-700 text-[10px] tracking-widest font-mono uppercase transition-colors cursor-pointer shadow-sm"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
