import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FloatingCTAProps {
  show: boolean;
  onClick: () => void;
}

export const FloatingCTA = ({ show, onClick }: FloatingCTAProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent pt-8"
        >
          <button
            onClick={onClick}
            className="w-full bg-green-600 text-white font-black py-5 px-8 rounded-2xl shadow-[0_10px_40px_rgba(22,163,74,0.4)] uppercase tracking-widest text-sm flex items-center justify-center gap-3 animate-pulse-subtle"
          >
            <span>Começar minha transformação agora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
