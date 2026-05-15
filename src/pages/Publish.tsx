/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Camera, 
  Upload, 
  BookOpen, 
  Tag, 
  Info, 
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  FileText,
  Smartphone
} from 'lucide-react';
import { BookType } from '../types.ts';

export default function Publish() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    type: BookType.PHYSICAL,
    condition: 'Bueno',
    description: '',
    image: null as string | null
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const content = [
    {
      title: 'Información Básica',
      description: 'Dinos qué libro quieres intercambiar.',
      inputs: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-on-surface-variant ml-1 flex items-center gap-1.5">
                <BookOpen size={14} /> Título del Libro
              </label>
              <input 
                type="text" 
                placeholder="Ej. Cálculo de una Variable"
                className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all font-medium"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-on-surface-variant ml-1 flex items-center gap-1.5">
                <FileText size={14} /> Autor
              </label>
              <input 
                type="text" 
                placeholder="Ej. James Stewart"
                className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all font-medium"
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant ml-1 flex items-center gap-1.5">
              <Tag size={14} /> Categoría / Facultad
            </label>
            <select 
              className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all font-medium appearance-none"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Selecciona una categoría</option>
              <option value="Ingeniería">Ingeniería</option>
              <option value="Medicina">Medicina</option>
              <option value="Derecho">Derecho</option>
              <option value="Artes">Artes</option>
              <option value="Economía">Economía</option>
            </select>
          </div>
        </div>
      )
    },
    {
      title: 'Estado y Formato',
      description: 'Ayúdanos a valorar tu libro correctamente.',
      inputs: (
        <div className="space-y-8">
          <div className="flex gap-4">
            <button 
              onClick={() => setFormData({...formData, type: BookType.PHYSICAL})}
              className={`flex-1 p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
                formData.type === BookType.PHYSICAL 
                  ? 'bg-primary-container border-primary text-primary shadow-md' 
                  : 'bg-white border-outline-variant text-on-surface-variant hover:border-primary/50'
              }`}
            >
              <BookOpen size={32} />
              <div className="text-center">
                <p className="font-bold">Libro Físico</p>
                <p className="text-[10px] opacity-80 uppercase font-bold tracking-widest mt-1">Intercambio Presencial</p>
              </div>
            </button>
            <button 
              onClick={() => setFormData({...formData, type: BookType.DIGITAL})}
              className={`flex-1 p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
                formData.type === BookType.DIGITAL 
                  ? 'bg-primary-container border-primary text-primary shadow-md' 
                  : 'bg-white border-outline-variant text-on-surface-variant hover:border-primary/50'
              }`}
            >
              <Smartphone size={32} />
              <div className="text-center">
                <p className="font-bold">Libro Digital</p>
                <p className="text-[10px] opacity-80 uppercase font-bold tracking-widest mt-1">Envío mediante QR</p>
              </div>
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant ml-1">Estado del ejemplar</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Nuevo', 'Como nuevo', 'Bueno', 'Usado'].map((cond) => (
                <button 
                  key={cond}
                  onClick={() => setFormData({...formData, condition: cond})}
                  className={`py-3 rounded-xl text-xs font-bold transition-all border-2 ${
                    formData.condition === cond 
                      ? 'bg-primary text-white border-primary shadow-md' 
                      : 'bg-white border-outline-variant text-on-surface-variant hover:border-primary/20'
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant ml-1">Descripción corta</label>
            <textarea 
              placeholder="Ej. Sin subrayar, con notas adicionales de clase..."
              className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all font-medium resize-none h-32"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
        </div>
      )
    },
    {
      title: 'Fotos del Libro',
      description: 'Las fotos reales aumentan la confianza para el match.',
      inputs: (
        <div className="space-y-6">
          <div className="aspect-video bg-surface-container-low border-2 border-dashed border-outline-variant rounded-3xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-primary transition-all overflow-hidden relative">
            {formData.image ? (
              <>
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                <button 
                  onClick={() => setFormData({...formData, image: null})}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
                >
                  <X size={20} />
                </button>
              </>
            ) : (
              <>
                <div className="p-6 rounded-full bg-primary-container text-primary group-hover:scale-110 transition-transform">
                  <Camera size={40} />
                </div>
                <div className="text-center">
                  <p className="font-bold text-on-surface">Haz click o arrastra una foto</p>
                  <p className="text-xs text-on-surface-variant mt-1 font-medium">PNG, JPG hasta 10MB</p>
                </div>
              </>
            )}
          </div>
          
          <div className="bg-amber-50 p-4 rounded-2xl flex gap-3 border border-amber-100">
            <Info className="text-amber-500 shrink-0" size={20} />
            <p className="text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Protip:</span> Asegúrate de que se vea bien la portada y el estado de los bordes. Esto acelera el proceso de valoración por puntos.
            </p>
          </div>
        </div>
      )
    }
  ];

  const current = content[step - 1];

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100 mb-4">
          <CheckCircle2 size={14} />
          Gana hasta 120 puntos
        </div>
        <h2 className="text-4xl font-serif font-bold text-on-surface">{current.title}</h2>
        <p className="text-on-surface-variant mt-2 font-medium">{current.description}</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-12 relative px-4">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-container-high -translate-y-1/2 -z-10" />
        {[1, 2, 3].map((s) => (
          <div 
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all border-4 ${
              s === step 
                ? 'bg-primary text-white border-primary-container scale-125 shadow-lg' 
                : s < step 
                  ? 'bg-emerald-500 text-white border-emerald-100' 
                  : 'bg-surface-container-high text-on-surface-variant border-surface'
            }`}
          >
            {s < step ? <CheckCircle2 size={20} /> : s}
          </div>
        ))}
      </div>

      <motion.div 
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl shadow-primary/5 border border-outline-variant"
      >
        {current.inputs}

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-outline-variant">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center gap-2 font-bold transition-all ${step === 1 ? 'opacity-0 cursor-default' : 'text-on-surface-variant hover:text-primary'}`}
          >
            <ChevronLeft size={20} /> Atrás
          </button>
          
          <button 
            onClick={step === 3 ? () => {} : nextStep}
            className="bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2"
          >
            {step === 3 ? 'Publicar Ahora' : 'Siguiente Paso'}
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>

      <p className="text-center mt-12 text-xs text-on-surface-variant font-medium max-w-md mx-auto italic">
        "Al publicar este libro, estás ahorrando la energía necesaria para encender una bombilla LED durante 4,000 horas."
      </p>
    </div>
  );
}
