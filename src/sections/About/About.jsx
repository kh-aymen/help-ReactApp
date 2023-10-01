import React from 'react'
import BigHeader from '../../components/BigHeader/BigHeader'
import data from '../../constants/data'
import images from '../../constants/images'
import SubHeader from '../../components/SubHeader/SubHeader'
import './About.css'
import { Button } from '@mui/material'
import { ArrowCircleRight, Facebook, GitHub, Instagram } from '@mui/icons-material'


export function AboutSection() {
  return (
    <>
      <section className="section flexCenter about-section">
        <div className="about-section-left" data-aos="fade-right" data-aos-duration="2000">
          <div className="img-container">
            <img src={images.about} alt="" />
          </div>
        </div>
        <div className="flexColCenter about-section-right" data-aos="fade-left" data-aos-duration="2000">
          <SubHeader title='About Us' body={data.about.title} />
          <div className="about-section-right-founder">
            <div>
              <p>{data.about.body1}</p>
              <span>{data.about.Founder}</span>
            </div>
            <p className="p">{data.about.body2}</p>
          </div>

          <div className="about-section-right-buttons">
            <Button className='button-orange'>Learn More <ArrowCircleRight /></Button>
            <Button className='button-white'>Contact Us <ArrowCircleRight /></Button>
          </div>

        </div>
      </section>
    </>
  )
}

export function WhatWeDo() {
  return (
    <>
      <section className="section flexColCenter whatwedosection">
        <div className="flexColCenter whatwedosessction-header">
          <SubHeader title={'What we do'} body={'Learn More What We Do And Get Involved'} />
        </div>
        <div className="whatwedosessction-card">
          {
            data.WhatWeDo.card.map((item, index) => {
              return (<>
                <div key={item.id + index} className="whatwedosessction-card-item" data-aos="fade-up" data-aos-duration={item.duration}>
                  {item.icon}
                  <h1>{item.title}</h1>
                  <p className="p">{item.body}</p>
                  <Button className='button-white'>Learn More <ArrowCircleRight /></Button>
                </div>
              </>)
            })
          }
        </div>
      </section>
    </>
  )
}

export function TeamMembers() {
  return (
    <>
      <section className="section flecColCenter teammembers-section" >
        <div className="whatwedosessction-header">
          <SubHeader title='Team Members' body={`Let's Meet With Our Ordinary Soldiers`} />
        </div>
        <div className="teammembers-section-card">
          {data.ourteam.card.map((item) => {
            return (
              <>
                <div key={item.id} className="teammembers-section-card-item">
                  <img src={item.image} alt="" />
                  <div>
                    <h2>{item.name}</h2>
                    <span>{item.job}</span>
                    <div className="contact-icons">
                      <a href="khalfi.com"><Facebook /></a>
                      <a href="khalfi.com"><GitHub /></a>
                      <a href="khalfi.com"><Instagram /></a>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}


function About() {
  return (
    <>
      <BigHeader title={'About Us'} />
      <AboutSection />
      <WhatWeDo />
      <TeamMembers />
    </>
  )
}


export default About