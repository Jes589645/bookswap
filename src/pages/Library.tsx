/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Package, 
  Trash2, 
  Edit3, 
  Eye, 
  History, 
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { MOCK_BOOKS } from '../constants.ts';
import { BookStatus, BookType } from '../types.ts';

export default function LibraryPage() {
  const myBooks = [
    { ...MOCK_BOOKS[1], status: BookStatus.AVAILABLE },
    { ...MOCK_BOOKS[1], id: 'b5', title: 'Algoritmos y Estructuras', status: BookStatus.IN_PROGRESS },
    { ...MOCK_BOOKS[3], id: 'b6', status: BookStatus.BORRADOR }
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-serif font-bold text-on-surface">Mi Biblioteca</h2>
          <p className="text-on-surface-variant font-medium mt-1">Gestiona tus libros publicados y el estado de tus intercambios.</p>
        </div>
        <div className="flex gap-4">
          <StatBox label="Publicados" value="3" color="text-primary" />
          <StatBox label="Puntos Acum." value="540" color="text-emerald-600" />
        </div>
      </header>

      <div className="bg-white rounded-3xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="flex border-b border-outline-variant">
          <Tab label="Todos" active count={3} />
          <Tab label="Disponibles" active={false} count={1} />
          <Tab label="En Proceso" active={false} count={1} />
          <Tab label="Cerrados" active={false} count={12} />
        </div>

        <div className="divide-y divide-outline-variant">
          {myBooks.map((book) => (
            <div key={book.id} className="p-6 flex flex-col md:flex-row gap-8 items-center hover:bg-surface-container-low transition-colors group">
              <div className="relative w-24 h-32 rounded-xl overflow-hidden shadow-lg shrink-0">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={book.status} />
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    book.type === BookType.PHYSICAL ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {book.type}
                  </span>
                  <span className="text-[10px] font-bold text-on-surface-variant px-2 py-0.5 rounded uppercase bg-surface-container-high">{book.category}</span>
                </div>
                
                <div>
                  <h4 className="text-xl font-serif font-bold text-on-surface group-hover:text-primary transition-colors">{book.title}</h4>
                  <p className="font-medium text-on-surface-variant">{book.author}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                    <TrendingUp size={14} />
                    {book.points} Puntos
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                    <History size={14} />
                    Subido hace 2 días
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                    <Eye size={14} />
                    14 visitas
                  </div>
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <IconButton label="Editar" icon={<Edit3 size={18} />} primary />
                <IconButton label="Estadísticas" icon={<Package size={18} />} />
                <IconButton label="Eliminar" icon={<Trash2 size={18} />} danger />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended for promotion */}
      <div className="bg-gradient-to-r from-primary-container/30 to-secondary-container/30 border border-primary/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-inner">
        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg">
          <TrendingUp size={32} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-xl font-serif font-bold text-primary">¡Potencia tus intercambios!</h4>
          <p className="text-on-surface-variant font-medium mt-1">Tu libro "Clean Code" está teniendo muchas visitas. Úsalo como destacado para conseguir matches más rápido.</p>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
          Destacar Libro
        </button>
      </div>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="bg-white px-6 py-3 rounded-2xl border border-outline-variant shadow-sm flex flex-col text-center">
      <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">{label}</span>
      <span className={`text-2xl font-serif font-bold ${color}`}>{value}</span>
    </div>
  );
}

function Tab({ label, active, count }: { label: string, active: boolean, count: number }) {
  return (
    <button className={`px-8 py-6 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
      active 
        ? 'border-primary text-primary bg-primary-container/10' 
        : 'border-transparent text-on-surface-variant hover:text-primary'
    }`}>
      {label}
      <span className={`px-2 py-0.5 rounded-full text-[10px] ${active ? 'bg-primary text-white' : 'bg-surface-container-high'}`}>
        {count}
      </span>
    </button>
  );
}

function StatusBadge({ status }: { status: BookStatus }) {
  const configs = {
    [BookStatus.AVAILABLE]: { label: 'Disponible', class: 'bg-emerald-100 text-emerald-700' },
    [BookStatus.IN_PROGRESS]: { label: 'En Proceso', class: 'bg-amber-100 text-amber-700' },
    [BookStatus.BORRADOR]: { label: 'Borrador', class: 'bg-surface-container-high text-on-surface-variant' }
  };

  const config = configs[status];
  return (
    <span className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${config.class}`}>
      {status === BookStatus.AVAILABLE && <CheckCircle2 size={12} />}
      {status === BookStatus.IN_PROGRESS && <Clock size={12} />}
      {config.label}
    </span>
  );
}

function IconButton({ label, icon, danger, primary }: { label: string, icon: React.ReactNode, danger?: boolean, primary?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all border group ${
      primary 
        ? 'bg-primary-container border-primary/20 text-primary hover:bg-primary hover:text-white' 
        : danger 
          ? 'bg-red-50 border-red-100 text-red-600 hover:bg-red-600 hover:text-white' 
          : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
    }`}>
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </button>
  );
}
