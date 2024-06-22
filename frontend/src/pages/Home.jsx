import React from "react";
import Main from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import ScrollToTopButton from "../assets/Hammer";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div className='scroll-smooth w-screen overflow-hidden'>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
