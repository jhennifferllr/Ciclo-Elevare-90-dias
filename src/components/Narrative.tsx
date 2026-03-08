import React from 'react';
import { motion } from 'motion/react';

export const Narrative = () => {
  return (
    <section className="py-24 px-4 bg-white text-dark">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-primary">
            90 dias podem parecer pouco…
          </h2>
          <p className="text-xl md:text-2xl font-bold text-dark italic leading-relaxed">
            <span className="bg-primary/10 px-2 py-1 rounded-lg">até você perceber o quanto a falta de direção pode desperdiçar anos da sua vida.</span>
          </p>
          
          <div className="h-px w-24 bg-primary mx-auto my-12"></div>
          
          <div className="text-left space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-600">
            <p>Seja honesto consigo mesmo por um momento. <span className="text-primary font-black">Quantas vezes você já decidiu mudar o corpo?</span></p>
            <p>Talvez tenha começado uma dieta. Talvez tenha entrado na academia cheio de motivação. Talvez tenha seguido algum desafio de internet que prometia transformação rápida.</p>
            <p className="text-dark font-bold">E no começo… sempre parece funcionar.</p>
            <p>A empolgação aparece. Você sente que agora vai. Mas depois acontece algo que quase ninguém fala.</p>
            <p><span className="text-primary font-bold">A rotina começa a apertar.</span> O cansaço aparece. A motivação começa a oscilar. A vida real começa a competir com aquela disciplina perfeita que parecia fácil nos primeiros dias.</p>
            
            <div className="py-8 text-center">
              <p className="text-3xl font-black text-primary uppercase">E pouco a pouco…</p>
            </div>
            
            <p>Você começa a faltar um treino. Depois outro. Depois decide “recomeçar na segunda”. E quando percebe… Tudo voltou ao ponto inicial.</p>
            <p>Não porque você não queria mudar. Mas porque você estava tentando mudar no escuro. Sem um processo claro. Sem progressão. Sem entender como o corpo realmente responde ao estímulo correto.</p>
            
            <p className="bg-primary/5 p-8 border-l-4 border-primary italic rounded-r-2xl">
              <span className="font-bold text-dark">A maioria das pessoas acredita que o problema é falta de disciplina. Mas a verdade brutal é outra: Pessoas comuns não fracassam porque são fracas. Elas fracassam porque estão tentando transformar o corpo sem um sistema.</span>
            </p>
            
            <p className="text-primary font-bold">Sem estratégia. Sem um mapa. E quando não existe mapa… cada tentativa vira apenas mais um ciclo de frustração.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
