import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {

  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light')

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

        {/* default route */}
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
