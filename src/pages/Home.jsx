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
    
          <div className='animate_slideUp'>
            <h2>WILLIAM RODRÍGUEZ</h2>
            <h2>Desarrollador <span>Web Full Stack</span></h2>
          </div>
          <div className='btn_home animate_slideUp'>
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
          </div>

          <div className='home-cart animate_slideUp'>
            <div className='cart-cild'>
              <Link to='/services'>
                <p>Servicios</p>
                <div  className='cart-img cart-icon'>
                  <FaReact className='icon-tecn react-icon' />
                  <TbBrandJavascript className='icon-tecn js-icon' />
                  <DiNodejs className='icon-tecn node-icon' />
                </div>
              </Link>
            </div>
            <div className='cart-cild'>
              <Link to='/portfolio'>
                <p>Proyectos</p>
                <div  className='cart-img'>
                  <img src="/assets/project-img.png" alt="" />
                </div>
              </Link>
            </div>
            <div className='cart-cild'>
              <Link to='/about'>
                <p>Sobre mí</p>
                <div  className='cart-img'>
                  <img src="/assets/logo2.png" alt="" />
                </div>
              </Link>
            </div>
          </div>

        </div>

        <div className='home-img animate_slideUp'>
          <img  className='avatar' src="/assets/willimg.png" alt="image the avatar" />
          <div className="icon-container css-icon"><FaCss3Alt /></div>
          <div className="icon-container html-icon"><FaHtml5 /></div>
        </div>
      </div>
    </div>
  )
}

export default Home
