export const PROJECTS = [
  {
    id: 'weplay',
    title: 'Weplay',
    description: 'App mobile de juegos de cartas',
    longDescription: `Aplicación mobile desarrollada con React Native y NestJS. Permite jugar juegos de cartas en tiempo real con amigos mediante sockets. El proyecto permite crear paquetes de cartas personalizados, compartirlos con otros usuarios y jugar distintos modos de juego (en esta primera versión, ¿Quién es más probable?) a través de salas privadas con comunicación en tiempo real mediante sockets.`,
    mainImgPath: '/weplay/',
    imgs: ['login.png', 'main.png', 'play.png'],
    tech: ['React Native', 'NestJS', 'Socket.io', 'MongoDB', 'Docker', 'Google Auth'],
  },

  {
    id: 'work',
    title: 'Proyectos Laborales',
    description: 'Sistemas de gestión',
    longDescription: `Las siguientes imágenes representan interfaces ilustrativas de los tipos de sistemas en los que trabajo actualmente.
No corresponden a sistemas reales ni a clientes específicos por seguridad.
Trabajo principalmente en el desarrollo de sistemas de gestión web orientados a empresas que comercializan productos y servicios, incluyendo entornos multiempresa y multisucursal.`,
    mainImgPath: '/work-related-proyects/',
    imgs: ['dashboard.png', 'gestion.png', 'app.png'],
    tech: [
      'React Native',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'MySQL',
      'React',
      'Bootstrap',
      'Express',
    ],
  },

  {
    id: 'studyu',
    title: 'Studyu',
    description: 'Plataforma web para organización de estudios personales',
    longDescription: `Aplicación web full-stack desarrollada con React y NestJS orientada a la organización y planificación de estudios personales. Permite gestionar materias, estructurar sesiones de estudio y visualizar el progreso académico.
La interfaz está construida con TailwindCSS y componentes de shadcn/ui, priorizando una experiencia clara y adaptable. El backend en NestJS expone una API modular encargada de la gestión de usuarios, autenticación y persistencia de datos.
El sistema incluye autenticación mediante Google Login/Register, manejo de sesiones de usuario y una arquitectura preparada para escalar nuevas funcionalidades relacionadas con planificación académica y seguimiento del aprendizaje.`,
    mainImgPath: '/studyu/',
    imgs: ['register.png', 'calendar.png', 'courses.png', 'degrees.png'],
    tech: [
      'React',
      'TypeScript',
      'NestJS',
      'TailwindCSS',
      'shadcn/ui',
      'Google Auth',
      'JWT',
      'Docker',
    ],
  },
]
