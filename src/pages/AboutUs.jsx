import { MdEmail, MdOutlinePhonelinkRing, MdPerson4 } from 'react-icons/md'
import './styles/aboutUs.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SlFire } from 'react-icons/sl' 

const AboutUs = () => {
  return (
    <div className='about_us'>
      <div className='about_container'>
        <div className='about_card'>
          <div className='about_title'><MdPerson4/> Sobre mí</div>
          <div className='about_data'>
            <h2>William <span>Rodríguez</span></h2>
            <p>Desarrollador Web</p>
            <div className='about_container_img'>
              <img src="/assets/willmg2.png" alt="avatar" />
            </div>
            <div className='about_contact'>
              <p><MdEmail /> williamdrg@gmail.com</p>
              <p><MdOutlinePhonelinkRing /> +57 302 3559563</p>
            </div>

            <div className="about_social_container">
              <ul>
                <li className="iso-pro">
                  <a href='https://www.linkedin.com/in/william-rodr%C3%ADguez-garc%C3%ADa-20b971115/' target="_blank" rel="noopener noreferrer">
                  <span></span>
                  <span></span>
                  <span></span>
                    <FaLinkedin className='icon_social_networks' />
                  </a>
                  <div className="about_text">Linkedin</div>
                </li>
                <li className="iso-pro">
                  <a href='https://api.whatsapp.com/send?phone=573023559563' target="_blank" rel="noopener noreferrer">
                  <span></span>
                  <span></span>
                  <span></span>
                    <IoLogoWhatsapp className='icon_social_networks' />
                  </a>
                  <div className="about_text">Whatsapp</div>
                </li>
                <li className="iso-pro">
                  <a href='https://github.com/williamdrg' target="_blank" rel="noopener noreferrer">
                  <span></span>
                  <span></span>
                  <span></span>
                    <FaGithub className='icon_social_networks' />
                  </a>
                  <div className="about_text">Github</div>
                </li>
              </ul>
            </div>
            <a href='https://drive.google.com/file/d/17VJFKPKFU0K1TfGPtF2nny6SRjro85wS/view?usp=sharing' target="_blank" rel="noopener noreferrer">
              <button>Dowmload CV</button>
            </a>
          </div>
        </div>

        <div className='about_info'>
        <h1>Conoce a tu desarrollador <span>Web</span></h1>
          <p>
            ¡Hola! Soy un Desarrollador Web Full Stack apasionado y autodidacta 
            con una sólida formación en informática adquirida en la Universidad 
            de Magdalena y refinada durante mis años como docente. Esta experiencia 
            en la enseñanza me ha permitido cultivar habilidades de comunicación 
            efectivas y la capacidad para descomponer y explicar conceptos complejos 
            de manera sencilla, habilidades que resultan esenciales en programación.
          </p>
          <div>
            <h3>Experiencia <span>laboral</span></h3>
            <div className='personal_data'>
              <div className='line_icon_container'>
                <SlFire className='line_icon' />
                <div></div>
              </div>
              <div className='exp_container'>
                <div>
                  <p>2023 - 2024</p>
                  <h3>Consultor técnico Oracle Netsuite</h3>
                  <p className='p_title'>Sehubs S.A.S</p>
                  <p>
                   Experiencia en la configuración y personalización de Oracle NetSuite,
                   implementación y optimización de soluciones ERP, integración de módulos 
                   con sistemas existentes y desarrollo de scripts personalizados. Proveí 
                   soporte continuo y capacitación a usuarios finales.
                  </p>
                </div>
                <div>
                  <p>2016 - 2019</p>
                  <h3>Docente Informática</h3>
                  <p className='p_title'>Instituto Midia Leonor Castellón de Sánchez</p>
                  <p>
                    Utilicé herramientas tecnológicas y plataformas digitales para mejorar la 
                    enseñanza y el compromiso de los estudiantes. Fomenté habilidades de resolución 
                    de problemas y lógica matemática, esenciales para la programación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Formación <span>académica</span></h3>
            <div className='personal_data'>
              <div className='line_icon_container'>
                <SlFire className='line_icon' />
                <div></div>
              </div>
              <div className='exp_container'>
                <div>
                  <p>Enero/2023 - Junio/2023</p>
                  <h3>Academlo</h3>
                  <p className='p_title'>Desarrollador Web Full Stack</p>
                  <p>
                    
                  </p>
                </div>
                <div>
                  <p>2013 - 2016</p>
                  <h3>Lic. En Informática</h3>
                  <p className='p_title'>Universidad del Magdalena</p>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Mis <span>habilidades</span></h3>
            <div className='personal_data'>
              <div className='line_icon_container'>
                <SlFire className='line_icon' />
                <div></div>
              </div>
              <div className='exp_container'>
                <div>
                  <div>
                    <h3>Responsabilidad</h3>
                    <p>
                      Soy una persona confiable y comprometida con mi trabajo, 
                      siempre cumpliendo con los plazos y entregando resultados 
                      de calidad.
                    </p>
                  </div>
                  <div>
                    <h3>Creatividad</h3>
                    <p>
                      Me gusta encontrar soluciones innovadoras a los problemas,
                      utilizando tanto mis habilidades técnicas como mi imaginación.
                    </p>
                  </div>
                  <div>
                    <h3>Autodidacta</h3>
                    <p>
                      Tengo la capacidad de aprender de manera independiente, 
                      siempre buscando nuevos conocimientos y mejorando mis habilidades.
                    </p>
                  </div>
                  <div>
                    <h3>Trabajo en equipo</h3>
                    <p>
                      Disfruto colaborar con otros, aprovechando las fortalezas de 
                      cada miembro del equipo para lograr objetivos comunes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs