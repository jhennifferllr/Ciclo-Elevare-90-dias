import React from 'react';

export const Author = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1OTZowy-njFOZiuE0ptq-xjOeuimAa0ah" 
                  alt="Jhenniffer Silva" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/author/600/800";
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-primary font-black tracking-widest uppercase text-sm">Autor</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-black">
              Jhenniffer silva <br />
              <span className="text-gray-400 text-2xl font-light italic">Empresária  e  mãe real</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>Sou casada, mãe de dois, empresária e apaixonada por transformação real - aquela que começa de dentro para fora. Sou graduada em Gastronomia e pós-graduada em Gastronomia Funcional Integrativa.</p>
              <p>Sempre estudei alimentação, saúde e comportamento. Mas, por muito tempo, saber não foi suficiente. Passei por um processo depressivo intenso, ganhei 15 quilos e me senti cansada e desconectada.</p>
              <p>Tomei uma decisão: eu precisava mudar meus hábitos - por saúde, dignidade emocional e amor aos meus filhos. Eliminei 16 quilos e recuperei minha clareza. Hoje, uso minha formação e vivência para ajudar mulheres reais a implementarem hábitos saudáveis sem neura e sem extremismos.</p>
              <p className="font-bold text-dark italic pt-4">Se eu consegui sair de um dos períodos mais difíceis da minha vida e construir novos hábitos, você também consegue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
