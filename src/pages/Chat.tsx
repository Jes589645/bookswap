/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Image, 
  Smile, 
  MoreVertical, 
  ChevronLeft,
  Circle,
  Clock,
  CheckCheck
} from 'lucide-react';
import { MOCK_MATCHES } from '../constants.ts';

export default function Chat() {
  const [activeChatId, setActiveChatId] = useState('m1');
  const [inputValue, setInputValue] = useState('');

  const messages = [
    { id: '1', sender: 'them', text: '¡Hola Mateo! He visto que tienes Clean Code.', time: '18:20' },
    { id: '2', sender: 'them', text: '¿Sigue disponible para intercambio?', time: '18:21' },
    { id: '3', sender: 'me', text: '¡Hola! Sí, lo tengo disponible. El estado es perfecto.', time: '18:25' },
    { id: '4', sender: 'me', text: 'Me interesa mucho tu ejemplar de Cien Años de Soledad.', time: '18:25' },
    { id: '5', sender: 'them', text: '¡Genial! Podríamos vernos mañana en la Facultad de Ingeniería si te parece bien.', time: '18:30' },
  ];

  return (
    <div className="flex h-full max-h-[calc(100vh-73px)]">
      {/* Chats List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-outline-variant bg-white flex flex-col">
        <div className="p-6 border-b border-outline-variant">
          <h2 className="text-2xl font-serif font-bold text-on-surface">Mensajes</h2>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <FilterChip label="Todos" active />
            <FilterChip label="Matches" active={false} />
            <FilterChip label="Grupos" active={false} />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {MOCK_MATCHES.map((chat) => (
            <button 
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`w-full p-6 flex gap-4 transition-all hover:bg-surface-container-low border-l-4 ${
                activeChatId === chat.id ? 'bg-primary-container/20 border-primary' : 'border-transparent'
              }`}
            >
              <div className="relative shrink-0">
                <img src={chat.partnerAvatar} alt={chat.partnerName} className="w-14 h-14 rounded-2xl object-cover shadow-sm" />
                <Circle className="absolute -bottom-1 -right-1 fill-emerald-500 text-white w-4 h-4 border-2 border-white" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-on-surface truncate">{chat.partnerName}</h4>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">{chat.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant font-medium truncate leading-relaxed">
                  Podríamos vernos mañana en la Fa...
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="text-[9px] font-bold text-primary bg-primary-container px-2 py-0.5 rounded uppercase">Match 98%</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* active Chat Room */}
      <div className="hidden md:flex flex-1 flex-col bg-surface">
        <header className="px-8 py-4 bg-white border-b border-outline-variant flex items-center justify-between shadow-sm relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm">
              <img src={MOCK_MATCHES[0].partnerAvatar} alt="Partner" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-on-surface">{MOCK_MATCHES[0].partnerName}</h4>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                En línea ahora
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-2xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all">
              <Clock size={20} />
            </button>
            <button className="p-2.5 rounded-2xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all">
              <MoreVertical size={20} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          <div className="flex justify-center mb-8">
            <div className="px-4 py-1.5 bg-surface-container-high rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Ayer, 18:20
            </div>
          </div>

          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-md group ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                  <div className={`px-6 py-4 rounded-3xl text-sm font-medium shadow-sm transition-all relative ${
                    msg.sender === 'me' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-on-surface border border-outline-variant rounded-tl-none'
                  }`}>
                    {msg.text}
                    {msg.sender === 'me' && (
                      <CheckCheck size={14} className="absolute bottom-2 right-4 text-white/50" />
                    )}
                  </div>
                  <p className={`text-[10px] font-bold text-on-surface-variant mt-1.5 px-1 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity ${
                    msg.sender === 'me' ? 'text-right' : 'text-left'
                  }`}>
                    Entregado • {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input area */}
        <div className="p-6 bg-white border-t border-outline-variant">
          <div className="flex items-center gap-4 bg-surface-container-low rounded-3xl px-6 py-2 shadow-inner border border-outline-variant/50">
            <button className="text-on-surface-variant hover:text-primary transition-all p-2">
              <Smile size={24} />
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-all p-2">
              <Image size={24} />
            </button>
            <input 
              type="text" 
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-transparent py-4 outline-none font-medium placeholder:text-on-surface-variant focus:placeholder:text-primary/30 transition-all"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              className={`p-3 rounded-2xl transition-all shadow-lg ${
                inputValue.trim() 
                  ? 'bg-primary text-white shadow-primary/20 scale-100' 
                  : 'bg-surface-container-high text-on-surface-variant scale-90 opacity-50'
              }`}
            >
              <Send size={24} />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">{MOCK_MATCHES[0].partnerName} está escribiendo...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterChip({ label, active }: { label: string, active: boolean }) {
  return (
    <button className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${
      active 
        ? 'bg-primary text-white border-primary shadow-sm' 
        : 'bg-surface text-on-surface-variant border-outline-variant hover:border-primary/50'
    }`}>
      {label}
    </button>
  );
}
