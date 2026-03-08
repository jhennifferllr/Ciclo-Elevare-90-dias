import React from 'react';
import { motion } from 'motion/react';
import { CTAButton } from './CTAButton';

export const Hero = () => {
  return (
    <section className="relative bg-white text-dark pt-20 pb-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-black tracking-[0.3em] uppercase text-sm mb-6 block"
        >
          Método Ciclo Elevare 90 Dias
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase"
        >
          Transforme seu corpo <br />
          <span className="text-primary">completamente</span> em 90 dias
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-12 max-w-2xl mx-auto relative group"
        >
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>
          <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900 flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1lloZayD45rvC9VON4aMoqQ-SPC5tbe4n" 
              alt="Método Ciclo Elevare 90 Dias Thumbnail" 
              className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/fitness/1280/720";
              }}
            />
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Um método guiado e progressivo. Sem viver na academia, sem dieta maluca, sem efeito sanfona. Apenas estratégia aplicada — mesmo que você esteja começando do zero.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CTAButton>Começar minha transformação agora</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};
