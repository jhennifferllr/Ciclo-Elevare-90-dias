import React from 'react';
import { SectionTitle } from './SectionTitle';
import { CTAButton } from './CTAButton';

export const Solution = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle>A Quebra do Ciclo</SectionTitle>
        <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed">
          <p>É exatamente esse ciclo que o <span className="font-bold text-dark">Método Ciclo Elevare 90 Dias</span> foi criado para quebrar.</p>
          <p>Ele pega todo o processo de transformação física — que normalmente é confuso, cheio de tentativas e erros — e organiza em um sistema simples, progressivo e executável.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="font-black text-dark uppercase text-sm mb-2">Não precisa</p>
              <p className="text-gray-500">Adivinhar o que fazer</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="font-black text-dark uppercase text-sm mb-2">Não precisa</p>
              <p className="text-gray-500">Viver na academia</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="font-black text-dark uppercase text-sm mb-2">Não precisa</p>
              <p className="text-gray-500">Viver em dieta eterna</p>
            </div>
          </div>
          
          <p className="text-2xl font-black text-dark uppercase tracking-tight">Você apenas segue o ciclo. Passo a passo. Semana após semana.</p>
          
          <div className="pt-8">
            <CTAButton>Quero sair do escuro agora</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
