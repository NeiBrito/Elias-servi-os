
import React, { useState, useEffect } from 'react';
import { Lock, Trash2, X, LayoutDashboard, MessageSquare, ArrowLeft, CheckCircle, Clock, Star } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  location: string;
  text: string;
  date: string;
  rating: number;
  status: 'pending' | 'approved';
  initials: string;
}

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved'>('pending');

  const loadAllComments = () => {
    try {
      const saved = localStorage.getItem('elias_user_comments');
      if (saved) {
        setComments(JSON.parse(saved));
      } else {
        setComments([]);
      }
    } catch (e) {
      console.error("Erro no carregamento ADM:", e);
    }
  };

  useEffect(() => {
    loadAllComments();
    
    const syncData = () => loadAllComments();
    window.addEventListener('storage', syncData);
    window.addEventListener('elias_comments_updated', syncData);
    
    return () => {
      window.removeEventListener('storage', syncData);
      window.removeEventListener('elias_comments_updated', syncData);
    };
  }, []);

  const saveToStorage = (updated: Comment[]) => {
    setComments(updated);
    localStorage.setItem('elias_user_comments', JSON.stringify(updated));
    // Dispara evento para o componente Trust.tsx atualizar em tempo real
    window.dispatchEvent(new Event('elias_comments_updated'));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '123456') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Acesso Negado. Senha incorreta.');
      setPassword('');
    }
  };

  const handleApprove = (id: string) => {
    const updated = comments.map(c => 
      c.id === id ? { ...c, status: 'approved' as const } : c
    );
    saveToStorage(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm('Deseja excluir este depoimento permanentemente?')) {
      const updated = comments.filter(c => c.id !== id);
      saveToStorage(updated);
    }
  };

  const filtered = comments.filter(c => c.status === activeTab);

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>
        <div className="max-w-md w-full bg-slate-900 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg shadow-blue-500/20">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-black text-white text-center mb-2 italic">Acesso Administrativo</h2>
          <p className="text-slate-500 text-center text-xs mb-8 uppercase tracking-widest font-bold">Gestão de Conteúdo Elias Serviços</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              autoFocus
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a Senha Mestra"
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all font-bold text-center"
            />
            {error && <p className="text-red-400 text-[10px] text-center font-black uppercase tracking-widest bg-red-400/10 py-2 rounded-lg">{error}</p>}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg transition-all active:scale-95">ENTRAR NO PAINEL</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-slate-50 overflow-y-auto">
      <nav className="bg-slate-900 py-4 px-8 flex justify-between items-center sticky top-0 z-10 shadow-2xl border-b border-white/5">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-600 rounded-lg">
            <LayoutDashboard className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-white italic text-xs tracking-tighter uppercase">ELIAS ADMIN <span className="text-blue-500 ml-2">v1.0</span></span>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white flex items-center space-x-2 text-[9px] font-black uppercase tracking-[0.2em] transition-colors group">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Sair do Painel</span>
        </button>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black text-slate-900 italic tracking-tight mb-1">Central de Moderação</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Gerencie os depoimentos enviados pelos clientes</p>
          </div>
          <div className="flex bg-slate-200 p-1.5 rounded-2xl shadow-inner">
            <button 
              onClick={() => setActiveTab('pending')} 
              className={`px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'pending' ? 'bg-white text-blue-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Pendentes ({comments.filter(c => c.status === 'pending').length})
            </button>
            <button 
              onClick={() => setActiveTab('approved')} 
              className={`px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'approved' ? 'bg-white text-emerald-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Aprovados ({comments.filter(c => c.status === 'approved').length})
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Cliente</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Relato Técnico</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-8 py-24 text-center">
                      <div className="flex flex-col items-center">
                        <MessageSquare className="w-12 h-12 text-slate-200 mb-4" />
                        <p className="text-slate-400 italic font-medium">Nenhum depoimento encontrado nesta lista.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((c) => (
                    <tr key={c.id} className="border-b border-slate-100 group hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-[10px] text-white font-black shadow-lg">
                            {c.initials}
                          </div>
                          <div>
                            <div className="font-black text-slate-900 text-sm flex items-center">
                              {c.name}
                              <div className="flex ml-3 space-x-0.5">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className={`w-2.5 h-2.5 ${s <= c.rating ? 'text-yellow-500 fill-current' : 'text-slate-200'}`} />)}
                              </div>
                            </div>
                            <div className="text-[10px] font-black text-blue-500 uppercase tracking-tighter mt-0.5">{c.location} • {c.date}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-slate-600 text-sm italic max-w-md leading-relaxed">
                        "{c.text}"
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end space-x-3">
                          {c.status === 'pending' && (
                            <button 
                              onClick={() => handleApprove(c.id)} 
                              className="px-6 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-95 flex items-center space-x-2"
                            >
                              <CheckCircle className="w-3 h-3" />
                              <span>Aprovar</span>
                            </button>
                          )}
                          <button 
                            onClick={() => handleDelete(c.id)} 
                            className="p-3 text-red-300 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-90"
                            title="Remover permanentemente"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
