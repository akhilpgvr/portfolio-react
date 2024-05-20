import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/about_profile.jpg'

const About = () => {
    return (
        <div id = 'about' className='about'>
            <div className="about-title">
                <h2>About Me</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_image} alt="Space for sub profile image" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Passionate full stack developer showcasing expertise in front-end and back-end development.</p>
                        <p>Committed full stack developer demonstrating loyalty and integrity in every project undertaken.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Springboot</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>javaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Docker & K8s</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h2>1.5+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                    <hr/>
                </div>
                <div className="about-achievement">
                    <h2>10+</h2>
                    <p>PROJECT COMPLETION</p>
                    <hr/>
                </div>
                <div className="about-achievement">
                    <h2>20+</h2>
                    <p>BOOKS REFERRED</p>
                    <hr/>
                </div>
            </div>

        </div>
    )
}

export default About
