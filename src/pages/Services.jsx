import { MdOutlineDesignServices } from 'react-icons/md'
import CardServices from '../components/services/CardServices'
import './styles/services.css'

const Services = () => {
  return (
    <div className="service">
      <div className="service_container">
        <div className='service_title animate_slideUp'><MdOutlineDesignServices /> Services</div>
        <h1 className='animate_slideUp'>Never Compromise For Our Portfolio to <span>Quality!</span></h1>
        <p className='animate_slideUp'>
          En el mundo digital actual, contar con un sitio web eficiente y bien diseñado es fundamental para 
          el éxito de cualquier negocio. Ofrecemos una gama completa de servicios de desarrollo web para 
          asegurar que tu presencia en línea sea destacada y efectiva. Desde el diseño y desarrollo hasta 
          la optimización y mantenimiento, estamos aquí para ayudarte a alcanzar tus objetivos digitales.
        </p>
        <div className="service_cart_container animate_slideUp">
          <CardServices/>
        </div>
      </div>
    </div>
  )
}

export default Services