import React from 'react';
import { SectionTitle } from './SectionTitle';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ir para academia?",
      answer: "Não necessariamente. Muitos treinos podem ser adaptados para casa, permitindo que você tenha resultados independente de onde treina."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Entre 20 e 40 minutos já são suficientes para aplicar o método e começar a ver a transformação no seu corpo."
    },
    {
      question: "Em quanto tempo começo a ver resultados?",
      answer: "Muitas pessoas já percebem mudanças visíveis na energia e na composição corporal logo nas primeiras semanas de aplicação correta do ciclo."
    },
    {
      question: "Esse método serve para iniciantes?",
      answer: "Sim. O processo foi criado exatamente para quem está começando do zero ou para quem já tentou de tudo e não conseguiu manter a constância."
    },
    {
      question: "Existe garantia?",
      answer: "Sim. Você pode testar o método sem risco dentro do período de garantia de 7 dias. Se não gostar, devolvemos seu investimento."
    }
  ];

  return (
    <section className="py-24 px-4 bg-light">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <div className="mt-12 bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
