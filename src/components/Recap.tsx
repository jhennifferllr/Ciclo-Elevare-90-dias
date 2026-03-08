import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Recap = () => {
  const items = [
    "Método Ciclo Elevare 90 Dias",
    "Mapa estratégico completo de transformação",
    "Sistema de queima de gordura progressiva",
    "Reprogramação alimentar inteligente",
    "Sistema anti-efeito sanfona",
    "Checklist Diário de Execução (Anti-Abandono)",
    "Dossiê de Prova Física",
    "Cardápio de Apoio Simples",
    "Ebook com Receitas de Chás de Apoio",
    "Ebook com 10 Receitas Funcionais"
  ];

  return (
    <section className="py-24 px-4 bg-light">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-black mb-8 uppercase text-center">Recapitulando tudo que você vai receber</h3>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
              <span className="font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
