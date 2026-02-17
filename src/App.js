import React, { useState } from 'react';
import { 
  LuMessagesSquare, 
  LuCalendarClock, 
  LuFileText, 
  LuMenu, 
  LuX,
  LuSun,
  LuMoon,
  LuHouse,
  LuSettings,
  LuChevronLeft,
  LuChevronRight,
  LuGlobe,
  LuCheck,
  LuExternalLink,
  LuFilter,
  LuUser,
  LuCpu,
  LuDatabase,
  LuFileSpreadsheet,
  LuCode
} from 'react-icons/lu';
import { MdOutlineAnalytics } from 'react-icons/md';
import { RiUserStarLine } from 'react-icons/ri';

// Tus colores personalizados - versión más suave para tema claro
const COLORES = {
  verde: '#63ed12',
  morado: '#5a2290',
  celeste: '#11acd3',
  fondoOscuro: '#0a0a1a',
  fondoClaro: '#f8f9fa', // Cambiado a un gris muy claro
  grisOscuro: '#1a1a2e',
  grisClaro: '#f1f3f5', // Más suave
  grisBorde: '#e9ecef', // Color para bordes en tema claro
  // Colores más suaves para tema claro
  verdeClaro: '#4CAF50',
  moradoClaro: '#7B1FA2',  
  celesteClaro: '#0288D1',
  textoOscuro: '#212529',
  textoClaro: '#ffffff',
  textoGris: '#6c757d'
};

const proyectos = [
  {
    nombre: 'Chatbot Centro Informática',
    descripcion: 'Chatbot para consultas de estudiantes en el Centro de Informática USS.',
    enlace: 'https://chatcentroinformatica.vercel.app/',
    icono: LuMessagesSquare,
    categoria: 'Estudiantes',
    fecha: '2025'
  },
  {
    nombre: 'Monitoreo Docentes',
    descripcion: 'Monitorea el rendimiento y sesiones de los docentes.',
    enlace: 'https://monitorecinfo.vercel.app/',
    icono: MdOutlineAnalytics,
    categoria: 'Docentes',
    fecha: '2025'
  },
  {
    nombre: 'Registro Docentes',
    descripcion: 'Registra y gestiona perfiles de docentes en el sistema.',
    enlace: 'https://registros-docentes.vercel.app/',
    icono: RiUserStarLine,
    categoria: 'Docentes',
    fecha: '2025'
  },
  {
    nombre: 'Disponibilidad Docentes',
    descripcion: 'Gestiona la disponibilidad y horarios de los docentes.',
    enlace: 'https://centro-disponibilidad-docentes.vercel.app/',
    icono: LuCalendarClock,
    categoria: 'Docentes',
    fecha: '2025'
  },
  {
    nombre: 'Encuesta Estudiantes',
    descripcion: 'Sistema de encuestas para recoger opiniones y evaluaciones de los estudiantes.',
    enlace: 'https://encuesta-estudiantes.vercel.app/',
    icono: LuFileText,
    categoria: 'Estudiantes',
    fecha: '2025'
  }
];

function App() {
  const [panelAbierto, setPanelAbierto] = useState(true);
  const [menuAbiertoMobile, setMenuAbiertoMobile] = useState(false);
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');
  const [temaOscuro, setTemaOscuro] = useState(true);
  const [mostrarConfig, setMostrarConfig] = useState(false);
  const [idioma, setIdioma] = useState('es');

  const categorias = ['Todos', ...new Set(proyectos.map(p => p.categoria))];
  
  const proyectosFiltrados = categoriaFiltro === 'Todos' 
    ? proyectos 
    : proyectos.filter(p => p.categoria === categoriaFiltro);

  // Textos según idioma
  const textos = {
    es: {
      titulo: "Proyectos del Centro",
      subtitulo: "Selecciona un proyecto para abrirlo en Vercel",
      proyectosTotales: "Proyectos",
      proyectosCategoria: "Proyectos en",
      proyectos2025: "Proyectos 2025",
      abrirProyecto: "Ver proyecto",
      filtrarPor: "Filtrar por",
      navegacion: "Navegación",
      inicio: "Inicio",
      configuracion: "Configuración",
      tecnologias: "Tecnologías",
      usuario: "Usuario Centro de Informática",
      administrador: "Administrador",
      verTodosProyectos: "Ver todos los proyectos",
      filtros: "Filtros",
      configuracionTitulo: "Configuración",
      configuracionSubtitulo: "Personaliza tu experiencia",
      idioma: "Idioma",
      tema: "Tema",
      español: "Español",
      ingles: "Inglés",
      oscuro: "Oscuro",
      claro: "Claro",
      cerrar: "Cerrar",
      colapsar: "Colapsar panel",
      react: "React",
      firebase: "Firebase",
      googleSheets: "Google Sheets"
    },
    en: {
      titulo: "Center Projects",
      subtitulo: "Select a project to open it in Vercel",
      proyectosTotales: "Projects",
      proyectosCategoria: "Projects in",
      proyectos2025: "2025 Projects",
      abrirProyecto: "View project",
      filtrarPor: "Filter by",
      navegacion: "Navigation",
      inicio: "Home",
      configuracion: "Settings",
      tecnologias: "Technologies",
      usuario: "Computer Center User",
      administrador: "Administrator",
      verTodosProyectos: "View all projects",
      filtros: "Filters",
      configuracionTitulo: "Settings",
      configuracionSubtitulo: "Customize your experience",
      idioma: "Language",
      tema: "Theme",
      español: "Spanish",
      ingles: "English",
      oscuro: "Dark",
      claro: "Light",
      cerrar: "Close",
      colapsar: "Collapse panel",
      react: "React",
      firebase: "Firebase",
      googleSheets: "Google Sheets"
    }
  };

  const t = textos[idioma];

  // Función para obtener colores según el tema
  const getColor = (colorBase, opacity = 1) => {
    if (temaOscuro) {
      return colorBase;
    }
    // Para tema claro, usar versiones más suaves
    switch(colorBase) {
      case COLORES.verde: return COLORES.verdeClaro;
      case COLORES.morado: return COLORES.moradoClaro;
      case COLORES.celeste: return COLORES.celesteClaro;
      default: return colorBase;
    }
  };

  // Función para obtener color de texto según el tema
  const getTextColor = (tipo = 'primario') => {
    if (temaOscuro) {
      return tipo === 'primario' ? COLORES.textoClaro : '#a0aec0';
    } else {
      return tipo === 'primario' ? COLORES.textoOscuro : COLORES.textoGris;
    }
  };

  // Función para obtener color de fondo según el tema
  const getBgColor = (intensidad = 'normal') => {
    if (temaOscuro) {
      return intensidad === 'claro' ? COLORES.grisOscuro : COLORES.fondoOscuro;
    } else {
      return intensidad === 'claro' ? COLORES.grisClaro : COLORES.fondoClaro;
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ 
        backgroundColor: getBgColor('normal'),
        color: getTextColor('primario')
      }}
    >
      {/* Efectos de fondo sutiles */}
      <div 
        className="absolute top-10 -right-20 w-80 h-80 rounded-full opacity-5"
        style={{ backgroundColor: getColor(COLORES.celeste) }}
      ></div>
      <div 
        className="absolute bottom-10 -left-20 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: getColor(COLORES.verde) }}
      ></div>

      {/* Botón para abrir/cerrar panel en móvil */}
      <button
        onClick={() => setMenuAbiertoMobile(!menuAbiertoMobile)}
        className={`lg:hidden fixed top-6 left-6 z-50 p-3 rounded-lg text-white shadow-lg transition-all duration-300 hover:scale-110`}
        style={{ backgroundColor: getColor(COLORES.morado) }}
      >
        {menuAbiertoMobile ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      {/* Botón flotante para mostrar panel cuando está oculto en desktop */}
      {!panelAbierto && (
        <button
          onClick={() => setPanelAbierto(true)}
          className={`hidden lg:fixed lg:flex top-6 left-6 z-50 p-3 rounded-lg text-white shadow-lg transition-all duration-300 hover:scale-110`}
          style={{ backgroundColor: getColor(COLORES.morado) }}
        >
          <LuMenu size={24} />
        </button>
      )}

      {/* Overlay para cerrar menú de configuración */}
      {mostrarConfig && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setMostrarConfig(false)}
        />
      )}

      {/* Modal de configuración centrado */}
      {mostrarConfig && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div 
            className="w-full max-w-md rounded-xl shadow-2xl overflow-hidden"
            style={{
              backgroundColor: temaOscuro ? COLORES.grisOscuro : 'white',
              border: temaOscuro ? 'none' : `1px solid ${COLORES.grisBorde}`,
              boxShadow: temaOscuro ? 'none' : '0 10px 40px rgba(0,0,0,0.1)'
            }}
          >
            {/* Encabezado del modal */}
            <div 
              className="p-6"
              style={{ backgroundColor: getColor(COLORES.morado) }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/20">
                    <LuSettings size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {t.configuracionTitulo}
                    </h3>
                    <p className="text-sm text-white/80">
                      {t.configuracionSubtitulo}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMostrarConfig(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <LuX size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 space-y-6">
              {/* Configuración de Idioma */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${getColor(COLORES.celeste)}20` }}>
                    <LuGlobe size={20} style={{ color: getColor(COLORES.celeste) }} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${temaOscuro ? 'text-white' : 'text-gray-900'}`}>
                      {t.idioma}
                    </h4>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIdioma('es')}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${idioma === 'es' ? 'border-white scale-105' : 'border-transparent hover:border-gray-300'}`}
                    style={{
                      backgroundColor: idioma === 'es' ? getColor(COLORES.morado) : (temaOscuro ? '#2a2a3e' : '#f8f9fa'),
                      color: idioma === 'es' ? 'white' : getTextColor('primario'),
                      borderColor: temaOscuro ? 'transparent' : COLORES.grisBorde
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl">🇪🇸</span>
                      <span className="font-medium">{t.español}</span>
                      {idioma === 'es' && <LuCheck className="ml-2 text-white" />}
                    </div>
                  </button>

                  <button
                    onClick={() => setIdioma('en')}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${idioma === 'en' ? 'border-white scale-105' : 'border-transparent hover:border-gray-300'}`}
                    style={{
                      backgroundColor: idioma === 'en' ? getColor(COLORES.celeste) : (temaOscuro ? '#2a2a3e' : '#f8f9fa'),
                      color: idioma === 'en' ? 'white' : getTextColor('primario'),
                      borderColor: temaOscuro ? 'transparent' : COLORES.grisBorde
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl">🇺🇸</span>
                      <span className="font-medium">{t.ingles}</span>
                      {idioma === 'en' && <LuCheck className="ml-2 text-white" />}
                    </div>
                  </button>
                </div>
              </div>

              {/* Configuración de Tema */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${getColor(COLORES.verde)}20` }}>
                    {temaOscuro ? (
                      <LuMoon size={20} style={{ color: getColor(COLORES.verde) }} />
                    ) : (
                      <LuSun size={20} style={{ color: getColor(COLORES.verde) }} />
                    )}
                  </div>
                  <div>
                    <h4 className={`font-medium ${temaOscuro ? 'text-white' : 'text-gray-900'}`}>
                      {t.tema}
                    </h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTemaOscuro(false)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${!temaOscuro ? 'border-white scale-105' : 'border-transparent hover:border-gray-300'}`}
                    style={{
                      backgroundColor: !temaOscuro ? getColor(COLORES.verde) : (temaOscuro ? '#2a2a3e' : '#f8f9fa'),
                      color: !temaOscuro ? 'white' : getTextColor('primario'),
                      borderColor: temaOscuro ? 'transparent' : COLORES.grisBorde
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <LuSun size={20} />
                      <span className="font-medium">{t.claro}</span>
                      {!temaOscuro && <LuCheck className="ml-2 text-white" />}
                    </div>
                  </button>

                  <button
                    onClick={() => setTemaOscuro(true)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${temaOscuro ? 'border-white scale-105' : 'border-transparent hover:border-gray-300'}`}
                    style={{
                      backgroundColor: temaOscuro ? getColor(COLORES.morado) : (temaOscuro ? '#2a2a3e' : '#f8f9fa'),
                      color: temaOscuro ? 'white' : getTextColor('primario'),
                      borderColor: temaOscuro ? 'transparent' : COLORES.grisBorde
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <LuMoon size={20} />
                      <span className="font-medium">{t.oscuro}</span>
                      {temaOscuro && <LuCheck className="ml-2 text-white" />}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer del modal */}
            <div className="p-6 border-t" style={{ borderTopColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde }}>
              <button
                onClick={() => setMostrarConfig(false)}
                className="w-full py-3 rounded-lg font-medium text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: getColor(COLORES.celeste) }}
              >
                {t.cerrar}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex min-h-screen">
        {/* Panel Lateral Izquierdo - CON BORDES EN TEMA CLARO */}
        <aside 
          className={`
            ${menuAbiertoMobile ? 'translate-x-0' : '-translate-x-full'} 
            ${panelAbierto ? 'lg:translate-x-0 lg:w-72' : 'lg:w-16'}
            fixed lg:relative z-40
            h-screen
            transition-all duration-300 ease-in-out
            overflow-hidden
            border-r
          `}
          style={{
            backgroundColor: temaOscuro ? COLORES.grisOscuro : 'white',
            borderRightColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde,
            boxShadow: temaOscuro ? 'none' : '0 0 20px rgba(0,0,0,0.05)'
          }}
        >
          {/* Encabezado del Panel - CON BORDE */}
          <div className="p-4 border-b" style={{ 
            borderBottomColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde,
            minHeight: '60px'
          }}>
            {/* Botón para colapsar/expandir panel - CON BORDE EN TEMA CLARO */}
            <button
              onClick={() => setPanelAbierto(!panelAbierto)}
              className={`hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:scale-110 transition-transform ${!temaOscuro ? 'border' : ''}`}
              style={{ 
                backgroundColor: temaOscuro ? 'rgba(255,255,255,0.1)' : '#f8f9fa',
                color: getTextColor('secundario'),
                borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
              }}
            >
              {panelAbierto ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>
          </div>

          {/* Sección de Usuario - CON BORDE */}
          <div className="p-4 border-b" style={{ borderBottomColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde }}>
            <div className={`flex ${panelAbierto ? 'flex-col items-center text-center' : 'flex-col items-center justify-center'} p-3`}>
              {/* Icono del usuario arriba - CON BORDE EN TEMA CLARO */}
              <div 
                className={`flex items-center justify-center ${panelAbierto ? 'w-16 h-16 mb-4' : 'w-10 h-10'} rounded-full ${!temaOscuro ? 'border-2' : ''}`}
                style={{ 
                  backgroundColor: getColor(COLORES.celeste),
                  borderColor: !temaOscuro ? 'white' : 'transparent'
                }}
              >
                <LuUser size={panelAbierto ? 28 : 20} className="text-white" />
              </div>
              
              {/* Texto solo cuando el panel está expandido */}
              {panelAbierto && (
                <div className="flex-1 min-w-0 w-full">
                  <p className={`text-sm font-medium mb-1`} style={{ color: getTextColor('primario') }}>
                    {t.usuario}
                  </p>
                  <p className="text-xs" style={{ color: getColor(COLORES.verde) }}>
                    {t.administrador}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Menú de Navegación - CON BORDES EN BOTONES */}
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    setMenuAbiertoMobile(false);
                    setCategoriaFiltro('Todos');
                  }}
                  className={`w-full flex items-center ${panelAbierto ? 'justify-start gap-3 px-3' : 'justify-center'} p-3 rounded-lg transition-all duration-300 hover:scale-105 ${!temaOscuro ? 'border hover:shadow-sm' : ''}`}
                  style={{
                    backgroundColor: categoriaFiltro === 'Todos' ? 
                      `${getColor(COLORES.morado)}${temaOscuro ? '10' : '08'}` : 'transparent',
                    color: getTextColor('primario'),
                    borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                  }}
                >
                  <LuHouse size={20} style={{ color: categoriaFiltro === 'Todos' ? getColor(COLORES.morado) : getColor(COLORES.celeste) }} />
                  {panelAbierto && (
                    <span className="font-medium" style={{ color: categoriaFiltro === 'Todos' ? getColor(COLORES.morado) : getTextColor('primario') }}>
                      {t.inicio}
                    </span>
                  )}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => setMostrarConfig(true)}
                  className={`w-full flex items-center ${panelAbierto ? 'justify-start gap-3 px-3' : 'justify-center'} p-3 rounded-lg transition-all duration-300 hover:scale-105 ${!temaOscuro ? 'border hover:shadow-sm' : ''}`}
                  style={{
                    backgroundColor: temaOscuro ? 'transparent' : '#f8f9fa',
                    color: getTextColor('primario'),
                    borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                  }}
                >
                  <LuSettings size={20} style={{ color: getColor(COLORES.celeste) }} />
                  {panelAbierto && (
                    <span className="font-medium" style={{ color: getTextColor('primario') }}>
                      {t.configuracion}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </nav>

          {/* Sección de Tecnologías - CON BORDES */}
          {panelAbierto && (
            <div className="p-4 border-t" style={{ borderTopColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde }}>
              <div className="flex items-center gap-2 mb-3">
                <LuCpu size={16} style={{ color: getColor(COLORES.verde) }} />
                <span className="text-sm font-medium" style={{ color: getTextColor('primario') }}>
                  {t.tecnologias}
                </span>
              </div>
              <div className="space-y-2">
                {/* React */}
                <div 
                  className={`flex items-center gap-2 p-2 rounded-lg ${!temaOscuro ? 'border' : ''}`}
                  style={{ 
                    backgroundColor: temaOscuro ? '#2a2a3e' : '#f8f9fa',
                    borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                  }}
                >
                  <div className="p-2 rounded" style={{ backgroundColor: `${getColor(COLORES.celeste)}15` }}>
                    <LuCode size={16} style={{ color: getColor(COLORES.celeste) }} />
                  </div>
                  {panelAbierto && (
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: getTextColor('primario') }}>{t.react}</p>
                      <p className="text-xs truncate" style={{ color: getColor(COLORES.celeste) }}>Frontend</p>
                    </div>
                  )}
                </div>

                {/* Firebase */}
                <div 
                  className={`flex items-center gap-2 p-2 rounded-lg ${!temaOscuro ? 'border' : ''}`}
                  style={{ 
                    backgroundColor: temaOscuro ? '#2a2a3e' : '#f8f9fa',
                    borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                  }}
                >
                  <div className="p-2 rounded" style={{ backgroundColor: `${getColor(COLORES.verde)}15` }}>
                    <LuDatabase size={16} style={{ color: getColor(COLORES.verde) }} />
                  </div>
                  {panelAbierto && (
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: getTextColor('primario') }}>{t.firebase}</p>
                      <p className="text-xs truncate" style={{ color: getColor(COLORES.verde) }}>Backend & Auth</p>
                    </div>
                  )}
                </div>

                {/* Google Sheets */}
                <div 
                  className={`flex items-center gap-2 p-2 rounded-lg ${!temaOscuro ? 'border' : ''}`}
                  style={{ 
                    backgroundColor: temaOscuro ? '#2a2a3e' : '#f8f9fa',
                    borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                  }}
                >
                  <div className="p-2 rounded" style={{ backgroundColor: `${getColor(COLORES.morado)}15` }}>
                    <LuFileSpreadsheet size={16} style={{ color: getColor(COLORES.morado) }} />
                  </div>
                  {panelAbierto && (
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: getTextColor('primario') }}>{t.googleSheets}</p>
                      <p className="text-xs truncate" style={{ color: getColor(COLORES.morado) }}>Base de datos</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Filtros por Categoría - CON BORDES */}
          {panelAbierto && (
            <div className="p-4 border-t" style={{ borderTopColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde }}>
              <div className="flex items-center gap-2 mb-3">
                <LuFilter size={16} style={{ color: getColor(COLORES.celeste) }} />
                <span className="text-sm font-medium" style={{ color: getTextColor('primario') }}>
                  {t.filtros}
                </span>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setCategoriaFiltro('Todos')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 ${categoriaFiltro === 'Todos' ? 'font-medium' : 'opacity-75 hover:opacity-100'} ${!temaOscuro ? 'border' : ''}`}
                  style={{
                    backgroundColor: categoriaFiltro === 'Todos' ? getColor(COLORES.celeste) : (temaOscuro ? 'transparent' : '#f8f9fa'),
                    color: categoriaFiltro === 'Todos' ? 'white' : getTextColor('primario'),
                    borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                  }}
                >
                  {t.verTodosProyectos}
                </button>
                {categorias.slice(1).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaFiltro(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 ${categoriaFiltro === cat ? 'font-medium' : 'opacity-75 hover:opacity-100'} ${!temaOscuro ? 'border' : ''}`}
                    style={{
                      backgroundColor: categoriaFiltro === cat ? 
                        (cat === 'Estudiantes' ? getColor(COLORES.verde) : getColor(COLORES.morado)) : 
                        (temaOscuro ? 'transparent' : '#f8f9fa'),
                      color: categoriaFiltro === cat ? 'white' : getTextColor('primario'),
                      borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Botón para expandir cuando está colapsado */}
          {!panelAbierto && (
            <button
              onClick={() => setPanelAbierto(true)}
              className="absolute bottom-6 right-6 p-2 rounded-lg hover:scale-110 transition-transform"
              style={{ 
                backgroundColor: getColor(COLORES.morado),
                border: !temaOscuro ? '2px solid white' : 'none'
              }}
            >
              <LuChevronRight size={20} className="text-white" />
            </button>
          )}
        </aside>

        {/* Overlay para móvil */}
        {menuAbiertoMobile && (
          <div 
            className="fixed inset-0 bg-black/50 lg:hidden z-30"
            onClick={() => setMenuAbiertoMobile(false)}
          />
        )}

        {/* Contenido Principal - CON BORDES EN TEMA CLARO */}
        <main className="flex-1 overflow-auto" style={{ backgroundColor: getBgColor('claro') }}>
          {/* Header principal - CON BORDE */}
          <div 
            className="sticky top-0 z-10 p-4 lg:p-6 border-b"
            style={{
              backgroundColor: temaOscuro ? COLORES.grisOscuro : 'white',
              borderBottomColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde,
              backdropFilter: 'blur(10px)',
              boxShadow: temaOscuro ? 'none' : '0 2px 10px rgba(0,0,0,0.05)'
            }}
          >
            <div className="w-full px-4 lg:px-8">
              <div>
                <h1 
                  className="text-xl lg:text-2xl font-bold"
                  style={{ color: getColor(COLORES.morado) }}
                >
                  {t.titulo}
                </h1>
                <p className="text-sm" style={{ color: getTextColor('secundario') }}>
                  {t.subtitulo}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:p-8 w-full">
            {/* Contador simple de proyectos */}
            <div className="mb-8 px-4 lg:px-8">
              <p className="text-sm" style={{ color: getTextColor('secundario') }}>
                Mostrando <span className="font-bold" style={{ color: getColor(COLORES.celeste) }}>{proyectosFiltrados.length}</span> de <span className="font-bold" style={{ color: getColor(COLORES.morado) }}>{proyectos.length}</span> proyectos
                {categoriaFiltro !== 'Todos' && (
                  <span> en <span className="font-bold" style={{ 
                    color: categoriaFiltro === 'Estudiantes' ? getColor(COLORES.verde) : getColor(COLORES.morado) 
                  }}>{categoriaFiltro}</span></span>
                )}
              </p>
            </div>

            {/* Filtros Mobile - CON BORDES */}
            <div className="lg:hidden mb-6 px-4">
              <div className="flex flex-wrap gap-2">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaFiltro(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${categoriaFiltro === cat ? 'text-white' : ''}`}
                    style={{
                      backgroundColor: categoriaFiltro === cat 
                        ? (cat === 'Estudiantes' ? getColor(COLORES.verde) : cat === 'Todos' ? getColor(COLORES.celeste) : getColor(COLORES.morado))
                        : (temaOscuro ? '#2a2a3e' : 'white'),
                      color: categoriaFiltro === cat ? 'white' : getTextColor('primario'),
                      borderColor: !temaOscuro && categoriaFiltro !== cat ? COLORES.grisBorde : 'transparent',
                      boxShadow: !temaOscuro && categoriaFiltro !== cat ? '0 1px 3px rgba(0,0,0,0.05)' : 'none'
                    }}
                  >
                    {cat === 'Todos' ? t.verTodosProyectos : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de proyectos - CON BORDES EN TEMA CLARO */}
            <div className="px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proyectosFiltrados.map((proyecto, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${!temaOscuro ? 'shadow-sm' : ''}`}
                    style={{
                      backgroundColor: temaOscuro ? COLORES.grisOscuro : 'white',
                      borderColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde,
                      boxShadow: temaOscuro ? 'none' : '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                  >
                    {/* Header de la tarjeta */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${getColor(COLORES.celeste)}15` }}
                        >
                          <proyecto.icono size={24} style={{ color: getColor(COLORES.celeste) }} />
                        </div>
                        <span 
                          className={`px-3 py-1 rounded-full text-xs font-medium ${!temaOscuro ? 'border' : ''}`}
                          style={{ 
                            backgroundColor: proyecto.categoria === 'Estudiantes' ? `${getColor(COLORES.verde)}15` : `${getColor(COLORES.morado)}15`,
                            color: proyecto.categoria === 'Estudiantes' ? getColor(COLORES.verde) : getColor(COLORES.morado),
                            borderColor: proyecto.categoria === 'Estudiantes' ? getColor(COLORES.verde) : getColor(COLORES.morado)
                          }}
                        >
                          {proyecto.categoria}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2" style={{ color: getTextColor('primario') }}>
                        {proyecto.nombre}
                      </h3>
                      
                      <p className="text-sm mb-4" style={{ color: getTextColor('secundario') }}>
                        {proyecto.descripcion}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1" style={{ color: getTextColor('secundario') }}>
                          <LuCalendarClock size={14} style={{ color: getColor(COLORES.verde) }} />
                          {proyecto.fecha}
                        </span>
                        <a
                          href={proyecto.enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 font-medium transition-all duration-300 hover:gap-2 ${!temaOscuro ? 'px-3 py-1 rounded-lg hover:bg-gray-50' : ''}`}
                          style={{ color: getColor(COLORES.verde) }}
                        >
                          {t.abrirProyecto}
                          <LuExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                    
                    {/* Efecto hover */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                      style={{ backgroundColor: getColor(COLORES.celeste) }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer informativo simple - CON BORDE */}
            <div className="mt-12 pt-8 border-t px-4 lg:px-8" style={{ borderTopColor: temaOscuro ? '#3a3a4e' : COLORES.grisBorde }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm" style={{ color: getTextColor('secundario') }}>
                    {proyectos.length} proyectos disponibles • Año 2025
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border" style={{ 
                      backgroundColor: getColor(COLORES.verde),
                      borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                    }}></div>
                    <span className="text-sm" style={{ color: getTextColor('secundario') }}>Estudiantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border" style={{ 
                      backgroundColor: getColor(COLORES.morado),
                      borderColor: !temaOscuro ? COLORES.grisBorde : 'transparent'
                    }}></div>
                    <span className="text-sm" style={{ color: getTextColor('secundario') }}>Docentes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
