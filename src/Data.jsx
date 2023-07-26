import Project1 from './assets/ToDoList.jpg';
import Project2 from './assets/PokeApi.jpg';
import Project3 from './assets/ProyectoPaíses.jpg';
import Project4 from './assets/StreamHub.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];


export const skills = [
  {
    id: 1,
    name: 'PHP',
    description:'php.png',
  },

  {
    id: 2,
    name: 'JavaScript',
    description:
      'JavaScript.png',
  },

  {
    id: 3,
    name: 'React',
    description:
      'React.png',
  },

  {
    id: 4,
    name: 'Angular',
    description:
      'Angular.png',
  },

  {
    id: 5,
    name: 'MySql',
    description:
      'Mysql.png',
  },

  {
    id: 6,
    name: 'NodeJs',
    description:
      'NodeJs.png',
  },

  {
    id: 7,
    name: 'HTML',
    description:
      'HTML5.png',
  },

  {
    id: 8,
    name: 'CSS',
    description:
      'CSS.png',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'JavaScript',
    title: 'To Do List',
    description:
      'Lista de tareas realizada con JavaScript, HTML5 y CSS',
  },
  {
    id: 2,
    img: Project2,
    category: 'JavaScript',
    title: 'Pokedex',
    description:
      'Pokedex realizada con JavaScript, HTML5 y CSS realizando un Fetch de la Api de pokemon',
  },
  {
    id: 3,
    img: Project3,
    category: 'React',
    title: 'Países del Mundo',
    description:
      'Página Web realizada con React mediante el uso de la Api de Países',
  },
  {
    id: 4,
    img: Project4,
    category: 'Angular',
    title: 'StreamHub',
    description:
      'Web 100% responsive realizada con Angular, para la visualizacion de peliculas, series o libros',
  },
];

export const CV = [
  {
    id: 1,
    title: 'The Hoff Brand',
    subtitle : 'Logística (almacén)',
    date: 'Octubre 2022 a Abril 2023',
    description: 'Gestión de inventario, preparación de pedidos y organización de envíos',
    category: 'experiencia',
  },
  {
    id: 2,
    title: 'Hermanos Candela',
    subtitle : 'Camarero',
    date: 'Marzo a Septiembre 2019 y 2021',
    description: 'Gestión de inventario, servicio de mesas y control de la barra',
    category: 'experiencia',
  },
  {
    id: 3,
    title: 'Operador de planes de contingencia en playas',
    subtitle : 'Control COVID-19',
    date: 'Julio 2020 a Septiembre 2020',
    description: 'Control de aforos y gestión de las playas',
    category: 'experiencia',
  },
  {
    id: 4,
    title: 'Socorrista Playas',
    subtitle : 'Atención a las personas con diversidad',
    date: 'Veranos 2016 y 2017',
    description: 'Gestión de las playas y atención a las personas con diversidad funcional en la zona de accesibilidad',
    category: 'experiencia',
  },
  {
    id: 5,
    title: 'Bootcamp Full Stack Developer',
    subtitle : 'UpgradeHub',
    date: '2023',
    description: `Desarrollo Frontend: HTML, CSS y JS. Frameworks: Angular.JS y React.JS
                  Desarrollo Backend: Node.JS, MongoDB y MySQL.
                  Lenguaje PHP y framework Symfony asociado.`,
    category: 'educacion',
  },
  {
    id: 6,
    title: 'Máster en Orientación Educativa',
    subtitle : 'Universidad de Alicante',
    date: 'Septiembre 2018 - Junio 2019',
    description: 'Máster enfocado en la atención a la diversidad y el alumnado con necesidades educativas especificas en secundaria y bachillerato',
    category: 'educacion',
  },
  {
    id: 7,
    title: 'Graduado en Magisterio Infantil',
    subtitle : 'Universidad de Alicante',
    date: 'Septiembre 2012 - Junio 2016',
    description: 'Grado en educación infantil, alumnos de 0 a 6 años',
    category: 'educacion',
  },
  {
    id: 8,
    title: 'T.A.F.A.D.',
    subtitle : 'IES 8 de Marzo',
    date: 'Septiembre 2010 - Junio 2012',
    description: 'Formación Profesional de Técnico Superior de Actividades Físicas y Deportivas',
    category: 'educacion',
  },
]

