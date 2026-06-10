import type { Project } from '../../types/portfolio';

export const projectsData: Project[] = [
  {
    title: "E-Commerce Premium Concept",
    description: "Una plataforma de comercio electrónico minimalista y fluida con animaciones de transición de página optimizadas, pasarela de pago ficticia y filtrado instantáneo.",
    tags: ["React", "Astro", "Tailwind CSS", "Zustand"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/cris-dev/ecommerce-premium"
  },
  {
    title: "AI Chat Assistant Dashboard",
    description: "Interfaz de chat inteligente interactiva con soporte para renderizado de Markdown, resaltado de sintaxis de código, y gestión avanzada de hilos de conversación.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "OpenAI API"],
    link: "https://example.com/ai-chat",
    github: "https://github.com/cris-dev/ai-chat-dashboard"
  },
  {
    title: "Developer Portfolio Boilerplate",
    description: "Plantilla base de portafolio ultra optimizada construida con Astro, aplicando arquitectura orientada a módulos y adaptada para obtener 100/100 en Lighthouse.",
    tags: ["Astro", "TypeScript", "Tailwind CSS", "Lighthouse"],
    link: "https://example.com/portfolio-template",
    github: "https://github.com/cris-dev/astro-modular-portfolio"
  }
];
