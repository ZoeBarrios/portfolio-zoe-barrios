export const PROJECTS = [
  {
    id: 'weplay',
    title: 'Weplay',
    description: 'App mobile de juegos de cartas',
    longDescription: `Aplicación mobile desarrollada con React Native y NestJS. Permite jugar juegos de cartas en tiempo real con amigos mediante sockets. El proyecto permite crear paquetes de cartas personalizados, compartirlos con otros usuarios y jugar distintos modos de juego (en esta primera versión, ¿Quién es más probable?) a través de salas privadas con comunicación en tiempo real mediante sockets.
`,
    mainImgPath: '/src/assets/weplay/',
    imgs: ['login.png', 'main.png', 'play.png'],
    tech: ['React Native', 'NestJS', 'Socket.io', 'MongoDB', 'Docker', 'Google Auth'],
  },

  {
    id: 'work',
    title: 'Proyectos Laborales',
    description: 'Sistemas de gestión',
    longDescription: `Las siguientes imágenes representan interfaces ilustrativas de los tipos de sistemas en los que trabajo actualmente.
No corresponden a sistemas reales ni a clientes específicos, y fueron rediseñadas con fines demostrativos, respetando la confidencialidad y seguridad de los proyectos.
Trabajo principalmente en el desarrollo de sistemas de gestión web orientados a empresas que comercializan productos y servicios, incluyendo entornos multiempresa y multisucursal.`,
    mainImgPath: '/src/assets/work-related-proyects/',
    imgs: ['dashboard.png', 'gestion.png', 'app.png'],
    tech: [
      'React Native',
      'Javascript',
      'Typescript',
      'Node',
      'Mysql',
      'React',
      'Boostrap',
      'SQL',
      'Express',
    ],
  },
]
