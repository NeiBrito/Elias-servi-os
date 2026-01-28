
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#1e40af] text-sm font-montserrat font-extrabold uppercase tracking-[0.4em] mb-4">Galeria de Projetos</h2>
            <h3 className="text-3xl md:text-5xl font-montserrat font-extrabold text-gray-900 leading-tight">
              Portfólio de <br/><span className="text-[#1e40af]">Resultados Reais.</span>
            </h3>
          </div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs border-b-2 border-[#fbbf24] pb-2">
            Projetos Executados em Salvador
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-gray-100 transition-all duration-500 hover:scale-[1.02]">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay de Legenda Integrada conforme solicitado */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/80 via-[#1e40af]/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-montserrat font-extrabold text-sm md:text-base lg:text-lg uppercase tracking-wider leading-tight text-center drop-shadow-lg">
                    {img.title}
                  </h4>
                  <div className="h-1 w-12 bg-[#fbbf24] mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
                </div>
              </div>
              
              {/* Badge de Detalhe Técnico */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                  <span className="text-[#1e40af] text-[9px] font-black uppercase tracking-widest">Padrão Elias</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
