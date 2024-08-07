import './Navbar.css'
import logo_light from '../../assets/logo-white-trans.png'
import logo_dark from '../../assets/logo-black-trans.png'
import toggle_light from '../../assets/day.png'
import toggle_dark from '../../assets/night.png'
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <section className="navbar-container">
            <Link to="/home">
                <img src={theme == 'light' ? logo_light : logo_dark} alt="" className="logo" />
            </Link>
            <nav className="navbar">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <img alt="" className="toggle-icon" onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_dark : toggle_light} />
        </section>
    )
}

export default Navbar
