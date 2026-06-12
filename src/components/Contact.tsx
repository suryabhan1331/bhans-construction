/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, Compass, HelpCircle, CheckCircle2, Navigation } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMapPinClicked, setIsMapPinClicked] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#F9FAFB] text-slate-800 overflow-hidden scroll-mt-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
            Direct Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light uppercase tracking-tight text-slate-900 mt-1">
            Initiate Your <span className="italic text-[#D4AF37] font-serif font-normal text-3xl sm:text-4xl">Project Inquiry</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-slate-605 text-sm mt-4 leading-relaxed font-light">
            Reach out via the form below or drop by our studio. Our managing coordinates respond to high-load consultations promptly.
          </p>
        </div>

        {/* Form and Coordinates Wrap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Form (Left) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-none p-6 md:p-8 relative shadow-md">
            <div className="absolute top-0 right-10 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Bhan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. liam@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Subject Of Inquiry *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Luxury Villa Construction Costing"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Detailed Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe the parcel limits, structural scope, or interior stylings requested..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors resize-none font-light"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#b59228] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-none flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Dispatching Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Message Sent Successfully!</h3>
                    <p className="text-slate-605 text-xs max-w-sm mx-auto leading-relaxed font-light">
                      Your details have successfully cleared our priority intake router. Our concierge team is already reviewing your scope.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-none transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Column 2: Studio Coordinates & Interactive Map (Right) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address cards group */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-200 rounded-none flex items-start gap-4 hover:border-slate-300 transition-colors shadow-sm">
                <div className="p-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-none text-[#D4AF37]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">CONCIERGE VOICE FEED</p>
                  <a href="tel:+15553020980" className="text-sm font-semibold text-slate-800 mt-0.5 hover:text-[#D4AF37] duration-200 block">+1 (555) 302-0980</a>
                  <p className="text-[10px] text-slate-500 italic mt-0.5">Mon - Fri • 08:00 - 18:00 EST</p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-none flex items-start gap-4 hover:border-slate-300 transition-colors shadow-sm">
                <div className="p-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-none text-[#D4AF37]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">OFFICIAL EMAIL</p>
                  <a href="mailto:inquiry@bhansbuild.com" className="text-sm font-semibold text-slate-800 mt-0.5 hover:text-[#D4AF37] duration-200 block">inquiry@bhansbuild.com</a>
                  <p className="text-[10px] text-slate-505 italic mt-0.5 font-light">General & project inquiries sequence</p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-none flex items-start gap-4 hover:border-slate-300 transition-colors shadow-sm">
                <div className="p-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-none text-[#D4AF37]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">HEADQUARTERS STUDIO</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">Suite 404, The Platinum Heights Blvd, Old West Side, NY 10011</p>
                </div>
              </div>
            </div>

            {/* Premium Interactive Vector Map Placeholder */}
            <div className="bg-white border border-slate-200 rounded-none p-4 overflow-hidden shadow-sm relative group select-none">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#D4AF37]" /> Satellite Design Grid
                </span>
                <span className="text-[9px] text-emerald-500 font-mono tracking-wide">● STREAMING LIVE</span>
              </div>

              {/* Styled SVG Map Element */}
              <div className="bg-slate-50 rounded-none border border-slate-150 h-44 relative overflow-hidden flex items-center justify-center shadow-inner">
                {/* SVG decorative blueprint grid lanes */}
                <svg className="absolute inset-0 w-full h-full text-slate-300 opacity-70 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid lines */}
                  <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="45%" y1="0%" x2="45%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="1" />
                  <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                  
                  {/* Diagonals represents lanes */}
                  <path d="M-50,80 L400,180" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M80,-20 L280,210" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" />
                  
                  {/* Concentric circles of radar range */}
                  <circle cx="55%" cy="40%" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3,3" className="animate-pulse opacity-40" />
                  <circle cx="55%" cy="40%" r="20" fill="none" stroke="#D4AF37" strokeWidth="0.5" className="opacity-25" />
                </svg>

                {/* Satellite marker pinpoint */}
                <motion.button
                  type="button"
                  onClick={() => setIsMapPinClicked(!isMapPinClicked)}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="absolute left-[51%] top-[34%] z-10 text-[#D4AF37] bg-white p-1 rounded-none border border-[#D4AF37]/45 shadow-md cursor-pointer hover:bg-[#D4AF37] hover:text-slate-950 transition-colors"
                  aria-label="Target Bhan's Studio Coordinates Pin"
                >
                  <MapPin className="w-5 h-5 fill-current" />
                </motion.button>

                {/* Interactive slideout bubble */}
                <AnimatePresence>
                  {isMapPinClicked && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-3 left-3 right-3 bg-white/95 border border-slate-250 p-2.5 rounded-none backdrop-blur flex items-center justify-between text-[11px] font-sans shadow"
                    >
                      <div className="flex items-center gap-2">
                        <Navigation className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900 text-[10px]">BHAN'S HD OFFICE</p>
                          <p className="text-slate-500 text-[9px] font-mono leading-none mt-0.5">Coords: 40.7484° N, 73.9857° W</p>
                        </div>
                      </div>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 bg-[#D4AF37] text-slate-955 text-[9px] font-bold uppercase tracking-widest rounded-none shadow"
                      >
                        Directions
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
