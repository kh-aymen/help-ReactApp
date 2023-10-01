import React from 'react'
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../constants/data'
import { ArrowCircleRight } from '@mui/icons-material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { AboutSection, TeamMembers, WhatWeDo } from '../About/About'
import { CausesFunc } from '../Causes/Causes'
import { DonateFunc } from '../Pages/Donate/Donate'
import { Testimonailfunc } from '../Pages/Testimonial/Testimonail'

function Hero() {
  const { hero } = data

  return (
    <>
      <section className="hero-section">
        <Swiper
          slidesPerView={1}
          loop={true}
          className="mySwiper"
        >
          <SlideNextButton />
          <SwiperSlide className="mySwiperSlide mySwiperSlide1">
            <h1>{hero.title1}</h1>
            <p>{hero.body1}</p>
            <button className="button-orange">Learn More <ArrowCircleRight /></button>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide mySwiperSlide2">
            <h1>{hero.title2}</h1>
            <p>{hero.body2}</p>
            <button className="button-orange">Learn More <ArrowCircleRight /></button>
          </SwiperSlide>
        </Swiper>
      </section>

      <AboutSection />
      <CausesFunc />
      <WhatWeDo />
      <DonateFunc />
      <TeamMembers/>
      <Testimonailfunc/>
    </>
  )
}


function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <>
      <button className='btn-swiper btn-swiper-left' onClick={() => swiper.slidePrev()}><KeyboardArrowLeftIcon /></button>
      <button className='btn-swiper btn-swiper-right' onClick={() => swiper.slideNext()}><KeyboardArrowRightIcon /></button>
    </>
  )
}

export default Hero