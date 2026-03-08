import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, ClipboardCheck, ShieldAlert, Star } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const Pricing = () => {
  return (
    <section id="ofertas" className="py-32 px-4 bg-light">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[4rem] p-12 md:p-24 text-center border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter">Faça as contas</h2>
          <p className="text-gray-500 mb-16 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Se você fosse contratar Personal Chef, Nutricionista e Programa de Acompanhamento, gastaria entre <span className="font-bold text-dark">R$2.000 e R$5.000</span>.
          </p>
          
          <div className="mb-16">
            <p className="text-gray-300 line-through text-2xl mb-2">R$ 597,00</p>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Por apenas</span>
              <p className="text-7xl md:text-9xl font-black text-dark tracking-tighter leading-none">R$ 197</p>
              <span className="text-xl font-bold text-gray-300 mt-4 tracking-widest uppercase text-xs">à vista</span>
            </div>
            <div className="mt-8 flex flex-col items-center">
              <p className="text-gray-400 font-medium italic mb-4">ou R$ 219,90 em até 6x no cartão</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider text-xs flex items-center gap-2"
                onClick={() => window.open('https://link.infinitepay.io/informais_informatica/VC1DLTYtSQ-1U088MKHMd-219,90', '_blank')}
              >
                <CreditCard className="w-4 h-4" />
                Comprar no Cartão
              </motion.button>
              <p className="mt-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">6 parcelas de R$ 36,65</p>
            </div>
          </div>
          
          <CTAButton className="w-full md:w-auto px-16">Começar minha transformação agora</CTAButton>
          <p className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <ClipboardCheck className="w-4 h-4" />
            Clique para copiar o código PIX
          </p>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-300 text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Pagamento Seguro</span>
            </div>
            <span className="hidden md:block opacity-20">•</span>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gray-200 fill-gray-200" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
