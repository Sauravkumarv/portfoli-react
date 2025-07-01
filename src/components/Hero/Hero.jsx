import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import sauravImage from '../../assets/sauravImage.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={sauravImage} alt="" />
      <h1><span>I,m Saurav,</span>Java full stack Developer in India.</h1>
      <p> "Where Clients Meet Their Expectations — and Beyond." Let’s build something amazing together. 💼</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
