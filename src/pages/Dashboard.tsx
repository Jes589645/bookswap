/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Leaf, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin, 
  Star,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { MOCK_USER, MOCK_MATCHES, MOCK_BOOKS } from '../constants.ts';
import { BookType } from '../types.ts';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif font-bold text-on-surface">Hola, {MOCK_USER.name} 👋</h2>
          <p className="text-on-surface-variant font-medium mt-1">Mira el impacto que has generado esta semana.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-outline-variant">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Nivel {MOCK_USER.level}</span>
            <div className="w-32 h-2 bg-surface-container-high rounded-full mt-1 overflow-hidden">
              <div className="w-3/4 h-full bg-primary" />
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
            <TrendingUp size={20} />
          </div>
        </div>
      </header>

      {/* Impact Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ImpactCard 
          icon={<Leaf className="text-emerald-500" />}
          label="Sostenibilidad"
          value={`${MOCK_USER.impact.co2Reduced}kg`}
          subtext="CO2 reducido"
          color="bg-emerald-50"
        />
        <ImpactCard 
          icon={<Star className="text-amber-500 shadow-amber-200" />}
          label="Puntos Ganados"
          value={MOCK_USER.points.toString()}
          subtext="Canjeables por bonos"
          color="bg-amber-50"
        />
        <ImpactCard 
          icon={<Users className="text-blue-500" />}
          label="Comunidad"
          value="12"
          subtext="Libros salvados"
          color="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Matches */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-on-surface">Matches Sugeridos</h3>
            <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
              Ver todos <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {MOCK_MATCHES.map((match) => (
              <motion.div 
                key={match.id}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={match.partnerAvatar} alt={match.partnerName} className="w-16 h-16 rounded-2xl object-cover shadow-md" />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                      {match.matchPercentage}%
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{match.partnerName}</h4>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-0.5">
                      <MapPin size={12} />
                      <span>{match.partnerLocation} • {match.distance}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center gap-8 px-4 py-3 bg-surface rounded-2xl">
                  <BookMini 
                    title={match.myBook.title} 
                    type={match.myBook.type} 
                    image={match.myBook.image}
                    label="Tuyo"
                  />
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                      <ArrowUpRight size={18} />
                    </div>
                    <span className="text-[10px] font-bold text-primary mt-1">MATCH</span>
                  </div>
                  <BookMini 
                    title={match.partnerBook.title} 
                    type={match.partnerBook.type} 
                    image={match.partnerBook.image}
                    label="Suyo"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                    Aceptar Intercambio
                  </button>
                  <button className="text-on-surface-variant px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-surface transition-all">
                    Chatear
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity / Recommendations */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-on-surface">Nuevos en tu Facultad</h3>
          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant space-y-4">
            {MOCK_BOOKS.slice(0, 3).map((book) => (
              <div key={book.id} className="flex gap-4 group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg w-12 h-16 shadow-sm">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">{book.title}</h5>
                  <p className="text-xs text-on-surface-variant mt-0.5">{book.author}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase ${
                      book.type === BookType.PHYSICAL ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {book.type}
                    </span>
                    <span className="text-[10px] font-bold text-primary">+{book.points} pts</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-3 border-2 border-dashed border-outline-variant rounded-2xl text-on-surface-variant font-bold text-xs hover:border-primary hover:text-primary transition-all">
              Explorar Catálogo Completo
            </button>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-3xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-serif text-xl font-bold leading-tight">¿Tienes libros que ya no usas?</h4>
              <p className="text-sm opacity-90 mt-2">Súbelos y gana puntos para tu próximo semestre.</p>
              <button className="mt-6 bg-white text-primary px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-surface transition-all">
                Publicar Ahora
              </button>
            </div>
            <BookPlus className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactCard({ icon, label, value, subtext, color }: { icon: React.ReactNode, label: string, value: string, subtext: string, color: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform`} />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-2xl bg-surface-container-low shadow-inner">
            {icon}
          </div>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{label}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-serif font-bold text-on-surface">{value}</span>
          <span className="text-xs font-medium text-on-surface-variant">{subtext}</span>
        </div>
      </div>
    </div>
  );
}

function BookMini({ title, type, image, label }: { title: string, type: string, image: string, label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 w-20">
      <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">{label}</span>
      <div className="relative w-16 h-20 rounded-lg overflow-hidden shadow-sm group">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
        <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-[2px] p-1">
          <p className="text-[7px] text-white font-bold leading-tight line-clamp-2">{title}</p>
        </div>
      </div>
      <span className={`text-[8px] font-bold px-1 rounded ${
        type === BookType.PHYSICAL ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
      }`}>
        {type}
      </span>
    </div>
  );
}

import { BookPlus } from 'lucide-react';
