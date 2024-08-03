import { GrDocumentPerformance } from 'react-icons/gr'
import './styles/cardServices.css'
import { SiAffinitydesigner } from 'react-icons/si'
import { MdOutlineWebStories } from 'react-icons/md'

const CardServices = () => {
  return (
    <>
      <div className="card_services_container">
        <div><SiAffinitydesigner className='icon_service' /></div>
        <h2>Desarrollo y Diseño Web</h2>
        <p>
          Eleva tu presencia en línea con un diseño web personalizado que no solo impresione, 
          sino que también ofrezca una experiencia excepcional a tus usuarios. Juntos, 
          crearemos un sitio web que refleje fielmente tu visión y haga destacar tu marca 
          en el vasto mundo digital.
        </p>
      </div>
      <div className="card_services_container">
        <div><GrDocumentPerformance className='icon_service' /></div>
        <h2>Optimización de Rendimiento Web</h2>
        <p>
          Acelera tu sitio web y deja atrás a la competencia. Con técnicas avanzadas de 
          optimización y mejoras en el rendimiento del código, haré que tu sitio web cargue 
          rápidamente y ofrezca una experiencia fluida, reteniendo a tus visitantes y 
          mejorando su satisfacción.
        </p>
      </div>
      <div className="card_services_container">
        <div><MdOutlineWebStories className='icon_service' /></div>
        <h2>Desarrollo Web Personalizado</h2>
        <p>
          Desde una interfaz de usuario cautivadora hasta la implementación de funciones 
          complejas, trabajaré incansablemente para ofrecerte una solución que realce tu 
          negocio. Transforma tus ideas en realidad con un desarrollo personalizado que 
          sorprenderá a tus usuarios.
        </p>
      </div>
      <div className="card_services_container">
        <div><img src="/assets/netsuite.png" alt="image netsuite" /></div>
        <h2>Consultoría Técnica en Oracle NetSuite</h2>
        <p>
          Especialista en configuración y personalización de Oracle NetSuite, 
          implementando y optimizando soluciones ERP para mejorar la eficiencia 
          y productividad de tu empresa. Hábil en la integración de módulos y desarrollo 
          de scripts personalizados, proporcionando soporte continuo y capacitación 
          a los usuarios finales.
        </p>
      </div>
    </>
  )
}

export default CardServices