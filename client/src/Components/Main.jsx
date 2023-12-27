import React from "react";
import mikeyImage from "../../public/photos/mikie.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  return (
    <div className=" main bg-black pt-16 px-20 pb-8 max-w-screen min-h-[100vh] flex lg:flex-row-reverse flex-col  overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0, right: "-200px" }}
        whileInView={{ opacity: 1, scale: 1, right: "0px" }}
        transition={{ duration: 0.6 }}
        className="home right lg:h-screen flex justify-center items-center relative"
      >
        <img
          src={mikeyImage}
          alt=""
          className="relative lg:h-screen lg:scale-150 -top-20 "
        />
      </motion.div>
      <div className="left lg:w-2/3 font-bold flex flex-col sm:text-center justify-center">
        <h1 className="text-5xl">Welcome!!!</h1>
        <br />
        <div className="flex items-center mb-16">
          <span className="font-semibold text-4xl whitespace-nowrap">
            I am &nbsp;
          </span>
          <div className="inline-block text-green-600 hover:text-green-700  text-6xl ">
            <Typewriter
              options={{
                strings: ["Madhu kunwar", "A Web Developer"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </div>
        </div>
        <div className="text-lg">
          I am a passionate Software Engineering student specializing in React,
          NextJs, JavaScript, Node.js, and MongoDB. Driven by inspiration drawn
          from the captivating worlds of cybersecurity and web development, my
          purpose is to make positive contributions to my nation and humanity.
          Fueled by a fervor for chess and guided by a divine perspective, I
          enthusiastically explore the limitless potential that technology
          unfolds.
        </div>
        <a
          href="#contact"
          className="bg-green-600 text-white rounded-lg px-4 py-2 w-fit mt-5 mb-2"
        >
          Contact Me
        </a>
        <div className="flex space-x-4">
          <a
            href="mailto:your.kcmadhu081@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/Ryuga.081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/madhu_kunwar081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/MiKeY081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
