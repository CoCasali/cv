import React from 'react'
import CV from '../../assets/CV_CorentinCasali.pdf'
import { FaGithub } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        <a href="https://github.com/CoCasali/" className='btn btn-primary'> <FaGithub/> GitHub</a>
    </div>
  )
}

export default CTA