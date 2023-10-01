import React from 'react'
import './Causes.css'
import BigHeader from '../../components/BigHeader/BigHeader'
import SubHeader from '../../components/SubHeader/SubHeader'
import data from '../../constants/data'
import { Button, Slider } from '@mui/material'
import { ArrowCircleRight } from '@mui/icons-material'

function Causes() {

  return (
    <>
      <BigHeader title={'Causes'} />
      <CausesFunc />
    </>
  )
}


export function CausesFunc() {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '100',
    }
  ]

  function valuetext() {
    return `90%`;
  }
  return (
    <>
      <section className="section causes-section">
        <SubHeader title='Feature Causes' body='Every Child Deserves The Opportunity To Learn' />
        <div className="causes-section-cards">
          {
            data.couses.card.map((item) => {
              return (
                <div className="causes-section-container-item" key={item.id} data-aos="fade-up" data-aos-duration={item.duration}>
                  <div className="causes-section-container-item-text">
                    <span> {item.subject} </span>
                    <h2> {item.title} </h2>
                    <p className="p"> {item.body} </p>
                    <div className="slider">
                      <div>
                        <span><span>{item.raised} </span>Raised</span>
                        <span><span>{item.goal} </span>Goal</span>
                      </div>
                      <Slider
                        aria-label="Custom marks"
                        value={90}
                        getAriaValueText={valuetext}
                        step={5}
                        valueLabelDisplay="auto"
                        disabled={false}
                        marks={marks}
                        color='primary'
                      />
                    </div>
                  </div>
                  <div className="causes-section-container-item-image">
                    <img src={item.imageurl} alt="" />
                    <div>
                      <Button className='button-white' >Read More <ArrowCircleRight /></Button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section></>
  )
}



export default Causes