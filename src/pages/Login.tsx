/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LogIn, Github, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-outline-variant overflow-hidden relative z-10"
      >
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="font-serif text-5xl font-bold text-primary mb-2">BookSwap</h1>
            <p className="text-on-surface-variant font-medium">Academia Circular</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={onLogin}
              className="w-full bg-white border-2 border-outline hover:border-primary px-6 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all active:scale-95 group"
            >
              <Mail className="text-[#DB4437] group-hover:scale-110 transition-transform" />
              Continuar con Google
            </button>
            <button 
              onClick={onLogin}
              className="w-full bg-black text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all active:scale-95 group"
            >
              <Github className="group-hover:rotate-12 transition-transform" />
              Continuar con GitHub
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-outline-variant"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-on-surface-variant font-bold">O con tu cuenta</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-1.5 ml-1">Email Universitario</label>
              <input 
                type="email" 
                placeholder="tu@uni.edu"
                className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-1.5 ml-1">Contraseña</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-outline text-primary focus:ring-primary" />
                <span className="text-xs font-medium text-on-surface-variant">Recordarme</span>
              </label>
              <button type="button" className="text-xs font-bold text-primary hover:underline">¿Olvidaste tu contraseña?</button>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Entrar
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-on-surface-variant">
            ¿No tienes cuenta? <button onClick={onLogin} className="text-primary font-bold hover:underline">Regístrate ahora</button>
          </p>
        </div>

        <div className="bg-surface-container-low p-6 text-center border-t border-outline-variant">
          <p className="text-xs font-medium text-on-surface-variant italic">
            "Intercambiar un libro ahorra en promedio 7.5kg de CO2"
          </p>
        </div>
      </motion.div>
    </div>
  );
}
