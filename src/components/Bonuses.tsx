import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Bonuses = () => {
  const bonuses = [
    {
      image: "https://lh3.googleusercontent.com/d/1KyUq6S_7AYmiTRZxaj5g8Gc7Rnco1Bp3",
      title: "Bônus 1: Checklist Diário de Execução (Anti-Abandono)",
      desc: "Aqui você não acompanha “progresso”. Você acompanha execução. Um checklist simples, direto e brutalmente honesto."
    },
    {
      image: "https://lh3.googleusercontent.com/d/1xaJXboTe6pkFD9lHyLizaULrFu6i8c_B",
      title: "Bônus 2: Dossiê de Prova Física (Altura, Peso e Medidas)",
      desc: "Sua mente mente. Esse dossiê destrói essa sabotagem. Você registra medidas reais do seu corpo."
    },
    {
      image: "https://lh3.googleusercontent.com/d/18uL6PCeq9uVeyJLrXdnMcaYpleFy4B64",
      title: "Bônus 3: Cardápio de Apoio Simples (Sem Dieta Perfeita)",
      desc: "Um dos maiores motivos de abandono é cansaço mental para decidir o que comer. Esse cardápio elimina esse problema."
    },
    {
      image: "https://lh3.googleusercontent.com/d/1fOfc-83qjLKZCKk1Tvpt-hOkHtGdBjE_",
      title: "Bônus 4: Ebook com Receitas de Chás de Apoio à Constância",
      desc: "Receitas simples que ajudam na ansiedade alimentar, inchaço e digestão mais leve."
    },
    {
      image: "https://lh3.googleusercontent.com/d/1VYwCIgBT84VxAvNswsXwc4NK9B7UMLdb",
      title: "Bônus 5: Ebook com 10 Receitas Funcionais",
      desc: "Receitas simples, saborosas e práticas para facilitar sua alimentação. Zero glúten e zero lactose."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white text-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-primary text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Exclusivo</span>
          <SectionTitle brown>Bônus Especiais</SectionTitle>
        </div>
        
        <div className="flex flex-col gap-8">
          {bonuses.map((bonus, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all flex flex-col md:flex-row gap-8 items-center md:items-start group">
              <div className="w-full md:w-1/3 shrink-0 aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={bonus.image} 
                  alt={bonus.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/bonus${i}/600/400`;
                  }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-red-500/40 line-through font-bold text-lg">R$ 49,90</span>
                  <span className="bg-gray-100 text-gray-400 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-gray-200">Incluso Grátis</span>
                </div>
                <h4 className="text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors uppercase tracking-tighter italic text-brown">{bonus.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed max-w-2xl font-medium">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
