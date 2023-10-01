import React from 'react'
import './Footer.css'
import { Email, Facebook, LinkedIn, LocationCity, Phone, Twitter, YouTube } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Button } from '@mui/material'


function Footer() {
  return (
    <>
      <footer className="section footer-section">
        <div className="footer-section-container">

          <div className="footer-section-container-block">

            <div className="footer-section-container-block-div">
              <div className="header-section-container-logo">
                <span><span>Chari</span>Team</span>
              </div>
              <div className="footer-section-container-block-div-body">
                <p>
                  Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                </p>
                <div className="footer-contact-icon">
                  <a href="#"><Twitter /></a>
                  <a href="#"><Facebook /></a>
                  <a href="#"><YouTube /></a>
                  <a href="#"><LinkedIn /></a>
                </div>
              </div>
            </div>

            <div className="footer-section-container-block-div">
              <div className="footer-section-container-block-div-head">
                <h1>Address</h1>
              </div>
              <div className="footer-section-container-block-div-body">
                <span><LocationCity /> Algerai, Batna, Kechida </span>
                <span><Phone /> +213675024524</span>
                <span><Phone /> +213556573881</span>
                <span><Email /> khalfi.aymen2021@gmail.com</span>
              </div>

            </div>
          </div>


          <div className="footer-section-container-block">

            <div className="footer-section-container-block-div">
              <div className="footer-section-container-block-div-head">
                <h1>Quick Links</h1>
              </div>
              <div className="footer-section-container-block-div-body">
                <ul>
                  <li><Link to={'/about'} ><KeyboardArrowRightIcon /> About Us</Link></li>
                  <li><Link to={'/contact'} ><KeyboardArrowRightIcon /> Contact Us</Link></li>
                  <li><Link to={'/Service'} ><KeyboardArrowRightIcon /> Our services</Link></li>
                  <li><Link to={'/Term&Conditoin'} ><KeyboardArrowRightIcon /> Term & Conditoin</Link></li>
                  <li><Link to={'/Term & Conditoin'} ><KeyboardArrowRightIcon /> Support</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-section-container-block-div">
            <div className="footer-section-container-block-div-head">
                <h1>Newsletter</h1>
              </div>
              <div className="footer-section-container-block-div-body">
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <form>
                <input type="email" placeholder='Your Email' required />
                <Button className='button-orange' type='submit' >SignIn</Button>
              </form>
              </div>
            </div>
          </div>
        </div>
        <div className='hr'/>
        <div className="footer-section-rights">
          <p>@ <span>Khalfi Aymen</span>,  All Right Reserved.</p>
          <p>Designed By <span>Khalfi Aymen</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer