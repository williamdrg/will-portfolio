import { GrBlog } from 'react-icons/gr'
import './styles/cardServices.css'

const CardServices = () => {
  return (
    <>
      <div className="card_services_container">
        <div><GrBlog /></div>
        <h2>Diseño Web</h2>
        <p>
          Puedo llevar tu presencia en línea al siguiente nivel. 
          Convierto tus ideas en sitios web personalizados que no 
          solo se ven impresionantes, sino que también brindan una 
          experiencia excepcional a tus usuarios. Trabajemos juntos 
          para crear un sitio web que sea fiel a tu visión y que 
          haga que tu marca destaque en el vasto mundo digital.
        </p>
      </div>
      <div className="card_services_container">
        <div><GrBlog /></div>
        <h2>Optimización Ninja</h2>
        <p>
          Puedo acelerar tu sitio web y dejar a tu competencia mordiendo 
          el polvo. Utilizando técnicas avanzadas de optimización y mejorando 
          el rendimiento del código, haré que tu sitio web vuele como un cohete. 
          Permíteme ahorrarle tiempo de carga a tus visitantes y ofrecer una 
          experiencia tan fluida que no podrán resistirse a quedarse.
        </p>
      </div>
      <div className="card_services_container">
        <div><GrBlog /></div>
        <h2>Desarrollo Personalizado</h2>
        <p>
         Desde la interfaz de usuario cautivadora hasta la implementación inteligente
         de funciones complejas, trabajaré incansablemente para brindarte una 
         solución que haga brillar tu negocio. Permíteme transformar tus sueños 
         en código y sorprender al mundo con una experiencia en línea excepcional.
        </p>
      </div>
    </>
  )
}

export default CardServices