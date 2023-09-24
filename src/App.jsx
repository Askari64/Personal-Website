import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
   <Header/>
   <AboutMe/>
   <Services/>
   <Projects/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App