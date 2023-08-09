import React, { useRef } from 'react'
import './contact.css'
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const enviarEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_hqvphfn', 'template_9rnfqro', form.current, 'lyvZeIK5qYTmktbVu')
        .then((result) => {
            console.log(result.text);
            alert('El mensaje se ha enviado');
        }, (error) => {
            console.log(error.text);
        });

        document.getElementById("contact-form").reset();    
    };

  return (
    <section className='contact section' id='contact'>
       <h2 className='section__title text_cs'>
            Contacto
        </h2>
        <p className='section__subtitle'>
        Ponte en <span> Contacto </span>
        </p>

        <div className='contact__container container grid'>
            <div className='contact__content'>
                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegMap />
                    </span>

                    <h3 className='contact__card-title'> Dirección</h3>
                    <p className='contact__card-data'>Alicante, España</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegUser />
                    </span>

                    <h3 className='contact__card-title'>FullStack Junior Developer</h3>
                    <p className='contact__card-data'>Disponible para trabajar</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegEnvelope/>
                    </span>

                    <h3 className='contact__card-title'>E-mail</h3>
                    <p className='contact__card-data'>cristianperezcases@gmail.com</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegAddressBook/>
                    </span>

                    <h3 className='contact__card-title'>Móvil</h3>
                    <p className='contact__card-data'>687 022 103</p>
                </div>
            </div>

            <form ref= {form} id='contact-form' onSubmit={enviarEmail} className='contact__form'>
                <div className='contact__form-group grid'>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag text-cs'> Nombre </label>
                        <input type='text' className='contact__form-input' name="user_name" required/>
                    </div>

                    <div className='contact__form-div'>
                        <label className='contact__form-tag text-cs'> E-mail </label>
                        <input type='email' className='contact__form-input' name="user_email" required/>
                    </div>
                </div>

                <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag text-cs'> Mensaje </label>
                        <textarea type='text' className='contact__form-input' name="user_message" required/>
                </div>
                
                <div className='contact__submit'>
                        
                        <p>* Acepto las políticas y condiciones</p>
                        <button type= 'submit' className='btn text-css'> Enviar Correo </button>
                </div>

            </form>
        </div>
    </section>
  )
}
export default Contact
