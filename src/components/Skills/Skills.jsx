import React from 'react';
import { skills } from '../../Data';
import './skills.css';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title text_cs'>
            Habilidades Profesionales
        </h2>
        <p className='section__subtitle'>
        Tecnologías <span> Utilizadas </span>
        </p>

        <div className='skills__container container grid'>
        {skills.map(({name, description}, index) => {
            return(
                <div className='skills__item' key= {index}>
                <div className='skills__titles'>
                    <h3 className='skills__name'>{name}</h3>
                </div>

                <img src={require('../../assets/Icons/'+ description)} alt ='' className='skills__description'/>
                </div>
            )
        })}
        </div>
    </section>
  )
}

export default Skills
