import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, ShieldAlert, TrendingUp, Clock, Utensils } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-brown" />,
      title: "Sistema de Execução Diária Anti-Desistência",
      desc: "Um protocolo simples que transforma ação em rotina automática — eliminando o ciclo de começar animado e abandonar poucos dias depois."
    },
    {
      icon: <Target className="w-8 h-8 text-brown" />,
      title: "Mapa Mental de Transformação em 90 Dias",
      desc: "O passo a passo que organiza sua evolução física semana após semana — eliminando tentativa e erro."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-brown" />,
      title: "Protocolo de Quebra de Sabotagem",
      desc: "Um método que identifica e neutraliza os gatilhos que fazem você desistir — devolvendo controle sobre sua rotina."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brown" />,
      title: "Sistema de Progressão Metabólica",
      desc: "Um modelo que faz seu corpo evoluir gradualmente — evitando o travamento comum em dietas e treinos aleatórios."
    },
    {
      icon: <Clock className="w-8 h-8 text-brown" />,
      title: "Ritual de Continuidade Diária",
      desc: "Um micro-processo que garante execução mínima todos os dias — criando a sensação poderosa de finalmente manter algo até o final."
    },
    {
      icon: <Utensils className="w-8 h-8 text-brown" />,
      title: "Estratégias Alimentares Eficazes",
      desc: "Cardápio detox, estratégia cetogênica e jejum intermitente. Tudo pensado para ser possível e sustentável."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle brown>O que você vai desbloquear</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight leading-tight text-brown">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
