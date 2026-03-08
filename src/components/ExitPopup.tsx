import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Zap, ArrowRight } from 'lucide-react';

interface ExitPopupProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ExitPopup = ({ show, onClose, onConfirm }: ExitPopupProps) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 max-w-lg w-full shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-dark transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                <Zap className="w-8 h-8 fill-current" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter leading-tight italic">
                Calma ai! Não deixe para começar na próxima semana. <br />
                <span className="text-primary">Você merece esse cuidado agora.</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg font-medium leading-relaxed">
                Você está a um passo de transformar seu corpo. Se sair agora, vai perder a chance de garantir o seu acesso com o valor promocional!
              </p>
              
              <button 
                onClick={onConfirm}
                className="w-full bg-dark text-white font-black py-5 px-8 rounded-full shadow-xl hover:bg-primary transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-3 group"
              >
                <span>Quero ver a oferta de novo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={onClose}
                className="mt-6 text-gray-400 font-bold uppercase text-xs tracking-widest hover:text-dark transition-colors"
              >
                Não, prefiro continuar como estou
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
