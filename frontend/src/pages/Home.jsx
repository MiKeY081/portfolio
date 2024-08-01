import React, { useEffect, useState } from "react";
import Main from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import ScrollToTopButton from "../assets/Hammer";
import Skills from "../Components/Skills";
import { RingLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <div className='grid place-items-center w-screen h-screen'>
      <RingLoader color='#11ff00' />
    </div>
  ) : (
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
