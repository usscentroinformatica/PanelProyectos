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
    enlace: 'https://centroinformaticamonitoreo-docente.vercel.app/',
    icono: MdOutlineAnalytics
  },
  {
    nombre: 'Registro Docentes',
    descripcion: 'Registra y gestiona perfiles de docentes en el sistema.',
    enlace: 'https://centro-informatica-docentes.vercel.app/',
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
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight">
            Mis Proyectos
          </h1>
          <p className="text-blue-100 text-lg mt-4">
            Selecciona un proyecto para abrirlo en Vercel.  
            <span className="block text-blue-300">Centro de Informática USS</span>
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {proyectos.map((proyecto, index) => (
            <a
              key={index}
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-8 
                         bg-white/10 backdrop-blur-xl 
                         border border-white/20 
                         shadow-[0_8px_30px_rgb(0,0,0,0.3)] 
                         hover:shadow-[0_15px_40px_rgb(0,0,0,0.6)] 
                         transition-all duration-500 
                         transform hover:-translate-y-3 hover:scale-105"
            >
              {/* Icono con efecto 3D */}
              <div
                className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center 
                           bg-gradient-to-br from-[#1e3c72] to-[#2a5298] 
                           shadow-lg group-hover:shadow-2xl 
                           transform group-hover:rotate-3d 
                           transition-transform duration-700"
              >
                <proyecto.icono size={48} className="text-white drop-shadow-lg" />
              </div>

              {/* Texto */}
              <h3 className="text-2xl font-bold text-white text-center mb-3 drop-shadow-md">
                {proyecto.nombre}
              </h3>
              <p className="text-gray-200 text-sm text-center leading-relaxed">
                {proyecto.descripcion}
              </p>

              {/* Glow decorativo */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
                              group-hover:opacity-100 
                              transition duration-700 
                              bg-gradient-to-br from-blue-400/20 to-transparent blur-2xl"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
