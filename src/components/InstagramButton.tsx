import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export const InstagramButton = () => {
  const instagramUrl = "https://www.instagram.com/jhennifferllr?igsh=Ynd4OGdqNTVqNXc2&utm_source=qr";

  return (
    <motion.a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-[60] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:opacity-90 transition-opacity"
      aria-label="Seguir no Instagram"
    >
      <Instagram size={32} />
    </motion.a>
  );
};
