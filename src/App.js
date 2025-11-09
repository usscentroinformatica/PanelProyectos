import React from 'react';
import { LuMessagesSquare, LuCalendarClock } from 'react-icons/lu';
import { MdOutlineAnalytics } from 'react-icons/md';
import { RiUserStarLine } from 'react-icons/ri';

const proyectos = [
  {
    nombre: 'Chatbot Centro Informática',
    descripcion: 'Chatbot para consultas de estudiantes en el Centro de Informática USS.',
    enlace: 'https://chatcentroinformatica.vercel.app/',
    icono: LuMessagesSquare
  },
  {
    nombre: 'Monitoreo Docentes',
    descripcion: 'Monitorea el rendimiento y sesiones de los docentes.',
    enlace: 'https://monitorecinfo.vercel.app/',
    icono: MdOutlineAnalytics
  },
  {
    nombre: 'Registro Docentes',
    descripcion: 'Registra y gestiona perfiles de docentes en el sistema.',
    enlace: 'https://registro-docentes.vercel.app/',
    icono: RiUserStarLine
  },
  {
    nombre: 'Disponibilidad Docentes',
    descripcion: 'Gestiona la disponibilidad y horarios de los docentes.',
    enlace: 'https://centro-disponibilidad-docentes.vercel.app/',
    icono: LuCalendarClock
  }
];

function App() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-[#0a0015] via-[#1a0b2e] to-[#16213e] relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-purple-500 drop-shadow-2xl tracking-tight mb-2">
            Mis Proyectos
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-green-400 to-purple-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg mt-4">
            Selecciona un proyecto para abrirlo en Vercel.  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 font-semibold mt-2">
              Centro de Informática USS
            </span>
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {proyectos.map((proyecto, index) => (
            <a
              key={index}
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl p-8 
                         bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 
                         backdrop-blur-xl 
                         border border-purple-500/20 
                         shadow-[0_8px_30px_rgba(139,92,246,0.15)] 
                         hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] 
                         hover:border-purple-400/50
                         transition-all duration-500 
                         transform hover:-translate-y-4 hover:scale-105
                         overflow-hidden"
            >
              {/* Borde animado */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/30 via-purple-500/30 to-green-400/30"></div>
              </div>
              
              {/* Icono con efecto 3D */}
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center 
                           bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-purple-600/20 
                           border border-green-400/30
                           shadow-[0_0_30px_rgba(74,222,128,0.3)] 
                           group-hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] 
                           group-hover:scale-110
                           transition-all duration-700">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/10 to-purple-500/10 blur-xl"></div>
                <proyecto.icono size={48} className="relative z-10 text-green-400 drop-shadow-lg group-hover:text-purple-400 transition-colors duration-500" />
              </div>
              
              {/* Texto */}
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-purple-400 text-center mb-3 drop-shadow-md group-hover:from-green-400 group-hover:to-purple-500 transition-all duration-500">
                {proyecto.nombre}
              </h3>
              <p className="text-gray-300 text-sm text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {proyecto.descripcion}
              </p>
              
              {/* Glow decorativo mejorado */}
              <div className="absolute -inset-2 rounded-3xl opacity-0 
                              group-hover:opacity-100 
                              transition-opacity duration-700 
                              bg-gradient-to-br from-green-500/20 via-purple-500/20 to-emerald-500/20 
                              blur-2xl -z-10"></div>
              
              {/* Partículas decorativas */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
