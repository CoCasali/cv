import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://twitter.com/corentincasali" target="_blank"><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/corentincasali/" target= "_blank"><BsLinkedin/></a>
        <a href="https://github.com/CoCasali" target= "_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial