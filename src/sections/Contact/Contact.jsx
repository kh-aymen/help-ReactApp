import React from 'react'
import './Contact.css'
import BigHeader from '../../components/BigHeader/BigHeader'
import SubHeader from '../../components/SubHeader/SubHeader'
import { Button, TextField } from '@mui/material'
import { ArrowCircleRight } from '@mui/icons-material'

function Contact() {
    return (
        <>
            <BigHeader title={'Contact Us'} />
            <section className="section flexCenter contact-section">
                <div className="contact-section-left" data-aos="fade-right" data-aos-duration="2000">
                    <SubHeader title='Contact Us' body='If You Have Any Query, Please Contact Us' />
                    <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio voluptas dolores ullam voluptates enim, ipsam beatae cum fugiat voluptatibus nemo assumenda molestias minus quaerat illum, eveniet iusto, fuga reprehenderit sequi. Ab fugit tempora perspiciatis placeat, a autem dicta minus!</p>
                    <form>
                        <div>
                            <TextField type='text' label='Your Name' required fullWidth/>
                            <TextField type='email' label='Your Email' required fullWidth/>
                        </div>
                        <TextField type='email' label='Subject' required fullWidth />
                        <textarea placeholder='Message' rows={4} cols={10}/>
                        <Button className='button-orange' type='submit'>Send Message <ArrowCircleRight /></Button>
                    </form>
                </div>
                <div className="contact-section-map" data-aos="fade-left" data-aos-duration="2000">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9179.871101585744!2d6.1479417320154175!3d35.56420813438699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f41148b9c4425b%3A0x9c8fcae238766ad7!2sRond%20point%20sonacome!5e0!3m2!1sen!2sdz!4v1692463739560!5m2!1sen!2sdz" allowFullScreen  title="My Video"  loading="lazy" referrerPolicy="no-referrer" style={{ border: 0 }}></iframe>
                </div>
            </section>
        </>
    )
}

export default Contact