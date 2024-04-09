import React from "react";
import Main from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div className='scroll-smooth'>
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
