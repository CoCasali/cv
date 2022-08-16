import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Corentin Casali</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://twitter.com/corentincasali"><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/corentincasali/"><BsLinkedin/></a>
        <a href="https://github.com/CoCasali"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;EGATOR. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer