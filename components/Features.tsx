
import React from 'react';
import { FEATURES } from '../constants';
import { ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#1e40af] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10">
              <div className="mb-6 p-4 rounded-2xl bg-[#fbbf24] text-[#1e40af] shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-montserrat font-extrabold mb-4 uppercase tracking-tighter tracking-widest">{feature.title}</h4>
              <p className="text-blue-100 leading-relaxed text-sm font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* SEÇÃO DE GARANTIA (STICKER) - MOVIDA PARA CÁ PARA PRESERVAR A CREDIBILIDADE */}
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-10 md:p-12 relative overflow-hidden group border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-center md:text-left">
            <div className="flex items-center space-x-8">
              <div className="w-20 h-20 bg-[#fbbf24] rounded-3xl flex items-center justify-center shadow-2xl shadow-yellow-500/20 rotate-3 group-hover:rotate-0 transition-transform">
                <ShieldCheck className="w-10 h-10 text-[#1e40af]" />
              </div>
              <div>
                <h4 className="text-white font-montserrat font-extrabold text-2xl mb-2">Garantia Técnica Elias</h4>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Selo de 5 Anos em toda a estrutura instalada.</p>
              </div>
            </div>
            <div className="flex space-x-6 opacity-30 grayscale hover:grayscale-0 transition-all">
               <span className="font-black italic text-lg text-white">QUALIDADE</span>
               <span className="font-black italic text-lg text-white">PRAZO</span>
               <span className="font-black italic text-lg text-white">SEGURANÇA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
