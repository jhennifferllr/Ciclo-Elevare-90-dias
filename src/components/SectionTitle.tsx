import React from 'react';

export const SectionTitle = ({ children, light = false, brown = false }: { children: React.ReactNode, light?: boolean, brown?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-black mb-8 text-center uppercase tracking-tighter ${light ? 'text-white' : brown ? 'text-brown' : 'text-dark'}`}>
    {children}
  </h2>
);
