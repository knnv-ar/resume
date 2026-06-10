export const translations = {
  es: {
    aboutTitle: "Sobre mí",
    experienceTitle: "Experiencia",
    educationTitle: "Formación",
    skillsTitle: "Habilidades",
    projectsTitle: "Producción",
    emailTitle: (name: string, email: string) => `Enviar un correo electrónico a ${name} en ${email}`,
    visitProfile: (name: string, network: string) => `Visitar el perfil de ${name} en ${network}`,
    pressKey: "Presiona",
    toOpenPanel: "para abrir la paleta de comandos.",
    printResume: "Imprimir currículum",
    visitProject: (name: string) => `Visitar el proyecto ${name}`,
    langLabel: "Idioma",
    present: "Presente",
    actions: "Acciones",
    social: "Social",
    placeholder: "Paleta de comandos"
  },
  en: {
    aboutTitle: "About me",
    experienceTitle: "Experience",
    educationTitle: "Education",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    emailTitle: (name: string, email: string) => `Send an email to ${name} at ${email}`,
    visitProfile: (name: string, network: string) => `Visit ${name}'s profile at ${network}`,
    pressKey: "Press",
    toOpenPanel: "to open the Command panel.",
    printResume: "Print 'Resume'",
    visitProject: (name: string) => `Visit the project ${name}`,
    langLabel: "Language",
    present: "Present",
    actions: "Actions",
    social: "Social",
    placeholder: "Command panel"
  }
} as const;
