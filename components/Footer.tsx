
import React from 'react';
import { WHATSAPP_LINK, INSTAGRAM_LINK, COMPANY_CNPJ } from '../constants';
import { Instagram, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-montserrat font-extrabold text-3xl tracking-tight text-white">ELIAS SERVIÇOS</span>
              <span className="text-[#fbbf24] text-[10px] font-bold uppercase tracking-[0.4em] mt-1">Soluções Sob Medida desde 2010</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              Especialistas em toldos retráteis e coberturas de policarbonato para Salvador e região metropolitana. Qualidade, prazo e garantia real.
            </p>
            <div className="flex space-x-4">
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#1e40af] transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-all hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-extrabold text-lg mb-8 text-white uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              <li>
                <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="hover:text-[#fbbf24] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleScroll(e, 'sobre')} className="hover:text-[#fbbf24] transition-colors">A Empresa</a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScroll(e, 'servicos')} className="hover:text-[#fbbf24] transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => handleScroll(e, 'galeria')} className="hover:text-[#fbbf24] transition-colors">Galeria</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-extrabold text-lg mb-8 text-white uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-5 text-gray-400 text-xs">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#fbbf24] shrink-0" />
                <span className="font-bold">Salvador, BA - Atendimento local e especializado.</span>
              </li>
              <li className="flex items-center space-x-3">
                <WhatsAppIcon className="w-4 h-4 text-[#fbbf24] shrink-0" />
                <a href={WHATSAPP_LINK} className="font-bold text-white hover:text-[#fbbf24] transition-colors">WhatsApp: (71) 99322-32161</a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-[#fbbf24] shrink-0" />
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#fbbf24] transition-colors">@eliasnogueira909</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[9px] font-bold uppercase tracking-widest">
          <p className="cursor-default">
            © 2024 Elias Serviços. CNPJ: {COMPANY_CNPJ}
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <span>Desenvolvido com Foco em Qualidade</span>
            <a href="#" className="hover:text-white transition-colors">Termos e Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
