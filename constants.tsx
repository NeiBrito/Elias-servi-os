import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Maximize, 
  Layers, 
  Box,
  CheckCircle2,
  Package
} from 'lucide-react';
import { ServiceCategory, FeatureItem } from './types';

export const WHATSAPP_NUMBER = "5571993232161";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20toldos%20ou%20coberturas.`;
export const INSTAGRAM_LINK = "https://www.instagram.com/eliasnogueira909";
export const GOOGLE_REVIEWS_LINK = "https://www.google.com/search?q=elias+servicos+salvador";
export const COMPANY_CNPJ = "16.483.018/0001-21";

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  initials: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria S.",
    location: "Pituba",
    text: "Excelente atendimento! O toldo ficou perfeito na minha varanda gourmet, a luz passa na medida certa.",
    initials: "MS",
    rating: 5
  },
  {
    name: "Ricardo Oliveira",
    location: "Caminho das Árvores",
    text: "Instalaram a cobertura de policarbonato na minha garagem. Ficou muito robusto e o acabamento é de primeira.",
    initials: "RO",
    rating: 5
  },
  {
    name: "Ana Beatriz",
    location: "Barra",
    text: "O Elias é muito profissional. Atendimento ágil e de alta qualidade. Recomendo para quem busca the best.",
    initials: "AB",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    location: "Imbuí",
    text: "Fiz o fechamento da minha área de serviço com vidro e o toldo retrátil. Atendimento nota 10.",
    initials: "CE",
    rating: 5
  },
  {
    name: "Luciana Costa",
    location: "Graça",
    text: "Material de altíssima qualidade. Dá para perceber que o toldo é resistente só de olhar para a estrutura.",
    initials: "LC",
    rating: 5
  },
  {
    name: "Marcos Vinícius",
    location: "Patamares",
    text: "Melhor preço e qualidade de Salvador. O toldo da minha lanchonete ficou exatamente como eu imaginei.",
    initials: "MV",
    rating: 5
  }
];

export const SERVICES: ServiceCategory[] = [
  {
    category: "Toldos Retráteis",
    icon: <Maximize />,
    items: [
      { 
        title: "Toldos de Alta Resistência", 
        description: "Lona de alta resistência, policarbonato translúcido, acionamento automático, estrutura reforçada.",
        backgroundImage: "https://i.postimg.cc/fWpWdRQW/5.jpg",
        imageAlt: "Instalação de toldo retrátil laranja de alta resistência pela Elias Serviços",
        whatsappMessage: "Olá! Gostaria de um orçamento para os Toldos Retráteis de Alta Resistência que vi no site."
      }
    ]
  },
  {
    category: "Coberturas",
    icon: <Layers />,
    items: [
      { 
        title: "Cobertura de Vidro", 
        description: "Vidro temperado de alta segurança, proteção UV com película, durabilidade extrema, design moderno para áreas gourmet.",
        backgroundImage: "https://i.postimg.cc/hjTbkF5W/Whats-App-Image-2026-01-29-at-1-17-37-PM.jpg",
        whatsappMessage: "Olá! Gostaria de um orçamento para a Cobertura de Vidro que vi no site."
      }
    ]
  },
  {
    category: "Outros Serviços",
    icon: <Box />,
    items: [
      { 
        title: "Soluções em Vidro e Mais", 
        description: "Box para banheiro, portas, janelas, portões de vidro, vasos para plantas sob medida.",
        backgroundImage: "https://i.postimg.cc/Px4Psjgh/box-para-banheiro.jpg",
        imageAlt: "Box de vidro temperado moderno instalado pela Elias Serviços",
        whatsappMessage: "Olá! Gostaria de um orçamento para as Soluções em Vidro e Mais (box, portas, janelas) que vi no site."
      }
    ]
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "100% Satisfação Técnica",
    description: "Projetos entregues com rigor técnico e acabamento impecável em cada detalhe.",
    icon: <CheckCircle2 className="w-8 h-8 text-[#1e40af]" />
  },
  {
    title: "Instalação a Combinar",
    description: "Compromisso com agilidade e flexibilidade para atender sua necessidade específica.",
    icon: <Clock className="w-8 h-8 text-[#1e40af]" />
  },
  {
    title: "Materiais Premium",
    description: "Trabalhamos apenas com materiais certificados e de primeira linha.",
    icon: <Package className="w-8 h-8 text-[#1e40af]" />
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://i.postimg.cc/NFW8RFFq/Whats-App-Image-2026-02-10-at-9-05-16-AM.jpg",
    title: "Cobertura de Policarbonato com estrutura metálica."
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    title: "COBERTURA DE POLICARBONATO MODERNA"
  },
  {
    url: "https://i.postimg.cc/Px4Psjgh/box-para-banheiro.jpg",
    title: "BOX DE VIDRO TEMPERADO MODERNO"
  },
  {
    url: "https://i.postimg.cc/L5pR8vWp/Whats-App-Image-2026-01-29-at-10-12-47-AM.jpg",
    title: "PORTÃO DE VIDRO RESIDENCIAL DE LUXO"
  }
];