
import React from 'react';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#1e40af] text-sm font-montserrat font-extrabold uppercase tracking-[0.4em] mb-4">Nossas Soluções</h2>
          <h3 className="text-3xl md:text-5xl font-montserrat font-extrabold text-gray-900 mb-6 tracking-tight">
            Toldos e Coberturas <span className="text-[#1e40af]">de Alta Qualidade.</span>
          </h3>
          <div className="h-1.5 w-24 bg-[#fbbf24] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {SERVICES.map((cat, idx) => {
            const service = cat.items[0];
            const bulletPoints = service.description.split(', ');
            
            return (
              <div 
                key={idx} 
                className="group bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(30,64,175,0.2)] flex flex-col lg:flex-row min-h-[450px]"
              >
                {/* [LADO ESQUERDO - 40%] TEXTO INFORMATIVO */}
                <div className="lg:w-[40%] bg-[#1e40af] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 rounded-xl rotate-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                         {React.isValidElement(cat.icon) && React.cloneElement(cat.icon as React.ReactElement<any>, { className: "w-5 h-5 text-[#fbbf24]" })}
                      </div>
                      <h4 className="text-white font-montserrat font-extrabold text-xs uppercase tracking-[0.3em]">
                        {cat.category}
                      </h4>
                    </div>

                    <h5 className="text-2xl md:text-3xl font-montserrat font-extrabold text-white mb-8 leading-tight">
                      {service.title}
                    </h5>
                    
                    <ul className="space-y-4 mb-10">
                      {bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start text-blue-50 text-sm font-bold tracking-wide">
                          <Check className="w-5 h-5 text-[#fbbf24] mr-3 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#fbbf24] hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-montserrat font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95"
                    >
                      SOLICITAR COTAÇÃO
                      <ArrowRight className="ml-3 w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* [LADO DIREITO - 60%] IMAGEM REALISTA */}
                <div className="lg:w-[60%] relative overflow-hidden">
                  <img 
                    src={service.backgroundImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay to blend with text on smaller screens */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/20 to-transparent pointer-events-none"></div>
                  
                  {/* Realistic Highlight Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
