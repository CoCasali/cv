import React from 'react'
import './services.css'
import {GoPrimitiveDot} from 'react-icons/go'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Did</h5>
      <h2>Formation</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Master of Sciences</h3>
            <h4>Evaluation and Engineering of sports performance</h4>
          </div>
          <ul className='service__list'>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Understand and analyze issues related to motor skills in sport and health</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Implement an experimental approach in exercise physiology</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Technologies for human motor analysis and procedures for disability compensation</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Operate with specialized equipment using knowledge of biomechanics and exercise physiology</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Data Analyst</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Perform data modeling to segment a marketing audience.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Analyze sales in order to improve the company's strategy.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Query a statistical database to answer business questions.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Create dashboards with graphs and tracking indicators to monitor and analyze results.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Collect, aggregate and cleanse data to conduct market research.</p>
            </li>
          </ul>
        </article>

        {/* <article className='service'>
          <div className='service__head'>
            <h3>Data Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services