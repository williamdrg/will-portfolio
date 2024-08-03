import { MdOutlineEmail } from 'react-icons/md'
import './styles/contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Modal from 'react-modal';
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_APP_EMAILJS_USER_ID;
Modal.setAppElement('#root');

const Contact = () => {
  const form = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (message) => {
    setModalMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('servicio', serviceId)
    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        openModal('¡Correo enviado exitosamente!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        openModal('Error al enviar el correo.');
      });
  };


  return (
    <div className='contact'>
      <div className='contact_container'>
      <div className='contact_title'><MdOutlineEmail /> Contacto</div>
      <h1>Hablemos sobre tu próximo <span>proyecto</span></h1>
      <p>
        ¿Tienes una idea que quieres llevar a cabo? Estoy aquí para ayudarte a 
        transformar tus ideas en realidad. Ponte en contacto conmigo para discutir 
        cómo podemos colaborar y hacer que tu proyecto sea un éxito.
      </p>

      <form className='form-container' ref={form} onSubmit={sendEmail}>
        <h3>¡Trabajemos juntos!</h3>
        <div className='form'>
          <input type='text'  placeholder='Nombre' name='user_name' className='input' required/>
          <input type='email' placeholder='Email' name='user_email' className='input' required/>
          <textarea name='message' id='message' rows='10' cols='30'className='textarea' required></textarea>
          <div className='button-container'>
            <button type='submit' className='send-button'>Enviar</button>
            <div className='reset-button-container'>
              <button type='button' id='reset-btn' className='reset-button' onClick={() => form.current.reset()}>Restablecer</button>
            </div>
          </div>
        </div>
      </form>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Email Status" className="ReactModal__Content" overlayClassName="ReactModal__Overlay">
        <h2>{modalMessage}</h2>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
      </div>
    </div>
  )
}

export default Contact