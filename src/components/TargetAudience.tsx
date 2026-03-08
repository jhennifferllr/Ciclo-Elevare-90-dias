import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TargetAudience = () => {
  const points = [
    "Pessoas que querem emagrecer e transformar o corpo de forma real — mas estão cansadas de tentar métodos aleatórios.",
    "Quem já tentou dieta, academia ou desafios e sempre acaba voltando ao ponto inicial.",
    "Quem precisa de um plano claro, simples e estratégico para finalmente sair do lugar."
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-black mb-12 uppercase text-center">Para quem é</h2>
          <ul className="space-y-6">
            {points.map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
