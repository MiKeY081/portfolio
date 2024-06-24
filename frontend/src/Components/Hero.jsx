import React from "react";
import mikeyImage from "../../public/photos/mikie.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "../App.css";
import {
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  return (
    <div className=' main px-20 max-w-screen flex lg:flex-row-reverse flex-col  overflow-hidden mb-10'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, right: "-200px" }}
        whileInView={{ opacity: 1, scale: 1, right: "0px" }}
        transition={{ duration: 0.3 }}
        className='home right lg:h-screen flex justify-center items-center relative'
      >
        <img
          src={mikeyImage}
          alt=''
          className='relative lg:h-screen lg:scale-150 -top-20 '
        />
      </motion.div>
      <div className='left lg:w-2/3 font-bold flex flex-col justify-center items-start'>
        <h1 className='lg:text-5xl text-3xl'>Hello!!!</h1>
        <br />
        <div className='flex flex-col mb-16'>
          <span className='md:block font-semibold md:text-4xl  text-2xl md:whitespace-nowrap'>
            I am &nbsp;
          </span>
          <div className='inline-block text-green-600 hover:text-green-700  md:text-4xl  text-3xl '>
            <Typewriter
              options={{
                strings: [
                  "Madhu kunwar",
                  "A Web Developer",
                  "Software Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </div>
        </div>
        <div className='text-lg mb-8 text-start'>
          I am a passionate Software Engineering student specializing in Realm
          of Technology. Guided by a divine perspective, I enthusiastically
          explore the limitless potential that technology unfolds.
        </div>
        <a
          href='#contact'
          className='bg-green-600 text-white rounded-lg px-4 py-2 w-fit mt-5 mb-2 hover:bg-green-700 transition-all duration-300'
        >
          Contact Me
        </a>
        <div className='flex space-x-4'>
          <a
            href='mailto:your.kcmadhu081@gmail.com'
            className='contactIcons bottomLine'
          >
            <FaEnvelope />
          </a>
          <a
            href='https://www.facebook.com/Ryuga.081'
            target='_blank'
            rel='noopener noreferrer'
            className='contactIcons bottomLine'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/madhu_kunwar081'
            target='_blank'
            rel='noopener noreferrer'
            className='contactIcons bottomLine'
          >
            <FaInstagram />
          </a>
          <a
            href='https://github.com/MiKeY081'
            target='_blank'
            rel='noopener noreferrer'
            className='contactIcons bottomLine'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
