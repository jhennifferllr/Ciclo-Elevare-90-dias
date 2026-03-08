import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CTAButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [copied, setCopied] = useState(false);
  const pixCode = "00020126360014BR.GOV.BCB.PIX0114+55629832236665204000053039865406197.005802BR5925Jhenniffer Maria da Silva6009SAO PAULO62140510vhciAsqJzA63046CB1";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className={`bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-600/50 transition-all duration-300 uppercase tracking-wider text-sm md:text-base relative overflow-hidden ${className}`}
    >
      <motion.span 
        animate={{ y: copied ? -40 : 0, opacity: copied ? 0 : 1 }}
        className="block"
      >
        {children}
      </motion.span>
      <AnimatePresence>
        {copied && (
          <motion.span 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-green-700 text-white font-black"
          >
            PIX COPIADO!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
