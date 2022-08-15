import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" tager= "_blank"><BsLinkedin/></a>
        <a href="https://github.com" tager= "_blank"><FaGithub/></a>
        <a href="https://dribbble.com" tager= "_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial