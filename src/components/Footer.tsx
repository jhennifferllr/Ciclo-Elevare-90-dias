import React from 'react';
import { CTAButton } from './CTAButton';

export const Footer = () => {
  return (
    <footer className="py-24 px-4 bg-brown text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight">
          90 dias vão passar de qualquer forma.
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 italic">
          A única pergunta é: Você vai chegar lá igual… ou com um corpo que hoje parece impossível?
        </p>
        <div className="mb-12">
          <p className="text-primary font-black uppercase tracking-widest mb-4">Agora ou nunca</p>
          <CTAButton>Começar minha transformação agora</CTAButton>
        </div>
        <div className="pt-12 border-t border-white/10 text-gray-500 text-sm">
          <p>© 2024 Método Ciclo Elevare 90 Dias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
