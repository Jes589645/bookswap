/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ChevronDown, 
  BookOpen, 
  Heart,
  ShoppingCart,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { MOCK_BOOKS } from '../constants.ts';
import { BookType } from '../types.ts';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Ingeniería', 'Literatura', 'Ciencias Sociales', 'Filosofía', 'Arte', 'Medicina'];

  const filteredBooks = MOCK_BOOKS.filter(book => 
    (selectedCategory === 'Todas' || book.category === selectedCategory) &&
    (book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Search and Filters Header */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-outline-variant space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            <input 
              type="text" 
              placeholder="Busca por título, autor o palabra clave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-low rounded-2xl pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all font-medium"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-surface-container-low px-6 py-4 rounded-2xl font-bold text-on-surface hover:bg-surface-container-high transition-all">
              <Filter size={20} />
              Filtros
              <ChevronDown size={16} />
            </button>
            <div className="bg-surface-container-low p-1 rounded-2xl flex items-center">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant'}`}
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}>
        {filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} mode={viewMode} />
        ))}
        
        {filteredBooks.length === 0 && (
          <div className="col-span-full py-20 text-center space-y-4">
            <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto text-on-surface-variant">
              <BookOpen size={40} />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold">No encontramos libros</h4>
              <p className="text-on-surface-variant">Intenta ajustar tus filtros o búsqueda.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BookItem({ book, mode }: { book: any, mode: 'grid' | 'list' }) {
  if (mode === 'list') {
    return (
      <motion.div 
        layout
        whileHover={{ x: 10 }}
        className="bg-white p-4 rounded-2xl border border-outline-variant shadow-sm flex gap-6 items-center group cursor-pointer"
      >
        <div className="w-20 h-28 rounded-xl overflow-hidden shadow-md flex-shrink-0">
          <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
              book.type === BookType.PHYSICAL ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {book.type}
            </span>
            <span className="text-[10px] font-bold text-on-surface-variant bg-surface px-2 py-0.5 rounded uppercase">{book.category}</span>
          </div>
          <h4 className="font-serif text-lg font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">{book.title}</h4>
          <p className="text-sm text-on-surface-variant font-medium">{book.author}</p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1 text-primary">
              <TrendingUp size={16} />
              <span className="text-sm font-bold">{book.points} Puntos</span>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant">
              <MapPin size={16} />
              <span className="text-xs">A 1.2 km</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all hover:opacity-90">
            Matching
          </button>
          <button className="p-2 border border-outline-variant rounded-xl text-on-surface-variant hover:text-red-500 hover:bg-red-50 transition-all">
            <Heart size={20} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      layout
      whileHover={{ y: -8 }}
      className="bg-white p-4 rounded-3xl border border-outline-variant shadow-sm flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-inner mb-4">
        <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20 uppercase ${
            book.type === BookType.PHYSICAL ? 'bg-amber-500/90 text-white' : 'bg-blue-500/90 text-white'
          }`}>
            {book.type}
          </span>
          <span className="text-[10px] font-bold bg-white/90 backdrop-blur-md text-on-surface-variant px-2.5 py-1 rounded-full shadow-sm border border-white/20 uppercase">{book.category}</span>
        </div>
        <button className="absolute bottom-3 right-3 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg text-on-surface-variant hover:text-red-500 hover:scale-110 active:scale-95 transition-all">
          <Heart size={18} />
        </button>
      </div>

      <div className="space-y-1 px-1">
        <h4 className="font-serif text-base font-bold text-on-surface leading-snug group-hover:text-primary transition-colors line-clamp-2">{book.title}</h4>
        <p className="text-xs text-on-surface-variant font-medium">{book.author}</p>
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between px-1">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Valor</span>
          <span className="font-serif font-bold text-primary">{book.points} pts</span>
        </div>
        <button className="bg-surface-container-high p-3 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all active:scale-90">
          <ShoppingCart size={18} />
        </button>
      </div>
    </motion.div>
  );
}
