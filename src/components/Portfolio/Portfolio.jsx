import './Portfolio.css'
import React from 'react'
import BackToTopBtn from '../BackToTop/BackToTopBtn'
import photo1 from '../../assets/lameo/lameo1.jpg'
import photo2 from '../../assets/lameo/lameo4.jpg'
import { lameo1, lameo2, lameo3, lameo4, lameo5, lameo6, lameo7, lameo8, lameo9 } from '../../assets'
import { animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10 } from '../../assets'
import { sky1, cas1, cas2, cas3, cas4, branson1, branson2, branson3, branson4, branson5, fes1, fes2, fes3, fes4 } from '../../assets'

const Portfolio = () => {
    return (
        <section className="portfolio-container">
            <div className="topic-wrapper">
                <h1>My Lovely Cat ...</h1>
                <div className="gallery-row">
                    <div className="gallery-column">
                        <img src={lameo1} alt="Gallery Image 1" />
                        <img src={lameo4} alt="Gallery Image 1" />
                    </div>
                    <div className="gallery-column">
                        <img src={lameo9} alt="Gallery Image 1" />
                        <img src={lameo2} alt="Gallery Image 1" />
                    </div>
                    <div className="gallery-column">
                        <img src={lameo8} alt="Gallery Image 1" />
                        <img src={lameo5} alt="Gallery Image 1" />
                        <img src={lameo7} alt="Gallery Image 1" />
                    </div>
                    <div className="gallery-column">
                        <img src={lameo6} alt="Gallery Image 1" />
                        <img src={lameo3} alt="Gallery Image 1" />
                    </div>
                </div>
            </div>
            <div className="topic-wrapper">
                <h1>Animals ...</h1>
                <div className="gallery-row">
                    <div className="gallery-column">
                        <img src={animal1} alt="Gallery Image 2" />
                        <img src={animal2} alt="Gallery Image 2" />
                        <img src={animal3} alt="Gallery Image 2" />
                    </div>
                    <div className="gallery-column">
                        <img src={animal4} alt="Gallery Image 2" />
                        <img src={animal5} alt="Gallery Image 2" />
                    </div>
                    <div className="gallery-column">
                        <img src={animal6} alt="Gallery Image 2" />
                        <img src={animal10} alt="Gallery Image 2" />
                    </div>
                    <div className="gallery-column">
                        <img src={animal7} alt="Gallery Image 2" />
                        <img src={animal8} alt="Gallery Image 2" />
                        <img src={animal9} alt="Gallery Image 2" />
                    </div>
                </div>
            </div>
            <div className="topic-wrapper">
                <h1>Casual ...</h1>
                <div className="gallery-row">
                    <div className="gallery-column">
                        <img src={cas1} alt="Gallery Image 3" />
                        <img src={cas2} alt="Gallery Image 3" />
                        <img src={cas3} alt="Gallery Image 3" />
                    </div>
                    <div className="gallery-column">
                        <img src={fes1} alt="Gallery Image 3" />
                        <img src={fes2} alt="Gallery Image 3" />
                    </div>
                    <div className="gallery-column">
                        <img src={branson1} alt="Gallery Image 3" />
                        <img src={fes3} alt="Gallery Image 3" />
                        <img src={branson2} alt="Gallery Image 3" />
                    </div>
                    <div className="gallery-column">
                        <img src={fes4} alt="Gallery Image 3" />
                        <img src={branson4} alt="Gallery Image 3" />
                        <img src={branson5} alt="Gallery Image 3" />
                        <img src={branson3} alt="Gallery Image 3" />
                    </div>
                </div>
            </div>
            <BackToTopBtn />

        </section>
    )
}

export default Portfolio


