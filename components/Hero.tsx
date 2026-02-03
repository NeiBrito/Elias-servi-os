import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MapPin } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#1e40af]">
      {/* Background Image - Varanda Gourmet com Toldo */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1920" 
          alt="Varanda Gourmet Elegante com Toldo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af] via-[#1e40af]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <MapPin className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-white text-[11px] font-bold uppercase tracking-widest">Atendimento em Salvador e Região</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white leading-tight mb-8 tracking-tight">
            Toldos e Coberturas <br/>
            <span className="text-[#fbbf24]">Sob Medida</span> para seu Bem-Estar.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed font-light">
            Proteja seu espaço com elegância. Estruturas modernas em policarbonato e lonas de alta resistência para ambientes residenciais e comerciais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbbf24] hover:bg-yellow-500 text-[#1f2937] px-8 py-4 rounded font-montserrat font-extrabold text-base flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              SOLICITE ORÇAMENTO
              <WhatsAppIcon className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f3f4f6] to-transparent"></div>
    </section>
  );
};

export default Hero;