import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import './styles/home.css';
import { TbBrandJavascript } from 'react-icons/tb';
import { DiNodejs } from 'react-icons/di';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-info'>
          <div>
            <h2>WILLIAM RODRÍGUEZ</h2>
            <h2>Desarrollador <span>Web Full Stack</span></h2>
          </div>
            <p>
            Tengo experiencia en tecnologías web como JavaScript, <span className='tecnology'> HTML5, CSS, React, Git, 
            GitHub, Node.js, Express.js, Sequelize, PostgreSQL, Multer y Swagger.</span> Me apasiona 
            desarrollar soluciones de software escalables y de alta calidad que cumplan con las 
            necesidades de los usuarios. Disfruto trabajando en proyectos desafiantes y sigo 
            aprendiendo nuevas tecnologías para mejorar mis habilidades.
            </p>
          <div>
            <Link to='/contact'><button>¡Contactame ahora!</button></Link>
          </div>
          <div className='home-cart'>
            <div className='cart-cild'>
              <p>Servicios</p>
              <div  className='cart-img cart-icon'>
                <FaReact className='icon-tecn react-icon' />
                <TbBrandJavascript className='icon-tecn js-icon' />
                <DiNodejs className='icon-tecn node-icon' />
              </div>
            </div>
            <div className='cart-cild'>
              <p>Proyectos</p>
              <div  className='cart-img'>
                <img src="/assets/project-img.png" alt="" />
              </div>
            </div>
            <div className='cart-cild'>
              <p>Sobre mí</p>
              <div  className='cart-img'>
                <img src="/assets/logo2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='home-img'>
          <img  className='avatar' src="/assets/willimg.png" alt="image the avatar" />
          <div className="icon-container css-icon"><FaCss3Alt /></div>
          <div className="icon-container html-icon"><FaHtml5 /></div>
        </div>
      </div>
    </div>
  )
}

export default Home
