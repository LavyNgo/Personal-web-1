import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/portfolio`;
        navigate(path);
    }

    return (
        <section className="home-container">
            <div className="title">Welcome to My Photography</div>
            <div className="subtitle">Capturing Moments, One Shot at a Time</div>
            <button className="button" onClick={() => routeChange()}>View Portfolio</button>
            <div className="social-icons">
                <a href="https://www.instagram.com" target="_blank"><p>Instagram</p></a>
                <a href="https://www.twitter.com" target="_blank"><p>X</p></a>
                <a href="https://www.facebook.com" target="_blank"><p>Facebook</p></a>
            </div>
        </section>
    )
}

export default Home
