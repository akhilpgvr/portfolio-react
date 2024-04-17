import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Space for Main profile image" />
      <h2><span>I'm Akhil,</span> web developer based in India.</h2>
      <p>Experienced web developer specializing in front-end and back-end technologies. Skilled in creating responsive and user-friendly web applications using HTML, CSS, JavaScript, and modern frameworks. Passionate about solving complex problems and delivering high-quality code. Dedicated to staying updated with industry trends and best practices in web development.</p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>

    </div>
  )
}

export default Hero
