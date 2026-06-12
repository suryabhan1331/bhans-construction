/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Landmark } from 'lucide-react';

export default function Loader() {
  return (
    <motion.div
      id="app-initial-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAFA] select-none"
    >
      <div className="relative flex flex-col items-center text-center space-y-6">
        
        {/* Glowing surrounding light effect */}
        <div className="absolute inset-x-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full" />

        {/* Scaling Icon frame */}
        <motion.div
          animate={{
            scale: [0.95, 1.15, 0.95],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: 'easeInOut'
          }}
          className="relative p-5 bg-white border border-[#D4AF37]/30 rounded-2xl shadow shadow-[#D4AF37]/10 z-10"
        >
          <Landmark className="w-12 h-12 text-[#D4AF37]" />
        </motion.div>

        {/* Text cues */}
        <div className="space-y-1.5 z-10">
          <motion.h2
            initial={{ opacity: 0, tracking: '0.1em' }}
            animate={{ opacity: 1, tracking: '0.22em' }}
            transition={{ duration: 0.8 }}
            className="text-slate-900 text-lg font-bold uppercase tracking-widest font-sans"
          >
            Bhan's <span className="text-[#D4AF37] font-light">CONSTRUCTION</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-[10px] uppercase font-mono tracking-[0.22em]"
          >
            Luxury Real Estate & Design
          </motion.p>
        </div>

        {/* Inline load-tier line indicator */}
        <div className="relative w-36 h-0.5 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="absolute top-0 bottom-0 w-1/2 bg-[#D4AF37]"
          />
        </div>

      </div>
    </motion.div>
  );
}
