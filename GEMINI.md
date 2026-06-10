# Guía de Desarrollo para Agentes y Desarrolladores (GEMINI.md)

Este repositorio contiene un generador de currículum vitae (CV) interactivo, minimalista y optimizado para impresión física o exportación a PDF. Soporta multiidioma, con español (**ES**) como idioma predeterminado e inglés (**EN**) como opción secundaria, estructurado en base al esquema estandarizado **JSON Resume**.

---

## 🚀 Tecnologías Principales

- **Framework:** [Astro 4](file:///D:/code/resume-es/astro.config.mjs) (utilizando TypeScript y arquitectura orientada a islas/componentes).
- **Estilos:** Vanilla CSS nativo (sin TailwindCSS). El diseño se enfoca en la legibilidad, diseño responsivo y optimización de impresión.
- **Interactividad:** [ninja-keys](https://github.com/kgajera/ninja-keys) para un panel de comandos flotante accesible mediante teclado (`Ctrl + K` o `Cmd + K`).

---

## 📂 Estructura del Proyecto

A continuación se detalla la organización de los archivos en el espacio de trabajo:

- 📂 **Raíz:**
  - 📄 [package.json](file:///D:/code/resume-es/package.json) - Define dependencias del proyecto, scripts de Astro (`dev`, `build`, `preview`) y versión del proyecto.
  - 📄 [astro.config.mjs](file:///D:/code/resume-es/astro.config.mjs) - Configuración del sitio web de Astro, incluyendo la URL base (`/resume-es`) para el despliegue.
  - 📄 [tsconfig.json](file:///D:/code/resume-es/tsconfig.json) - Configura TypeScript y define alias de rutas como `@/*`, `@cv-es` y `@cv-en`.
  - 📄 [cv-es.json](file:///D:/code/resume-es/cv-es.json) - Fuente de datos del currículum estructurada en JSON para la versión en **Español**.
  - 📄 [cv-en.json](file:///D:/code/resume-es/cv-en.json) - Fuente de datos del currículum estructurada en JSON para la versión en **Inglés**.
- 📂 **[.github/workflows/](file:///D:/code/resume-es/.github/workflows/)**
  - 📄 [deploy.yml](file:///D:/code/resume-es/.github/workflows/deploy.yml) - Workflow de GitHub Actions para desplegar automáticamente el sitio en GitHub Pages tras cada commit en `main`.
- 📂 **[src/](file:///D:/code/resume-es/src/)**
  - 📂 **[i18n/](file:///D:/code/resume-es/src/i18n/)**
    - 📄 [utils.ts](file:///D:/code/resume-es/src/i18n/utils.ts) - Define el diccionario de traducciones de UI e interactividad para `es` y `en`.
  - 📂 **[layouts/](file:///D:/code/resume-es/src/layouts/)**
    - 📄 [Layout.astro](file:///D:/code/resume-es/src/layouts/Layout.astro) - Plantilla base que configura la tipografía monoespaciada global, reseteos CSS y reglas `@media print`.
  - 📂 **[pages/](file:///D:/code/resume-es/src/pages/)**
    - 📄 [index.astro](file:///D:/code/resume-es/src/pages/index.astro) - Página principal en español (ES) accesible en `/`.
    - 📂 **[en/](file:///D:/code/resume-es/src/pages/en/)**
      - 📄 [index.astro](file:///D:/code/resume-es/src/pages/en/index.astro) - Página secundaria en inglés (EN) accesible en `/en/`.
  - 📂 **[components/](file:///D:/code/resume-es/src/components/)**
    - 📄 [Section.astro](file:///D:/code/resume-es/src/components/Section.astro) - Contenedor genérico utilizado para estructurar de forma consistente las diferentes secciones del CV.
    - 📄 [KeyboardManager.astro](file:///D:/code/resume-es/src/components/KeyboardManager.astro) - Administra la paleta de comandos interactiva de Ninja Keys para acciones rápidas.
    - 📂 **[sections/](file:///D:/code/resume-es/src/components/sections/)**
      - 📄 [Hero.astro](file:///D:/code/resume-es/src/components/sections/Hero.astro) - Cabecera con datos de contacto, foto de perfil y enlaces.
      - 📄 [About.astro](file:///D:/code/resume-es/src/components/sections/About.astro) - Resumen profesional (perfil).
      - 📄 [Experience.astro](file:///D:/code/resume-es/src/components/sections/Experience.astro) - Lista de trabajos y responsabilidades.
      - 📄 [Education.astro](file:///D:/code/resume-es/src/components/sections/Education.astro) - Historial educativo e instituciones.
      - 📄 [Skills.astro](file:///D:/code/resume-es/src/components/sections/Skills.astro) - Habilidades técnicas y profesionales.
      - 📄 [Projects.astro](file:///D:/code/resume-es/src/components/sections/Projects.astro) - Proyectos destacados y producciones.
  - 📂 **[icons/](file:///D:/code/resume-es/src/icons/)** - Componentes Astro que contienen vectores SVG inline para redes sociales y contactos.
- 📂 **[public/](file:///D:/code/resume-es/public/)** - Archivos estáticos como `favicon.svg`, la foto personal `me.webp` y capturas de proyectos en la subcarpeta `projects/`.

---

## 🛠️ Comandos de Desarrollo

Ejecuta los siguientes comandos desde la terminal en el directorio raíz del proyecto:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (Hot Reload)
npm run dev

# Validar TypeScript y compilar el proyecto para producción
npm run build

# Previsualizar el sitio compilado localmente
npm run preview
```

---

## 🗺️ Alias de Rutas y Configuración

El proyecto emplea alias configurados en [tsconfig.json](file:///D:/code/resume-es/tsconfig.json):
- `@cv-es` -> Apunta directamente a [cv-es.json](file:///D:/code/resume-es/cv-es.json).
- `@cv-en` -> Apunta directamente a [cv-en.json](file:///D:/code/resume-es/cv-en.json).
- `@/*` -> Apunta a la carpeta [src/](file:///D:/code/resume-es/src/).

En [astro.config.mjs](file:///D:/code/resume-es/astro.config.mjs), la base del sitio está definida como `/resume-es`. Esto significa que las rutas estáticas de imágenes locales deben incluir este prefijo o estar resueltas correctamente para evitar enlaces rotos en producción.

---

## 🖨️ Sistema de Impresión y Visibilidad

El proyecto tiene un fuerte enfoque en ser **apto para imprimir**. Se utiliza la directiva `@media print` de CSS en [Layout.astro](file:///D:/code/resume-es/src/layouts/Layout.astro) para ocultar o mostrar elementos dinámicamente al exportar a PDF:

1. **Clase `.no-print`**: Oculta elementos al imprimir (ej. el pie de página de Ninja Keys, los botones de contacto en el Hero, y el selector de idioma).
2. **Clase `.print`**: Muestra elementos específicos únicamente al imprimir (ej. el bloque de texto plano con información de contacto directa).

---

## 🧠 Instrucciones para Agentes de IA (Gemini/Claude)

Cuando trabajes en este proyecto, sigue estas directrices:

### 1. Actualización de Datos del CV
- Cualquier cambio de información personal en español **debe hacerse exclusivamente** en [cv-es.json](file:///D:/code/resume-es/cv-es.json).
- Cualquier cambio de información personal en inglés **debe hacerse exclusivamente** en [cv-en.json](file:///D:/code/resume-es/cv-en.json).
- No modifiques directamente el código de los componentes `.astro` para alterar datos personales.

### 2. Modificación de Textos de la Interfaz (UI)
- Los títulos de las secciones, placeholders y textos comunes de botones o comandos que varían según el idioma están centralizados en [src/i18n/utils.ts](file:///D:/code/resume-es/src/i18n/utils.ts). Modifica o añade traducciones allí para nuevos idiomas.

### 3. Creación o Modificación de Secciones
- Las nuevas secciones deben ser componentes independientes dentro de [src/components/sections/](file:///D:/code/resume-es/src/components/sections/) y no deben importar directamente ningún archivo JSON de datos.
- Deben recibir los datos a renderizar e información de traducción por medio de **Astro Props** (`Astro.props`).
- Deben importarse e integrarse tanto en [src/pages/index.astro](file:///D:/code/resume-es/src/pages/index.astro) (pasándole los datos de `@cv-es` y traducción `es`) como en [src/pages/en/index.astro](file:///D:/code/resume-es/src/pages/en/index.astro) (pasándole `@cv-en` y traducción `en`).
