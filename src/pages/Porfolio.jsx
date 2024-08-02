import { GrProjects } from "react-icons/gr"
import './styles/porfolio.css'
import Card from "../components/porfolio/Card"

const projects = [
  {
    id: 1,
    img: "/assets/ecommerce.png",
    title: 'E-commerce',
    desc: `¡Bienvenido a nuestra aplicación para comercio electrónico! Descubre el poder de nuestra API para impulsar tu negocio en línea. Utilizamos React y Redux para el frontend, y Node, Express, Sequelize, Nodemailer y JWT para el backend.`,
    demo: "https://will-ecommerce-v2.netlify.app/"
  },
  {
    id: 2,
    img: "/assets/pokemon.png",
    title: 'Pokedex',
    desc: `¡Sumérgete en el apasionante mundo de los Pokémon con nuestra increíble Pokédex en línea! Descubre información detallada sobre cada especie, sus habilidades, características y mucho más.`,
    demo: "https://william-pokedex-v2.netlify.app"
  },
  {
    id: 3,
    img: "/assets/rick.png",
    title: 'Rick And Morty',
    desc: `¡Explora el universo de Rick and Morty en nuestra wiki! Descubre información detallada sobre los personajes, episodios, teorías y mucho más.`,
    demo: "https://rickandmortywilliam.netlify.app"
  },
  {
    id: 4,
    img: "/assets/product.png",
    title: 'Crud de productos',
    desc: `¡Descubre una forma más fácil y eficiente de gestionar tus productos con nuestra aplicación de CRUD! Agrega, actualiza, elimina y visualiza tus productos de manera rápida y sencilla.`,
    demo: "https://productswithcrud.netlify.app/"
  },
  {
    id: 5,
    img: "/assets/clima.png",
    title: 'Api del clima',
    desc: `Aunque el clima cambie constantemente, nuestra página del clima siempre te brindará una cálida bienvenida. Descubre las condiciones actuales y prepárate para lo que el día tenga preparado. ¡Bienvenidos!`,
    demo: "https://climateapplication1.netlify.app/"
  },
  {
    id: 6,
    img: "/assets/users.png",
    title: 'Crud de usuarios',
    desc: `¡Gestión eficiente de usuarios con nuestra aplicación CRUD! Agrega, actualiza, elimina y visualiza usuarios de manera rápida y sencilla.`,
    demo: "https://crud-users-william.netlify.app/"
  },
  {
    id: 7,
    img: "/assets/galleta.png",
    title: 'Galleta de la fortuna',
    desc: `¿Quieres probar tu suerte? Descubre el mensaje de tu galleta de la fortuna en nuestra página. La dulzura de la vida en cada bocado. Bienvenidos.`,
    demo: "https://fortunecookiemagic.netlify.app"
  }
];

const Porfolio = () => {
  return (
    <div className="porfolio">
      <div className="porfolio_container">
        <div className='porfolio_title'><GrProjects /> Porfolio</div>
        <h1>Never Compromise For Our Portfolio to <span>Quality!</span></h1>
        <p>
          The imperative for integrated, expansive, and seamless digital experiences 
          is fueling software product design and development across organizations at 
          an unprecedented scale. These demands require capabilities to imagine, 
          build, and run digital products and services for new and existing.
        </p>
        <div className="porfolio_cart_container">
          {
           projects.map(project => (
             <Card key={project.id} project={project}/>
           ))   
          }
        </div>
      </div>
    </div>
  )
}

export default Porfolio