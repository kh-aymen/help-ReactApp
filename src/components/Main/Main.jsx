import React from 'react'
import './Main.css'
import { Route, Routes } from 'react-router-dom'
import Hero from '../../sections/Hero/Hero'
import About from '../../sections/About/About'
import Causes from '../../sections/Causes/Causes'
import Contact from '../../sections/Contact/Contact'
import Donate from '../../sections/Pages/Donate/Donate'
import Testimonial from '../../sections/Pages/Testimonial/Testimonail'
import ErrorPage from '../../sections/Pages/ErrorPage/ErrorPage'
import OurTeam from '../../sections/Pages/OurTeam/OurTeam'
import Service from '../../sections/Pages/Service/Service'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



function Main() {
  return (
    <>
        <Header/>
        <Routes>
          <Route exact path='/' Component={Hero} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/Causes' Component={Causes} />
          <Route exact path='/contact' Component={Contact} />
          <Route exact path='/donate' Component={Donate} />
          <Route exact path='/ErrorPage' Component={ErrorPage} />
          <Route exact path='/OurTeam' Component={OurTeam} />
          <Route exact path='/Service' Component={Service} />
          <Route exact path='/Testimonial' Component={Testimonial} />
        </Routes>
        <Footer/>
    </>
  )
}

export default Main