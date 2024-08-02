import { MdEmail, MdOutlinePhonelinkRing, MdPerson4 } from 'react-icons/md'
import './styles/aboutUs.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SlFire } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='about_us'>
      <div className='about_container'>
        <div className='about_cart'>
          <div className='about_title'><MdPerson4/> Aboout Us</div>
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
           {/*  <div className='about_social_container'>
              <FaLinkedin className='icon_social_networks' />
              <IoLogoWhatsapp className='icon_social_networks' />
              <FaGithub className='icon_social_networks' />
            </div> */}

            <div className="about_social_container">
              <ul>
                <li className="iso-pro">
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link>
                    <FaLinkedin className='icon_social_networks' />
                  </Link>
                    {/* <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg> */}
                  <div className="about_text">Linkedin</div>
                </li>
                <li className="iso-pro">
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link>
                    <IoLogoWhatsapp className='icon_social_networks' />
                  </Link>
                    {/* <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg> */}
                  <div className="about_text">Whatsapp</div>
                </li>
                <li className="iso-pro">
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link>
                    <FaGithub className='icon_social_networks' />
                  </Link>
                    {/* <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg> */}
                  <div className="about_text">Github</div>
                </li>
              </ul>
            </div>

            <button>Dowmload CV</button>
          </div>
        </div>

        <div className='about_info'>
          <h1>I can develop that help <span>people!</span></h1>
          <p>
            Since starting my excursion as an independent creator almost quite a
            while back, Ive accomplished remote work for organizations, counseled for 
            new companies, and teamed up with capable individuals to make computerized 
            items for both business and purchaser use. Im discreetly sure, normally 
            inquisitive, and ceaselessly dealing with further developing my chops each 
            plan issue in turn.
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
                  <p>2021 - present</p>
                  <h3>Framer Designer & Developer</h3>
                  <p>Liza Yoolo ITC Company</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi 
                    nemo libero ullam cupiditate deserunt vero ratione officia, fugit 
                    porro sit praesentium incidunt fuga architecto quas nam esse sed quo!
                  </p>
                </div>
                <div>
                  <p>2016 - 2021</p>
                  <h3>Framer Designer & Developer</h3>
                  <p>Liza Yoolo ITC Company</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi 
                    nemo libero ullam cupiditate deserunt vero ratione officia, fugit 
                    porro sit praesentium incidunt fuga architecto quas nam esse sed quo!
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
                  <p>2021 - present</p>
                  <h3>MBA</h3>
                  <p>University of Dhaka</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi 
                    nemo libero ullam cupiditate deserunt vero ratione officia, fugit 
                    porro sit praesentium incidunt fuga architecto quas nam esse sed quo!
                  </p>
                </div>
                <div>
                  <p>2016 - 2020</p>
                  <h3>BBA</h3>
                  <p>University of Dhaka</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi 
                    nemo libero ullam cupiditate deserunt vero ratione officia, fugit 
                    porro sit praesentium incidunt fuga architecto quas nam esse sed quo!
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
                  <p>2021 - present</p>
                  <h3>MBA</h3>
                  <p>University of Dhaka</p>
                  <p>University of Dhaka</p>
                  <p>University of Dhaka</p>
                  <p>University of Dhaka</p>
                  <p>University of Dhaka</p>
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