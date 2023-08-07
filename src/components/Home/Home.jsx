import React from 'react'
import profileImg from "../../assets/Profile.png"
import shapeOne from "../../assets/shape-1.png"
import shapeTwo from "../../assets/shape-2.png"
import Curriculum from "../../assets/CurriculumCristianPerez.pdf"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import './home.css'
import Skills from '../Skills/Skills'

const Home = () => {
  return <section className='home' id='home'>
   <div className='home__wrapper'>
   <div className='home__container container'>
      <p className='home__subtitle text-cs'>
        Hola, <span>Mi nombre es</span>
      </p>

      <h1 className='home__title text-cs'>
        <span>CRISTIAN</span> PÉREZ
      </h1>

      <p className='home__job'>
        <span className='text-cs'>Soy</span> <b>Desarrollador Junior</b>
      </p>

      <div className='home__img-wrapper'>
        <div className='home__banner'>
          <img src={profileImg} alt='' className='home__profile' />
        </div>

        <p className='home__data home__data-one'>
          <span className='text-lg'>
            Full<b>Stack</b>
          </span>

          <span className='text-sm text-cs'>
            Junior <span> Developer</span>
          </span>
        </p>

        <p className='home__data home__data-two'>
          <span className='text-lg'>
             <b>Buscando</b>
          </span>

          <span className='text-sm text-cs'>
            Nuevos <span> Proyectos </span>
          </span>
        </p>
        
      <img src={shapeOne} alt='' className='shape shape__1' />
      <img src={shapeTwo} alt='' className='shape shape__2' />
      <img src={shapeTwo} alt='' className='shape shape__3' />
      </div>
      
      <p className='home__text'>
        Con grandes cualidades para el trabajo en equipo, la colaboración, ganas de aprender y actitud positiva.
      </p>

      <div className='home__socials'>
        <a href='https://github.com/Nck1s?tab=repositories' className='home__social-link'>
          <FaGithub />
        </a>

        <a href='https://www.linkedin.com/in/Cristian-P%C3%A9rez-Cases/' className='home__social-link'>
          <FaLinkedinIn />
        </a>
      </div>

      <div className='home__btns'>
      <a href={Curriculum} download={''} className='btn text-cs'>
       Descargar CV
       </a>
       
      <a href={Skills} className='hero__link text-cs'> 
      Mis Habilidades
       </a>
      </div>
    
    </div>
   </div>
  </section>
}

export default Home
