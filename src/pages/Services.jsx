import { MdOutlineDesignServices } from 'react-icons/md'
import CardServices from '../components/services/CardServices'
import './styles/services.css'

const Services = () => {
  return (
    <div className="service">
      <div className="service_container">
        <div className='service_title'><MdOutlineDesignServices /> Services</div>
        <h1>Never Compromise For Our Portfolio to <span>Quality!</span></h1>
        <p>
          The imperative for integrated, expansive, and seamless digital experiences 
          is fueling software product design and development across organizations at 
          an unprecedented scale. These demands require capabilities to imagine, 
          build, and run digital products and services for new and existing.
        </p>
        <div className="service_cart_container">
          <CardServices/>
        </div>
      </div>
    </div>
  )
}

export default Services