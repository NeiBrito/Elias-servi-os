
import React from 'react';
import { CheckCircle2, Shield, Wrench, Thermometer } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Imagem e Badge de Experiência */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://i.postimg.cc/qRb0VqZ9/Whats-App-Image-2026-01-27-at-9-07-42-PM.jpg" 
                alt="Equipe Elias Serviços em Instalação" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Badge Flutuante */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-[#fbbf24] p-10 rounded-[2.5rem] shadow-2xl shadow-yellow-500/30 border-8 border-white hidden md:block">
              <div className="text-center">
                <span className="block text-5xl font-black text-[#1e40af] leading-none mb-2">+14</span>
                <span className="block text-[10px] font-black text-[#1e40af] uppercase tracking-[0.3em]">Anos de <br/>Experiência</span>
              </div>
            </div>
            
            {/* Elemento Decorativo */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="lg:w-1/2">
            <h2 className="text-[#1e40af] text-sm font-montserrat font-extrabold uppercase tracking-[0.4em] mb-4">Quem Somos</h2>
            <h3 className="text-3xl md:text-5xl font-montserrat font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              Excelência Técnica em <br/><span className="text-[#1e40af]">Cada Estrutura.</span>
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
              Com mais de uma década de atuação em Salvador, a <strong>Elias Serviços</strong> consolidou-se como referência em toldos e coberturas. Nosso compromisso vai além da proteção solar: entregamos durabilidade, estética e segurança para sua família ou negócio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Wrench className="w-6 h-6 text-[#1e40af]" />
                </div>
                <div>
                  <h4 className="font-montserrat font-black text-xs uppercase tracking-widest text-gray-900 mb-2">Instalação Própria</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Não terceirizamos. Nossa equipe técnica é treinada pelo próprio Elias.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Shield className="w-6 h-6 text-[#1e40af]" />
                </div>
                <div>
                  <h4 className="font-montserrat font-black text-xs uppercase tracking-widest text-gray-900 mb-2">Segurança Total</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Estruturas calculadas para suportar ventos fortes e intempéries da região.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Thermometer className="w-6 h-6 text-[#1e40af]" />
                </div>
                <div>
                  <h4 className="font-montserrat font-black text-xs uppercase tracking-widest text-gray-900 mb-2">Conforto Térmico</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Materiais que bloqueiam até 99% dos raios UV, reduzindo o calor.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-[#1e40af]" />
                </div>
                <div>
                  <h4 className="font-montserrat font-black text-xs uppercase tracking-widest text-gray-900 mb-2">Qualidade Premium</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Lonas náuticas e policarbonato alveolar ou compacto de alta densidade.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center space-x-6">
               <div className="w-1.5 h-16 bg-[#fbbf24] rounded-full"></div>
               <p className="text-gray-700 italic font-medium leading-relaxed">
                 "Nosso objetivo é transformar espaços comuns em áreas de convivência extraordinárias, com o rigor técnico que Salvador exige."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
