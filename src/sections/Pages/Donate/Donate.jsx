import React from 'react'
import BigHeader from '../../../components/BigHeader/BigHeader'
import SubHeader from '../../../components/SubHeader/SubHeader'
import './Donate.css'
import { Button, TextField } from '@mui/material'
import { ArrowCircleRight } from '@mui/icons-material'

function Donate() {
  return (
    <>
      <BigHeader title={'Donate'} />
     <DonateFunc/>
    </>
  )
}
export function DonateFunc() {
  return (
    <>
      <section className="section flexCenter donate-section">
        <div className="donate-section-left" data-aos="fade-right" data-aos-duration="2000">
          <SubHeader title='Donate Now' body='Thanks For The Results Achieved With You' />
          <p className="p" >Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        </div>
        <div className="donate-section-right" data-aos="fade-left" data-aos-duration="2000">
          <form>
            <TextField variant='filled' type='text' label='Your Name' required/>
            <TextField variant='filled' type='email' label='Your Email' required/>
            <TextField variant='filled' type='number' label='Donate $' minRows={0} required/>
            <Button className='button-orange' type='submit'>Donate Now <ArrowCircleRight/></Button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Donate