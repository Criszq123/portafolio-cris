# Portafolio de Cristofher 🚀

Este es el repositorio del portafolio profesional de Cristofher, construido de forma ultra-optimizada utilizando **Astro**, **Tailwind CSS** y **TypeScript** con una arquitectura modular y orientada a componentes.

---

## 🛠️ Tecnologías y Características
- **Astro (v4)**: Framework web diseñado para la velocidad, utilizando la arquitectura de islas para enviar cero JS al cliente por defecto.
- **Tailwind CSS**: Estilizado mediante clases utilitarias modernas, con soporte para animaciones premium y diseño responsivo.
- **TypeScript**: Tipado estático para garantizar la robustez del código y autocompletado avanzado.
- **Content Collections**: Gestión de datos tipados y validados (como la sección de Experiencia) mediante esquemas de Zod en Astro.
- **Arquitectura Modular**: Estructuración del proyecto por características (módulos), facilitando el mantenimiento y escalabilidad.

---

## 📁 Estructura del Proyecto

```text
├── src/
│   ├── content/               # Colecciones de datos (Astro Content Collections)
│   │   ├── experience/
│   │   │   └── list.json      # Archivo JSON con las experiencias laborales
│   │   └── config.ts          # Validación de esquemas de colecciones (Zod)
│   ├── layouts/               # Plantillas base (Layout.astro)
│   ├── modules/               # Componentes agrupados por secciones (módulos)
│   │   ├── contact/           # Componente de Contacto
│   │   ├── experience/        # Componentes y tarjetas de Experiencia
│   │   ├── hero/              # Sección de bienvenida y Hero
│   │   └── projects/          # Sección y datos de Proyectos
│   ├── pages/                 # Rutas del sitio (index.astro)
│   └── types/                 # Definición de interfaces de TypeScript
├── package.json               # Dependencias y scripts del proyecto
└── tailwind.config.mjs        # Configuración de Tailwind CSS
```

---

## 💼 Cómo Agregar o Modificar Experiencias

La sección de **Experiencia Profesional** está gestionada de forma dinámica usando las **Content Collections** de Astro. Todos los datos se almacenan en un único archivo estructurado en formato JSON y son validados de forma automática.

Sigue estos pasos para añadir una nueva experiencia:

### Paso 1: Abrir el archivo de datos
Dirígete al archivo:
`src/content/experience/list.json`

### Paso 2: Estructura del objeto de experiencia
Cada experiencia laboral en la lista es un objeto JSON que debe cumplir con el siguiente esquema:

| Campo | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `role` | `string` | Nombre del puesto o cargo desempeñado. | `"Junior Front-End Developer"` |
| `company` | `string` | Nombre de la empresa, ubicación y modalidad de trabajo. | `"Win2Tec · Campeche, MX (Híbrido)"` |
| `period` | `string` | Período de tiempo en el que trabajaste. | `"Ene 2026 - May 2026"` |
| `description` | `string` | Resumen de responsabilidades, logros o tecnologías utilizadas. | `"Desarrollo de características para el GMS..."` |
| `tags` | `string[]` | Lista de tecnologías, metodologías o habilidades destacadas. | `["React.js", "Vue.js", "TypeScript"]` |

### Paso 3: Añadir la experiencia al arreglo
Abre [list.json](file:///c:/Users/crist/Desktop/portafolio-cris/src/content/experience/list.json) y agrega un nuevo objeto al principio (o al final) del arreglo `experiences`.

*Nota: Generalmente se añaden en orden cronológico inverso (el trabajo más reciente primero).*

**Ejemplo de cómo añadir una experiencia:**

```json
{
  "experiences": [
    {
      "role": "Tu Nuevo Puesto",
      "company": "Nombre de la Empresa · Ubicación (Modalidad)",
      "period": "Mes Año - Mes Año",
      "description": "Una breve descripción detallada de tus logros, tareas y el impacto que generaste en la empresa.",
      "tags": [
        "Tecnología 1",
        "Tecnología 2",
        "Habilidad"
      ]
    },
    // ... tus otras experiencias existentes
  ]
}
```

### Paso 4: Validación del esquema
Astro valida automáticamente que los datos cumplan con las reglas definidas en [config.ts](file:///c:/Users/crist/Desktop/portafolio-cris/src/content/config.ts). Si accidentalmente omites algún campo requerido o pones un tipo de dato incorrecto (como un número en lugar de un tag de texto), Astro te mostrará un error en la consola al compilar o al correr el servidor de desarrollo.

---

## 🎨 Cómo Agregar o Modificar Proyectos (Adicional)

Actualmente, los proyectos se definen en el archivo de TypeScript:
[projectsData.ts](file:///c:/Users/crist/Desktop/portafolio-cris/src/modules/projects/projectsData.ts)

Si quieres agregar un nuevo proyecto, sigue estos pasos:

1. Abre [projectsData.ts](file:///c:/Users/crist/Desktop/portafolio-cris/src/modules/projects/projectsData.ts).
2. Agrega un nuevo objeto al arreglo `projectsData` siguiendo la estructura:

```typescript
{
  title: "Nombre del Proyecto",
  description: "Descripción breve del proyecto, características y propósito.",
  tags: ["Astro", "Tailwind CSS", "TypeScript"],
  link: "https://url-del-proyecto-en-vivo.com", // Enlace opcional a la demo
  github: "https://github.com/tu-usuario/nombre-del-repo" // Enlace opcional a GitHub
}
```

---

## 🚀 Comandos Útiles

El proyecto utiliza `pnpm` para la gestión de paquetes. Aquí tienes los comandos más comunes:

- **Instalar dependencias**:
  ```bash
  pnpm install
  ```
- **Iniciar el servidor de desarrollo** (se abrirá en `http://localhost:4321`):
  ```bash
  pnpm run dev
  ```
- **Construir el portafolio para producción**:
  ```bash
  pnpm run build
  ```
- **Previsualizar la build de producción localmente**:
  ```bash
  pnpm run preview
  ```
- **Chequear tipos y estructura de Astro**:
  ```bash
  pnpm run astro check
  ```
