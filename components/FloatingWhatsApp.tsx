
import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:bg-emerald-600 transition-all hover:scale-110 active:scale-90 flex items-center group overflow-hidden max-w-[65px] hover:max-w-[250px] border-2 border-white/20"
    >
      <WhatsAppIcon className="w-8 h-8 shrink-0" />
      <span className="ml-4 font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest text-sm">
        Falar com o Elias
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
