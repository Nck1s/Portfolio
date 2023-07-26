import React from 'react'
import { CV } from '../../Data'
import Card from './Card'
import './resume.css'

const Resume = () => {
  return (
   <section className='resume section' id= 'resume'>
     <h2 className='section__title text_cs'>
            Información
        </h2>
        <p className='section__subtitle'>
        Mi <span> Historia </span>
        </p>

        <div className='resume__container container grid'>
            <div className='resume__group'>
                <h3 className='resume__heading'> Educación </h3>

                <div className='resume__items'>
                    {CV.map((val, id) => {
                        if (val.category === 'educacion') {
                            return (
                            <Card key={id} 
                            title={val.title} 
                            subtitle={val.subtitle} 
                            date={val.date} 
                            description={val.description} /> 
                    );
                    }
                    })}
                </div>
            </div>

            <div className='resume__group'>
                <h3 className='resume__heading'> Experiencia Laboral </h3>

                <div className='resume__items'>
                    {CV.map((val, id) => {
                        if (val.category === 'experiencia') {
                            return (
                            <Card key={id} 
                            title={val.title} 
                            subtitle={val.subtitle} 
                            date={val.date} 
                            description={val.description} /> 
                    );
                    }
                    })}
                </div>
            </div>
        </div>
   </section>
  )
}

export default Resume
