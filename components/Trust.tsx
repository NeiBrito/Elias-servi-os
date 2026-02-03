import React, { useState, useEffect } from 'react';
import { Star, MapPin, MessageSquare, Send, CheckCircle, Quote, X, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Comment } from '../types';

const Trust: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [approvedComments, setApprovedComments] = useState<Comment[]>([]);

  // Carrega comentários salvos
  const loadComments = () => {
    const saved = localStorage.getItem('elias_user_comments');
    if (saved) {
      const all: Comment[] = JSON.parse(saved);
      // Filtra apenas os aprovados para exibição pública
      const approved = all.filter(c => c.status === 'approved');
      setApprovedComments(approved);
    }
  };

  useEffect(() => {
    loadComments();
    // Escuta atualizações (ex: do AdminPanel)
    const handleUpdate = () => loadComments();
    window.addEventListener('elias_comments_updated', handleUpdate);
    return () => window.removeEventListener('elias_comments_updated', handleUpdate);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      location: location || 'Salvador, BA',
      text,
      date: new Date().toLocaleDateString('pt-BR'),
      rating,
      status: 'pending', // Fica pendente para moderação do Elias
      initials: name.split(' ').filter(n => n).map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'ES'
    };

    // Salvando no "Banco de Dados" Local
    const saved = localStorage.getItem('elias_user_comments');
    const all = saved ? JSON.parse(saved) : [];
    const updated = [...all, newComment];
    localStorage.setItem('elias_user_comments', JSON.stringify(updated));
    
    // Notifica o sistema da mudança
    window.dispatchEvent(new Event('elias_comments_updated'));
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setName('');
      setText('');
      setLocation('');
      setRating(5);
    }, 4000);
  };

  // Combina depoimentos fixos da constants.tsx com os aprovados dinamicamente
  const displayList = [
    ...TESTIMONIALS.map(t => ({ 
      ...t, 
      id: 'fixed-' + t.name, 
      status: 'approved' as const, 
      date: 'CLIENTE SATISFEITO' 
    })),
    ...approvedComments.map(c => ({
      ...c,
      date: 'CLIENTE SATISFEITO'
    }))
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[#1e40af] text-[11px] font-black uppercase tracking-[0.5em] mb-4">Credibilidade</h2>
            <h3 className="text-4xl md:text-5xl font-montserrat font-extrabold text-gray-900 leading-[1.1]">
              O que dizem os <br/><span className="text-[#1e40af]">nossos clientes.</span>
            </h3>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#1e40af] text-[#1e40af] rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#1e40af] hover:text-white transition-all shadow-xl active:scale-95 shrink-0"
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Deixar Depoimento
          </button>
        </div>

        {/* GRADE DE DEPOIMENTOS FIXOS E DINÂMICOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayList.map((t) => (
            <div 
              key={t.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/40 border border-gray-50 flex flex-col h-full group hover:-translate-y-2 transition-all duration-500 relative"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-5 h-5 ${s <= t.rating ? 'text-[#fbbf24] fill-current' : 'text-gray-100'}`} />
                  ))}
                </div>
                <div className="opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-12 h-12 text-[#1e40af]" />
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-12 italic font-medium flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-end justify-between border-t border-gray-50 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e40af] flex items-center justify-center text-white font-montserrat font-extrabold text-sm shadow-lg shadow-blue-500/20">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 font-montserrat font-black uppercase tracking-widest text-sm mb-0.5">{t.name}</p>
                    <div className="flex items-center text-gray-400 text-[10px] font-black uppercase tracking-widest">
                      <MapPin className="w-3 h-3 mr-1 text-[#fbbf24]" />
                      {t.location}
                    </div>
                  </div>
                </div>
                
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic mb-1">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DE DEPOIMENTO - FIEL À IMAGEM */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            
            <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              {submitted ? (
                <div className="p-16 text-center">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-3xl font-montserrat font-black text-gray-900 mb-4 italic">Agradecemos o carinho!</h4>
                  <p className="text-gray-500 text-base font-medium leading-relaxed max-w-sm mx-auto">
                    Seu depoimento foi enviado para o Elias e em breve estará visível assim que for aprovado.
                  </p>
                </div>
              ) : (
                <>
                  {/* HEADER DO MODAL AZUL */}
                  <div className="bg-[#1e40af] p-8 md:p-10 text-white relative">
                    <button 
                      onClick={() => setIsModalOpen(false)} 
                      className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
                    >
                      <X className="w-7 h-7" />
                    </button>
                    <div>
                      <h4 className="font-montserrat font-black text-3xl md:text-4xl uppercase tracking-tighter italic leading-none mb-3">
                        SUA AVALIAÇÃO TÉCNICA
                      </h4>
                      <p className="text-blue-200 text-[11px] font-black uppercase tracking-[0.2em]">
                        AJUDE-NOS A MANTER O PADRÃO DE EXCELÊNCIA
                      </p>
                    </div>
                  </div>

                  {/* CORPO DO FORMULÁRIO */}
                  <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10 bg-white">
                    {/* SEÇÃO DE ESTRELAS */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                        QUANTAS ESTRELAS DAMOS AO SERVIÇO?
                      </label>
                      <div className="flex space-x-3 md:space-x-5 bg-[#f8fafc] p-5 rounded-3xl w-fit border border-gray-100">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="focus:outline-none transition-transform hover:scale-125 active:scale-95"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                          >
                            <Star 
                              className={`w-10 h-10 md:w-12 md:h-12 ${star <= (hover || rating) ? 'text-[#fbbf24] fill-[#fbbf24]' : 'text-gray-200'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* CAMPOS DE TEXTO */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400">NOME COMPLETO</label>
                        <input 
                          required
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-6 py-5 bg-[#f8fafc] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1e40af] outline-none transition-all font-bold text-gray-700 placeholder:text-gray-300"
                          placeholder="Ex: João da Silva"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400">SEU BAIRRO EM SALVADOR</label>
                        <input 
                          required
                          type="text" 
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-6 py-5 bg-[#f8fafc] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1e40af] outline-none transition-all font-bold text-gray-700 placeholder:text-gray-300"
                          placeholder="Ex: Barra"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400">O QUE ACHOU DO NOSSO TRABALHO?</label>
                      <textarea 
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={4}
                        className="w-full px-6 py-5 bg-[#f8fafc] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1e40af] outline-none transition-all font-medium text-gray-700 resize-none leading-relaxed placeholder:text-gray-300"
                        placeholder="Ex: O toldo ficou impecável e a equipe foi muito ágil."
                      />
                    </div>

                    {/* BOTÃO DE ENVIO */}
                    <button 
                      type="submit"
                      className="w-full bg-[#1e40af] text-white py-6 rounded-2xl font-montserrat font-extrabold text-sm uppercase tracking-[0.2em] hover:bg-blue-800 transition-all flex items-center justify-center shadow-2xl shadow-blue-900/30 active:scale-95 group"
                    >
                      PUBLICAR MEU DEPOIMENTO
                      <Send className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

        {/* SEÇÃO DE GARANTIA (STICKER) */}
        <div className="mt-24 max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-10 md:p-12 relative overflow-hidden group border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-center md:text-left">
            <div className="flex items-center space-x-8">
              <div className="w-20 h-20 bg-[#fbbf24] rounded-3xl flex items-center justify-center shadow-2xl shadow-yellow-500/20 rotate-3 group-hover:rotate-0 transition-transform">
                <ShieldCheck className="w-10 h-10 text-[#1e40af]" />
              </div>
              <div>
                <h4 className="text-white font-montserrat font-extrabold text-2xl mb-2">Garantia Técnica Elias</h4>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Selo de 3 Anos em toda a estrutura instalada.</p>
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

export default Trust;