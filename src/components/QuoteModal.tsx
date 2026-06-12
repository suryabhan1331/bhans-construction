/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    budget: 150000,
    timeline: '3-6-months',
    message: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'residential',
      budget: 150000,
      timeline: '3-6-months',
      message: '',
      additionalInfo: ''
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="quote-modal-body"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-2xl bg-white border border-slate-205 rounded-none shadow-2xl overflow-hidden z-10"
          >
            {/* Top gold bar detail */}
            <div className="h-0.5 bg-[#D4AF37] w-full" />

            {/* Close Button */}
            <button
              id="close-quote-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-slate-450 hover:text-slate-900 hover:bg-slate-100 rounded-none transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 rounded-none mb-3">
                    <Sparkles className="w-3.5 h-3.5" /> Luxury Services Estimate
                  </span>
                  <h3 className="text-2xl font-sans font-light text-slate-900 tracking-tight uppercase">
                    Plan Your Masterpiece
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 font-light">
                    Fill out the project breakdown below. Devraj Bhan and our senior team will evaluate your scope personally.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Personal details */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Cooper"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. david@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 302-0980"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Project Type *</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                    >
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Development</option>
                      <option value="interior">Luxury Interior Design</option>
                      <option value="architecture">Architecture Blueprinting</option>
                      <option value="renovation">Elite Building Renovation</option>
                    </select>
                  </div>
                </div>

                {/* Range Slider for Budget */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-medium text-slate-700">Target Budget Range *</label>
                    <span className="text-[#D4AF37] font-bold text-sm select-all">
                      ${formData.budget.toLocaleString()} USD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="25000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                    className="w-full h-1 bg-slate-100 border border-slate-200 rounded-none appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>$50,000</span>
                    <span>$1,000,000</span>
                    <span>$2,000,000+</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Expected Timeline</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: 'express', label: '< 3 Mos' },
                        { value: '3-6-months', label: '3-6 Mos' },
                        { value: '6-plus', label: '6+ Mos' }
                      ].map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t.value })}
                          className={`px-2 py-2 text-xs font-medium rounded-none border transition-all duration-200 cursor-pointer ${
                            formData.timeline === t.value
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                              : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Preferred Site Location</label>
                    <input
                      type="text"
                      placeholder="e.g. West Coast, Hills"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <label className="text-xs font-medium text-slate-700">Provide Brief Details About Your Vision *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe specific features (e.g., number of storeys, custom materials, environmental priorities)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-slate-800 rounded-none outline-none transition-colors resize-none font-light"
                  />
                </div>

                {/* Submit button */}
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-none transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#b0873a] text-slate-955 text-sm font-bold rounded-none shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/15 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-light text-slate-900 tracking-tight">
                    Thank You, {formData.name}
                  </h4>
                  <p className="text-[#D4AF37] text-sm font-serif font-medium uppercase tracking-widest">
                    RFQ Sequence Completed
                  </p>
                  <p className="text-slate-600 max-w-md text-sm leading-relaxed font-light">
                    Our team, led by **Chief Architect Devraj Bhan**, has received your request for the <span className="text-slate-900 font-semibold">{formData.projectType.replace('-', ' ')}</span> project with a targeted budget of <span className="text-slate-900 font-semibold">${formData.budget.toLocaleString()} USD</span>.
                  </p>
                  <p className="text-slate-500 text-xs italic mt-2 font-light">
                    A personalized proposal draft will be dispatched to <span className="text-slate-800 select-all font-semibold font-mono">{formData.email}</span> within 24 working hours.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 bg-[#D4AF37] hover:bg-[#b0873a] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-none transition-all cursor-pointer shadow"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
