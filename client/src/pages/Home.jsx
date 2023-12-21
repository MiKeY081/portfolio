import React from 'react'
import Main from '../Components/Main'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='scroll-smooth'>
    <Header/>
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
    <Footer/>
    </div>
  )
}

export default Home