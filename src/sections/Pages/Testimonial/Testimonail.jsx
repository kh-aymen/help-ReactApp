import React from 'react'
import BigHeader from '../../../components/BigHeader/BigHeader'
import SubHeader from '../../../components/SubHeader/SubHeader'
import './Testimonail.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper/modules';
import data from '../../../constants/data'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useSwiper } from 'swiper/react';

function Testimonail() {
  return (
    <>
      <BigHeader title={'Testimonail'} />
      <Testimonailfunc/>
    </>
  )
}


export function Testimonailfunc() {
  return (
    <>
      <section className="section testimonail-section">
        <div className="flexColCenter whatwedosessction-header">
          <SubHeader title={'Testimonial'} body={'Trusted By Thousands Of People And Nonprofits'} />
        </div>
        <div className="testimonail-section-container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            slidesPerView={'auto'}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 60,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {
              data.testimonial.card.map((item) => {
                return (
                  <>
                    <SwiperSlide key={item.id} >
                      <SlideNextButton />
                      <div className="swiper-content" >
                        <div className="swiper-image">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="swiper-body">
                          <p className='p'>{item.body}</p>
                          <h1>{item.name}</h1>
                          <h3>{item.job}</h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })
            }

          </Swiper>
        </div>
      </section>
    </>
  )
}


function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <>
      <button className='btn btn-left' onClick={() => swiper.slidePrev()}><AiOutlineArrowLeft /></button>
      <button className='btn btn-right' onClick={() => swiper.slideNext()}><AiOutlineArrowRight /></button>
    </>
  )
}

export default Testimonail