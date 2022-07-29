import React from 'react'
import Aboutus from '../components/Aboutus'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <Aboutus/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home