import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Expectations = () => {
  const items = [
    {
      num: "01",
      title: "Redução visível de gordura corporal",
      desc: "Seu corpo começa a responder ao estímulo correto — revelando mudanças claras nas primeiras semanas."
    },
    {
      num: "02",
      title: "Corpo mais firme e definido",
      desc: "A combinação de estímulo metabólico e treino estratégico começa a remodelar sua estrutura física."
    },
    {
      num: "03",
      title: "Controle total sobre sua rotina alimentar",
      desc: "Você deixa de viver em dieta e passa a dominar um sistema alimentar sustentável."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle brown>O que você pode esperar</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div key={i} className="relative">
              <span className="text-8xl font-black text-gray-100 absolute -top-10 -left-4 z-0">{item.num}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-brown">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
