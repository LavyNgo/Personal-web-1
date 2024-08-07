import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './BackToTopBtn.css'

const BackToTopBtn = () => {

    const [showBackToTop, setShowBackToTop] = useState(false)

    // const handleScroll = () => {
    //     if (window.scrollY > 100) {
    //         setShowBackToTop(true)
    //     } else {
    //         setShowBackToTop(false)
    //     }
    // }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowBackToTop(true)
            } else {
                setShowBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {showBackToTop && (
                <div className="back-to-top" onClick={() => scrollUp()}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            )}
        </>
    )
}

export default BackToTopBtn
