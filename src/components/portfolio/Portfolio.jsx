import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projet4.png'
import IMG2 from '../../assets/projet5.png'
import IMG3 from '../../assets/projet9.png'
import {FaGithub} from 'react-icons/fa'
import {TbNotebook} from 'react-icons/tb'


// DON'T USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Public health study',
    github: 'https://github.com/CoCasali/public-health-study',
    demo: 'https://github.com/CoCasali/public-health-study/blob/main/notebook.ipynb'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Optimize the data management of a store',
    github: 'https://github.com/CoCasali/optimize-data-management-store',
    demo: 'https://github.com/CoCasali/optimize-data-management-store/blob/main/notebook.ipynb'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Market study: chicken exporting companye',
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
          data.map(({id,image,title,github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'> <FaGithub/> Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'><TbNotebook/> Notebook</a>
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

