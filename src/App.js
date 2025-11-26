import React from 'react';
import { LuMessagesSquare, LuCalendarClock, LuFileText } from 'react-icons/lu';
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
  },
  {
    nombre: 'Encuesta Estudiantes',
    descripcion: 'Sistema de encuestas para recoger opiniones y evaluaciones de los estudiantes.',
    enlace: 'https://encuesta-estudiantes.vercel.app/',
    icono: LuFileText   // Ícono de formulario/encuesta
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
            Proyectos
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
                         bg-[#1a1a2e]
                         border-2 border-purple-500/30
                         shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                         hover:shadow-[0_20px_60px_rgba(139,92,246,0.5)]
                         hover:border-purple-400
                         transition-all duration-500
                         transform hover:-translate-y-4 hover:scale-105
                         overflow-hidden"
            >
              {/* Borde sólido brillante en hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-green-400"></div>
              </div>
             
              {/* Icono con fondo sólido */}
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center
                           bg-purple-600
                           group-hover:bg-green-500
                           shadow-[0_10px_40px_rgba(139,92,246,0.6)]
                           group-hover:shadow-[0_10px_40px_rgba(74,222,128,0.8)]
                           group-hover:scale-110
                           transition-all duration-500">
                <proyecto.icono size={48} className="text-white drop-shadow-2xl" />
              </div>
             
              {/* Texto */}
              <h3 className="text-2xl font-bold text-white text-center mb-3 drop-shadow-md group-hover:text-green-400 transition-all duration-300">
                {proyecto.nombre}
              </h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {proyecto.descripcion}
              </p>
             
              {/* Glow decorativo sólido */}
              <div className="absolute -inset-1 rounded-3xl opacity-0
                              group-hover:opacity-100
                              transition-opacity duration-500
                              bg-green-500/30
                              blur-xl -z-10"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
