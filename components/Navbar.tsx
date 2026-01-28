
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex flex-col cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className={`font-montserrat font-extrabold text-xl md:text-2xl leading-none transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-[#1e40af]' : 'text-white'}`}>
            ELIAS SERVIÇOS
          </span>
          <span className={`text-[9px] md:text-[10px] font-normal uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-gray-500' : 'text-gray-200'}`}>
            Toldos e Coberturas sob Medida
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${isScrolled || isMenuOpen ? 'text-gray-700 hover:text-[#1e40af]' : 'text-white hover:text-[#fbbf24]'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fbbf24] hover:bg-yellow-500 text-[#1f2937] px-5 py-2.5 rounded font-bold text-xs flex items-center shadow-md transition-all uppercase tracking-wider group"
          >
            Orçamento
            <WhatsAppIcon className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
          </a>
        </div>

        <button 
          className={`md:hidden p-2 ${isScrolled || isMenuOpen ? 'text-[#1e40af]' : 'text-white'}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-bold text-gray-800 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fbbf24] text-gray-900 p-4 rounded text-center font-bold uppercase tracking-widest text-xs flex items-center justify-center"
          >
            SOLICITAR ORÇAMENTO
            <WhatsAppIcon className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
