import React from 'react'
import './ErrorPage.css'
import BigHeader from '../../../components/BigHeader/BigHeader'
import { ArrowCircleRight, DangerousOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
      <BigHeader title={'Error Page'} />
      <section className="section errorpage" data-aos="fade-up" data-aos-duration="2000">
        <DangerousOutlined />
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <p className="p">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
        <Button className='button-white' ><Link to={'/'}>Go Back To Home <ArrowCircleRight /></Link></Button>
      </section>
    </>
  )
}

export default ErrorPage