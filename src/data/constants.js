// ─── Redes sociales ───
export const SOCIAL_LINKS = {
  github: "https://github.com/LuisSanchez851",
  linkedin: "https://www.linkedin.com/in/luis-s%C3%A1nchez-c-936b901b8/",
  email: "mailto:luisdev@example.com",
};

// ─── Tecnologías ───
export const TECHNOLOGIES = [
  { name: "HTML", icon: "/assets/img/html.png" },
  { name: "CSS", icon: "/assets/img/css.png" },
  { name: "JavaScript", icon: "/assets/img/javascript.png" },
  { name: "React", icon: "/assets/img/react2.png" },
  { name: "Python", icon: "/assets/img/piton.png" },
  { name: "MySQL", icon: "/assets/img/mysql.png" },
  { name: "Tailwind", icon: "/assets/img/tailwind.png" },
  { name: "Docker", icon: "/assets/img/docker.png" },
];

// ─── Proyectos destacados (home) ───
export const FEATURED_PROJECTS = [
  {
    slug: "base-datos-completa",
    titulo: "Base de datos completa",
    anio: "2025",
    descripcion:
      "Desarrollé por completo una base de datos desde la diagramación de tablas, relaciones, documentación de uso de MySQL, creación de Backend, creación de Frontend, autenticación de usuarios, operaciones CRUD, operaciones HTTP.",
    imagen: "/assets/img/imagen.jpeg",
  },
  {
    slug: "tester-integracion",
    titulo: "Tester e Integraciones a sistemas",
    anio: "2024",
    descripcion:
      "Descubrimiento de herramientas necesarias para el entorno de plataformas, investigación de requisitos, proceso de integración, pruebas en entornos de pruebas, simulando entornos productivos, documentación del proceso y resultados.",
    imagen: "/assets/img/ImagenRefeKoyag.png",
  },
  {
    slug: "automatizaciones-procesos",
    titulo: "Automatizaciones y procesos",
    anio: "2026",
    descripcion:
      "Diseño e implementación de soluciones de automatización para optimizar procesos operativos y administrativos. Automatización de tareas repetitivas, integración de sistemas y desarrollo de herramientas personalizadas para mejorar la eficiencia operativa.",
    imagen: "/assets/img/ImagenRefeKoyag.png",
  },
];

// ─── Todos los proyectos (página proyectos) ───
export const ALL_PROJECTS = [
  {
    nombre: "Sistema de Gestión Empresarial",
    descripcion:
      "Desarrollo fullstack para control de inventarios, ventas y clientes. Incluye autenticación, API REST y dashboards.",
    imagen: "/assets/img/imagen.jpeg",
    tecnologias: ["React", "Node.js", "MySQL", "Tailwind"],
    enlace: "https://github.com/",
  },
  {
    nombre: "Plataforma E-learning",
    descripcion:
      "Plataforma educativa con control de cursos, usuarios, pagos y backend escalable con Node y MongoDB.",
    imagen: "/assets/img/ImagenRefeKoyag.png",
    tecnologias: ["React", "MongoDB", "Express", "Docker"],
    enlace: "https://github.com/",
  },
  {
    nombre: "Web para agencia creativa",
    descripcion:
      "Sitio web responsive, rápido y accesible para una agencia de diseño. Animaciones con Framer Motion.",
    imagen: "/assets/img/imagen.jpeg",
    tecnologias: ["Next.js", "Tailwind", "Framer Motion"],
    enlace: "https://github.com/",
  },
];

// ─── Experiencia laboral ───
export const WORK_EXPERIENCE = [
  {
    id: 3,
    logo: "/assets/img/massylogo.png",
    empresa: "MASSY ENERGY Colombia",
    cargo: "Practicante de automatizaciones y procesos",
    periodo: "Enero - Actualidad",
    descripcion:
      "Desarrollo actividades de modelación de procesos, automatización de tareas repetitivas, soporte a usuarios y mantenimiento de sistemas de información.",
  },
  {
    id: 1,
    logo: "/assets/img/Logo-Brandstrat.webp",
    empresa: "Brandstrat",
    cargo: "Practicante de Tecnología",
    periodo: "Enero - Julio 2025",
    descripcion:
      "Apoyo al equipo de desarrollo en tareas de mantenimiento, automatización de procesos, pruebas de calidad y documentación de sistemas empresariales.",
  },
  {
    id: 2,
    logo: "/assets/img/Logo-Koyag.png",
    empresa: "Koyag",
    cargo: "Practicante de Tecnología",
    periodo: "Enero - Julio 2024",
    descripcion:
      "Implementación de integraciones con APIs, documentación de procesos, soporte técnico y pruebas funcionales dentro de entornos de staging.",
  },
];

// ─── Portafolio / logros ───
export const PORTFOLIO_ITEMS = [
  {
    fecha: "September 5, 2023",
    titulo: "Sistema de diseño para una plataforma educativa",
    descripcion:
      "Desarrollé un sistema de diseño y componentes para una plataforma educativa enfocada en la accesibilidad, escalabilidad y experiencia del usuario.",
  },
  {
    fecha: "July 22, 2023",
    titulo: "Desarrollo de animaciones web de alto rendimiento",
    descripcion:
      "Implementé animaciones fluidas para sitios web corporativos usando tecnologías como Framer Motion, logrando una mejora del 35% en la retención de usuarios.",
  },
  {
    fecha: "March 10, 2023",
    titulo: "Migración de backend a microservicios",
    descripcion:
      "Lideré la migración de un backend monolítico a arquitectura de microservicios en Node.js y Docker, mejorando la escalabilidad y el tiempo de respuesta.",
  },
];

// ─── Certificaciones ───
export const CERTIFICATIONS = [
  {
    id: 1,
    logo: "/assets/img/Logo-Uniempresarial.png",
    titulo: "Ingeniería de Software",
    proveedor: "Uniempresarial",
    fecha: "2026",
  },
  {
    id: 2,
    logo: "/assets/img/platzi-logo.png",
    titulo: "Certificación en React Developer",
    proveedor: "Platzi",
    fecha: "2023",
  },
  {
    id: 3,
    logo: "/assets/img/Logo-SENA.png",
    titulo: "Técnico en Mecatrónica",
    proveedor: "SENA",
    fecha: "2021",
  },
];

// ─── Blog posts ───
export const BLOG_POSTS = [
  {
    slug: "post-1",
    titulo: "Cómo estructurar tu portafolio como desarrollador",
    fecha: "Junio 20, 2025",
    descripcion:
      "Guía sobre cómo crear un portafolio que no solo muestre tus proyectos, sino también tu perfil profesional.",
    imagen: "/assets/img/imagen.jpeg",
  },
  {
    slug: "post-2",
    titulo: "10 recursos imprescindibles para frontend developers",
    fecha: "Mayo 14, 2025",
    descripcion:
      "Herramientas, sitios y librerías que te facilitan la vida como desarrollador frontend.",
    imagen: "/assets/img/ImagenRefeKoyag.png",
  },
  {
    slug: "post-3",
    titulo: "De monolitos a microservicios: experiencia real",
    fecha: "Abril 02, 2025",
    descripcion:
      "Cómo migré un backend monolítico a microservicios usando Node.js, Docker y otras tecnologías.",
    imagen: "/assets/img/imagen.jpeg",
  },
  {
    slug: "post-4",
    titulo: "Mejorando la productividad como developer",
    fecha: "Marzo 10, 2025",
    descripcion:
      "Técnicas, herramientas y hábitos que me han ayudado a ser más productivo en desarrollo.",
    imagen: "/assets/img/imagen.jpeg",
  },
  {
    slug: "post-5",
    titulo: "Guía completa de Tailwind CSS",
    fecha: "Febrero 18, 2025",
    descripcion:
      "Desde los fundamentos hasta componentes avanzados para dominar Tailwind CSS.",
    imagen: "/assets/img/imagen.jpeg",
  },
  {
    slug: "post-6",
    titulo: "API REST vs GraphQL: ¿cuál elegir?",
    fecha: "Enero 8, 2025",
    descripcion:
      "Ventajas y desventajas de cada uno. Cuándo usar REST, cuándo GraphQL y en qué casos combinarlos.",
    imagen: "/assets/img/imagen.jpeg",
  },
];

// ─── Detalle de proyectos (para páginas individuales) ───
export const PROJECT_DETAILS = {
  "base-datos-completa": {
    titulo: "Creación de base de datos desde cero",
    subtitulo:
      "Una guía completa para construir un portafolio profesional que te ayude a destacar en el mundo del desarrollo.",
    imagen: "/assets/img/imagen.jpeg",
    contenido: [
      {
        tipo: "parrafo",
        texto:
          "Un portafolio no es solo una galería de proyectos, sino una forma de contar quién eres como profesional. Aquí te comparto algunos puntos clave:",
      },
      { tipo: "titulo", texto: "1. Introducción Personal" },
      {
        tipo: "parrafo",
        texto:
          "Comienza hablando de quién eres, tus intereses, tu motivación por aprender y qué te llevó al mundo del desarrollo.",
      },
      { tipo: "titulo", texto: "2. Muestra tus proyectos" },
      {
        tipo: "parrafo",
        texto:
          "Elige entre 3 y 6 proyectos que reflejen tus habilidades. Para cada uno incluye:",
      },
      {
        tipo: "lista",
        items: [
          "Captura o video del proyecto",
          "Descripción breve",
          "Retos enfrentados y soluciones",
          "Stack tecnológico",
          "Enlace a GitHub o demo",
        ],
      },
      { tipo: "titulo", texto: "3. Destaca tus habilidades" },
      {
        tipo: "parrafo",
        texto:
          "Puedes incluir una sección de habilidades con logos, gráficos o simplemente texto sobre tecnologías que dominas.",
      },
      { tipo: "titulo", texto: "4. Información de contacto" },
      {
        tipo: "parrafo",
        texto:
          "Facilita que te contacten. Incluye tus redes, correo o un formulario.",
      },
      {
        tipo: "cita",
        texto:
          "👉 Recuerda: Un portafolio es un proyecto vivo. Actualízalo constantemente.",
      },
      { tipo: "parrafo", texto: "Espero que esta guía te sea de utilidad 🚀." },
    ],
  },
  "tester-integracion": {
    titulo: "Tester e Integraciones a sistemas",
    subtitulo:
      "Una guía completa para construir un portafolio profesional que te ayude a destacar en el mundo del desarrollo.",
    imagen: "/assets/img/ImagenRefeKoyag.png",
    contenido: [
      {
        tipo: "parrafo",
        texto:
          "Un portafolio no es solo una galería de proyectos, sino una forma de contar quién eres como profesional. Aquí te comparto algunos puntos clave:",
      },
      { tipo: "titulo", texto: "1. Introducción Personal" },
      {
        tipo: "parrafo",
        texto:
          "Comienza hablando de quién eres, tus intereses, tu motivación por aprender y qué te llevó al mundo del desarrollo.",
      },
      { tipo: "titulo", texto: "2. Muestra tus proyectos" },
      {
        tipo: "parrafo",
        texto:
          "Elige entre 3 y 6 proyectos que reflejen tus habilidades. Para cada uno incluye:",
      },
      {
        tipo: "lista",
        items: [
          "Captura o video del proyecto",
          "Descripción breve",
          "Retos enfrentados y soluciones",
          "Stack tecnológico",
          "Enlace a GitHub o demo",
        ],
      },
      { tipo: "titulo", texto: "3. Destaca tus habilidades" },
      {
        tipo: "parrafo",
        texto:
          "Puedes incluir una sección de habilidades con logos, gráficos o simplemente texto sobre tecnologías que dominas.",
      },
      { tipo: "titulo", texto: "4. Información de contacto" },
      {
        tipo: "parrafo",
        texto:
          "Facilita que te contacten. Incluye tus redes, correo o un formulario.",
      },
      {
        tipo: "cita",
        texto:
          "👉 Recuerda: Un portafolio es un proyecto vivo. Actualízalo constantemente.",
      },
      { tipo: "parrafo", texto: "Espero que esta guía te sea de utilidad 🚀." },
    ],
  },
};

// ─── Detalle de blog posts (para páginas individuales) ───
export const BLOG_POST_DETAILS = {
  "post-1": {
    titulo: "Cómo estructurar tu portafolio como desarrollador",
    fecha: "Publicado el 20 de junio, 2025",
    subtitulo:
      "Una guía completa para construir un portafolio profesional que te ayude a destacar en el mundo del desarrollo.",
    imagen: "/assets/img/imagen.jpeg",
    contenido: [
      {
        tipo: "parrafo",
        texto:
          "Un portafolio no es solo una galería de proyectos, sino una forma de contar quién eres como profesional. Aquí te comparto algunos puntos clave:",
      },
      { tipo: "titulo", texto: "1. Introducción Personal" },
      {
        tipo: "parrafo",
        texto:
          "Comienza hablando de quién eres, tus intereses, tu motivación por aprender y qué te llevó al mundo del desarrollo.",
      },
      { tipo: "titulo", texto: "2. Muestra tus proyectos" },
      {
        tipo: "parrafo",
        texto:
          "Elige entre 3 y 6 proyectos que reflejen tus habilidades. Para cada uno incluye:",
      },
      {
        tipo: "lista",
        items: [
          "Captura o video del proyecto",
          "Descripción breve",
          "Retos enfrentados y soluciones",
          "Stack tecnológico",
          "Enlace a GitHub o demo",
        ],
      },
      { tipo: "titulo", texto: "3. Destaca tus habilidades" },
      {
        tipo: "parrafo",
        texto:
          "Puedes incluir una sección de habilidades con logos, gráficos o simplemente texto sobre tecnologías que dominas.",
      },
      { tipo: "titulo", texto: "4. Información de contacto" },
      {
        tipo: "parrafo",
        texto:
          "Facilita que te contacten. Incluye tus redes, correo o un formulario.",
      },
      {
        tipo: "cita",
        texto:
          "👉 Recuerda: Un portafolio es un proyecto vivo. Actualízalo constantemente.",
      },
      { tipo: "parrafo", texto: "Espero que esta guía te sea de utilidad 🚀." },
    ],
  },
};

// ─── Galería personal (página sobre mí) ───
export const GALLERY_IMAGES = [
  "/assets/img/Avion-2.jpg",
  "/assets/img/paisaje-2.jpg",
  "/assets/img/ME-2.jpg",
  "/assets/img/Paisaje.jpg",
  "/assets/img/Mar.jpg",
  "/assets/img/Castillo.jpg",
];

// ─── Trayectoria ───
export const TIMELINE = [
  { fecha: "2021", evento: "Técnico en Mecatrónica - SENA" },
  { fecha: "2024", evento: "Practicante en Koyag - Integraciones y QA" },
  { fecha: "2025", evento: "Practicante en Brandstrat - Desarrollo" },
  {
    fecha: "2026",
    evento: "Practicante en MASSY ENERGY Colombia - Automatizaciones y procesos",
  },
  { fecha: "2026", evento: "Ingeniería de Software - Uniempresarial" },
];

// ─── Valores ───
export const VALUES = [
  {
    titulo: "Aprender Siempre",
    texto: "El aprendizaje constante es clave.",
  },
  {
    titulo: "Compromiso",
    texto: "Enfocado siempre en calidad e impacto.",
  },
  {
    titulo: "Compartir",
    texto: "El conocimiento es para todos.",
  },
];
