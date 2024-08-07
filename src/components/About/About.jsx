import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import hero from '../../assets/hero1.jpg'
import { animal5, branson5, sky1, cas2, branson7, lameo4 } from '../../assets'
import React, { useState, useEffect } from 'react'
import BackToTopBtn from '../BackToTop/BackToTopBtn'


const About = () => {

    return (
        <section className="about-container">
            <div className="content">
                <img src={hero} alt="Your Name" className="photo" />
                <h1>Lavy Ngo</h1>
                <p>
                    Welcome to my photography world! I am a passionate photographer with a love for capturing the beauty of everyday moments. Whether it's a stunning landscape, a candid portrait, or an intricate detail, I strive to tell a story through my lens.
                </p>
                <br />
                <p>
                    My journey in photography began several years ago, and it has been a fulfilling adventure ever since. I believe that each photograph holds a unique narrative, and I am dedicated to sharing these stories with you.
                </p>

                <div className="social-links">
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
            <div className="gallery">
                <h2>My favorites...</h2>
                <div className="img-wrapper">
                    <img src={animal5} alt="Gallery 1" />
                    <img src={branson5} alt="Gallery 2" />
                    <img src={sky1} alt="Gallery 3" />
                    <img src={branson7} alt="Gallery 4" />
                    <img src={cas2} alt="Gallery 5" />
                    <img src={lameo4} alt="Gallery 6" />
                </div>
            </div>

            <BackToTopBtn />
        </section>
    )
}

export default About
