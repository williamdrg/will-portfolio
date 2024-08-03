import { useState } from 'react'
import './styles/card.css'

const Card = ({ project }) => {
  const [ showDesc, setShowDesc ] = useState(false)

  return (
    <div className='card_content'>
     <div className={`card ${showDesc && 'card_rotate'}`}>
        <div className='card_img_container'>
          <div className={`dot ${showDesc && 'card_rotate'}`}></div>
          <div className='card-inner'>
            <div className='card_img card-front'>
              <img src={project.img} alt={project.title} />
            </div>
            <div className="card-back">
              <p>{project.desc}</p>
            </div>
          </div>
      </div>
        
      </div>
      <h3>{project.title}</h3>
      <div className='card_btn'>
      <a href={project.demo} target="_blank" rel="noopener noreferrer">
        <button>Demo</button>
      </a>
        <button onClick={() => setShowDesc(!showDesc)}>Info</button>
      </div>
    </div>
  )
}

export default Card