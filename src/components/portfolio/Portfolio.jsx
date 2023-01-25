import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/application_force_velocity.png'
import IMG2 from '../../assets/projet10.png'
import IMG3 from '../../assets/projet9.png'
import {FaGithub} from 'react-icons/fa'
import {TbNotebook} from 'react-icons/tb'


// DON'T USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Application - Force Velocity',
    duration: "(4 months)",
    github: 'https://github.com/CoCasali/pfv',
    demo: 'https://profil-force-vitesse.streamlit.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Detect fake bills',
    duration: "(2 months)",
    github: 'https://github.com/CoCasali/detect_fake_bills',
    demo: 'https://github.com/CoCasali/detect_fake_bills/blob/main/R_markdown.pdf'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Market study: chicken exporting companye',
    duration: "(1 month)",
    github: 'https://github.com/CoCasali/market-study-chicken',
    demo: 'https://github.com/CoCasali/market-study-chicken/blob/main/notebook.ipynb'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,duration,github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{duration}</p>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noopener noreferrer"> <FaGithub/> Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><TbNotebook/> Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio

