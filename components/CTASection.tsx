
import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './Icons';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#1e40af] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-[80px]"></div>
             <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#fbbf24] rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold text-white mb-8 tracking-tight leading-tight">
              Proteja seu espaço <br/><span className="text-[#fbbf24]">com qualidade superior.</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Fale agora diretamente com o Elias e garanta o padrão de qualidade técnica que sua varanda ou negócio merece em Salvador.
            </p>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-5 bg-[#fbbf24] hover:bg-yellow-500 text-gray-900 rounded font-montserrat font-extrabold text-lg shadow-xl transition-all hover:scale-105 active:scale-95 group uppercase tracking-widest"
            >
              <WhatsAppIcon className="w-6 h-6 mr-4" />
              SOLICITAR ORÇAMENTO AGORA
            </a>
            
            <p className="mt-10 text-blue-200 font-bold uppercase tracking-[0.3em] text-[10px]">
              Atendimento prioritário via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
