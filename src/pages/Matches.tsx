/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Users, 
  MapPin, 
  Calendar, 
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Map as MapIcon
} from 'lucide-react';
import { MOCK_MATCHES } from '../constants.ts';
import { BookType } from '../types.ts';

export default function Matches() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-serif font-bold text-on-surface">Mis Matches</h2>
          <p className="text-on-surface-variant font-medium mt-1">Sincroniza tus lecturas con otros universitarios.</p>
        </div>
        <div className="flex bg-white px-2 py-1.5 rounded-2xl shadow-sm border border-outline-variant">
           <Tab label="Activos" active count={1} />
           <Tab label="Solicitudes" active={false} count={4} />
           <Tab label="Historial" active={false} count={12} />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {MOCK_MATCHES.map((match) => (
          <motion.div 
            key={match.id}
            layout
            whileHover={{ y: -4 }}
            className="bg-white rounded-[40px] border border-outline-variant shadow-lg overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Left side: People info */}
            <div className="lg:w-1/3 p-8 border-r border-outline-variant bg-surface-container-low/30">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                  <img src={match.partnerAvatar} alt={match.partnerName} className="relative w-32 h-32 rounded-[40px] object-cover shadow-2xl border-4 border-white rotate-3" />
                  <div className="absolute -bottom-4 -right-2 bg-emerald-500 text-white font-bold px-4 py-1 rounded-full border-4 border-white shadow-lg text-sm">
                    {match.matchPercentage}% Match
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-on-surface">{match.partnerName}</h3>
                <div className="flex items-center gap-1.5 text-on-surface-variant font-medium text-sm mt-1">
                  <MapPin size={16} />
                  {match.partnerLocation} • {match.distance}
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                  <div className="bg-white p-4 rounded-3xl shadow-sm border border-outline-variant">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-none mb-1">Impacto</p>
                    <p className="text-lg font-serif font-bold text-emerald-600 leading-none">8.2kg <span className="text-[10px] font-sans">CO2</span></p>
                  </div>
                  <div className="bg-white p-4 rounded-3xl shadow-sm border border-outline-variant">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-none mb-1">Reputación</p>
                    <div className="flex items-center gap-1 text-amber-500">
                      <TrendingUp size={16} />
                      <span className="text-lg font-serif font-bold leading-none">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Books & Action */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 py-8">
                {/* My Book */}
                <div className="flex flex-col items-center gap-4 group">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest underline underline-offset-4 decoration-primary decoration-2">Tu Libro</p>
                  <div className="relative w-36 h-48 rounded-2xl overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                    <img src={match.myBook.image} alt={match.myBook.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      <p className="text-[10px] font-bold text-white line-clamp-1">{match.myBook.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">{match.myBook.type}</span>
                    <span className="text-primary font-bold text-sm">+{match.myBook.points} pts</span>
                  </div>
                </div>

                {/* Match Icon */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 relative z-10">
                    <ArrowRightLeft size={32} />
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-outline-variant to-transparent -translate-y-1/2 -z-10 w-40 -left-12" />
                  <div className="mt-4 flex flex-col items-center">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary-container px-3 py-1 rounded-full shadow-inner animate-pulse">
                      <ShieldCheck size={14} />
                      INTERCAMBIO SEGURO
                    </div>
                  </div>
                </div>

                {/* Partner Book */}
                <div className="flex flex-col items-center gap-4 group">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest underline underline-offset-4 decoration-primary decoration-2 text-right">Su Libro</p>
                  <div className="relative w-36 h-48 rounded-2xl overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                    <img src={match.partnerBook.image} alt={match.partnerBook.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      <p className="text-[10px] font-bold text-white line-clamp-1">{match.partnerBook.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">{match.partnerBook.type}</span>
                    <span className="text-primary font-bold text-sm">+{match.partnerBook.points} pts</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 text-on-surface-variant">
                   <div className="flex items-center gap-2">
                     <Calendar size={18} />
                     <span className="text-sm font-medium">Caduca en 48h</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <MapIcon size={18} />
                     <span className="text-sm font-medium">0.8 km de ti</span>
                   </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none p-4 rounded-2xl bg-surface border border-outline-variant text-on-surface-variant hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all group">
                    <XCircle size={24} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex-1 sm:flex-none p-4 rounded-2xl bg-surface border border-outline-variant text-on-surface-variant hover:bg-primary-container hover:text-primary hover:border-primary/20 transition-all group">
                    <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex-[3] sm:flex-none bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3">
                    <CheckCircle2 size={24} />
                    Confirmar Encuentro
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Tab({ label, active, count }: { label: string, active: boolean, count: number }) {
  return (
    <button className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
      active 
        ? 'bg-primary text-white shadow-md' 
        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
    }`}>
      {label}
      <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${active ? 'bg-white text-primary' : 'bg-surface-container-high'}`}>
        {count}
      </span>
    </button>
  );
}
