/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LogOut, 
  LayoutDashboard, 
  Library, 
  BookPlus, 
  MessageSquare, 
  Search, 
  Bell, 
  Settings, 
  User as UserIcon,
  CreditCard,
  Leaf,
  HelpCircle,
  Menu,
  X,
  History,
  Star,
  Users
} from 'lucide-react';

import { MOCK_USER } from './constants.ts';
import Login from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Catalog from './pages/Catalog.tsx';
import Publish from './pages/Publish.tsx';
import LibraryPage from './pages/Library.tsx';
import Chat from './pages/Chat.tsx';
import Matches from './pages/Matches.tsx';

type Page = 'login' | 'dashboard' | 'catalog' | 'publish' | 'library' | 'chat' | 'matches';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'catalog': return <Catalog />;
      case 'publish': return <Publish />;
      case 'library': return <LibraryPage />;
      case 'chat': return <Chat />;
      case 'matches': return <Matches />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-12">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-surface-container-low rounded-full"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 
            onClick={() => setCurrentPage('dashboard')}
            className="font-serif text-2xl font-bold text-primary cursor-pointer active:scale-95 transition-transform"
          >
            BookSwap
          </h1>
          <div className="hidden md:flex gap-8">
            <NavItem active={currentPage === 'catalog'} onClick={() => setCurrentPage('catalog')}>Catálogo</NavItem>
            <NavItem active={currentPage === 'publish'} onClick={() => setCurrentPage('publish')}>Publicar</NavItem>
            <NavItem active={currentPage === 'library'} onClick={() => setCurrentPage('library')}>Mis Libros</NavItem>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:flex items-center gap-2 bg-secondary-container px-4 py-1.5 rounded-full text-primary shadow-sm">
            <Star size={18} className="fill-current" />
            <span className="font-serif font-bold text-sm tracking-tight">{MOCK_USER.points} Puntos</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <IconButton icon={<Bell size={20} />} />
            <IconButton icon={<Settings size={20} />} />
            <div className="relative group cursor-pointer" onClick={() => setCurrentPage('library')}>
              <img 
                src={MOCK_USER.avatar} 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-primary object-cover"
              />
              {MOCK_USER.isPremium && (
                <span className="absolute -bottom-1 -right-1 bg-primary text-white text-[8px] font-bold px-1 rounded-full border border-white">PREM</span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside 
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              className="fixed md:sticky top-[73px] left-0 h-[calc(100vh-73px)] w-64 bg-surface-container-low border-r border-outline-variant flex flex-col py-8 z-40 overflow-y-auto"
            >
              <div className="px-6 mb-8 group">
                <h2 className="font-serif text-lg font-bold text-primary">Academia Circular</h2>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <p className="text-xs font-bold text-on-surface-variant">Miembro Premium</p>
                </div>
              </div>

              <div className="flex-1 space-y-1">
                <SidebarItem 
                  active={currentPage === 'dashboard'} 
                  onClick={() => setCurrentPage('dashboard')}
                  icon={<LayoutDashboard size={20} />}
                  label="Dashboard"
                />
                <SidebarItem 
                  active={currentPage === 'matches'} 
                  onClick={() => setCurrentPage('matches')}
                  icon={<Users size={20} />}
                  label="Mis Matches"
                />
                <SidebarItem 
                  active={currentPage === 'library'} 
                  onClick={() => setCurrentPage('library')}
                  icon={<Library size={20} />}
                  label="Mi Biblioteca"
                />
                <SidebarItem 
                  active={currentPage === 'chat'} 
                  onClick={() => setCurrentPage('chat')}
                  icon={<MessageSquare size={20} />}
                  label="Mensajes"
                />
              </div>

              <div className="px-4 mt-8">
                <button 
                  onClick={() => setCurrentPage('publish')}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md group"
                >
                  <BookPlus size={20} className="group-hover:rotate-12 transition-transform" />
                  Publicar Libro
                </button>
              </div>

              <div className="mt-auto border-t border-outline-variant pt-4">
                <SidebarItem 
                  active={false} 
                  onClick={() => {}}
                  icon={<Leaf size={20} />}
                  label="Sostenibilidad"
                />
                <SidebarItem 
                  active={false} 
                  onClick={() => {}}
                  icon={<HelpCircle size={20} />}
                  label="Ayuda"
                />
                <SidebarItem 
                  active={false} 
                  onClick={handleLogout}
                  icon={<LogOut size={20} />}
                  label="Cerrar Sesión"
                  danger
                />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function NavItem({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) {
  return (
    <button 
      onClick={onClick}
      className={`relative font-bold text-sm transition-colors py-1 ${active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
    >
      {children}
      {active && (
        <motion.div 
          layoutId="navbar-underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
        />
      )}
    </button>
  );
}

function SidebarItem({ active, onClick, icon, label, danger }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string, danger?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
        active 
          ? 'bg-primary-container text-primary border-r-4 border-primary' 
          : danger 
            ? 'text-red-600 hover:bg-red-50' 
            : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
      }`}
    >
      <span className={active ? 'text-primary' : ''}>{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-full active:scale-90">
      {icon}
    </button>
  );
}
