import { Link } from 'react-router-dom';
import './styles/navbar.css';
import { CgMenuMotion } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='header'>
      <div className="navbar-container">
        <div className="logo">
          <Link to='/'><img  className='img_logo' src="/assets/logo1.png" alt="image logo"/></Link>
        </div>
        <div className={`nav-movil ${ menuOpen ? 'nav-movil-open' : 'nav-movil-close'}`}>
          <div className="nav-links">
            <div onClick={toggleMenu} className='hidden icon-close'><IoCloseSharp /></div>
            <div className='hidden logo_movil'>
              <img  className='img_logo' src="/assets/logo1.png" alt="image logo"/>
            </div>
            <hr className='hidden'/>
            <ul className="nav-list">
              <li><Link to='/' className='nav-active'>Home</Link></li>
              <li><Link to='/about' className='nav-not-active'>About Us</Link></li>
              <li><Link to='/porfolio'>Porfolio</Link></li>
              <li><Link to='/services'>Service</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <hr className='hidden'/>
            <div className='hidden about_movil'>
              <h2>Sobre Mi:</h2>
              <div className='about_icon'>
                <FaLinkedin className='icon_social_networks' />
                <IoLogoWhatsapp className='icon_social_networks' />
                <FaGithub className='icon_social_networks' />
              </div>
            </div>
          </div>
        </div>
          <CgMenuMotion onClick={toggleMenu} className='menu_icon' />
      </div>
    </div>
  );
}

export default Navbar;
