import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container grid'>
      <div className='footer__socials'>
        <a href='https://github.com/Nck1s?tab=repositories' className='footer__social-link'>
          <FaGithub />
        </a>

        <a href='https://www.linkedin.com/in/Cristian-P%C3%A9rez-Cases/' className='footer__social-link'>
          <FaLinkedinIn />
        </a>
      </div>

      <p className='footer__copyright text-cs'> &copy; 2023 <span> Alicante </span></p>

      <p className='footer__copyright text-cs'> Desarrollado por <span> Cristian Pérez</span></p>
      </div>
    </footer>
  )
}

export default Footer
