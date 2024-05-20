import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (

    <div id='home' className='hero'>
      <img src={profile_img} alt="Space for Main profile image" />
      <h2><span>I'm Akhil,</span> web developer based in India.</h2>
      <p>Experienced web developer specializing in front-end and back-end technologies. Skilled in creating responsive and user-friendly web applications using HTML, CSS, JavaScript, and modern frameworks. Passionate about solving complex problems and delivering high-quality code. Dedicated to staying updated with industry trends and best practices in web development.</p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>

    </div>
  )
}

export default Hero
