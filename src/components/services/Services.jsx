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
            <h3>UI/UX Design</h3>
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
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
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
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GoPrimitiveDot className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
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
        </article>
      </div>
    </section>
  )
}

export default Services