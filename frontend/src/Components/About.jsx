import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      className={`about px-8 lg:mb-8 sm:mb-4 sm:px-16 lg:px-20 rounded-md shadow-md overflow-hidden`}
    >
      <h2 className='text-4xl sm:text-4xl lg:text-6xl font-semibold mb-8 text-center'>
        About Me
      </h2>
      <div className='flex flex-col lg:flex-row items-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, left: "-200px" }}
          whileInView={{ opacity: 1, scale: 1, left: "0px" }}
          transition={{ duration: 0.6 }}
          className='w-full lg:w-2/5 mb-8 lg:mb-0 flex justify-center items-center relative'
        >
          <img
            src='/photos/aboutimage.jpg'
            alt=''
            className='relative w-full max-w-xs md:max-w-md lg:max-w-full rounded-full h-full'
          />
        </motion.div>
        <motion.div
          className='p-4 text-base sm:text-lg lg:text-xl w-full lg:w-3/5 flex items-start justify-center lg:justify-start flex-col relative'
          initial={{ opacity: 0, left: "200px" }}
          whileInView={{ opacity: 1, left: "0px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            bounce: 1,
          }}
        >
          <p className='mb-4 text-white'>
            Myself <span className='text-xl font-semibold'>Madhu Kunwar. </span>
            I was born in Gulmi, Nepal, in a hilly region, and that's where I
            was raised. Currently, I am pursuing my bachelor's degree in
            Software Engineering, with a keen interest in choosing between
            frontend, backend, or full-stack development.
          </p>
          <p className='mb-4 text-white'>
            In my academic journey, I've gained skills in frontend technologies
            such as React, Next.js, HTML, CSS, and Tailwind. On the backend, I'm
            familiar with Mongoose, Prisma, MongoDB, and Node.js.
          </p>
          <p className='mb-4 text-white'>
            While I don't have specific passions, I aspire to contribute to my
            nation and the human existence through the skills I am acquiring. My
            hobbies include exploring the realms of cybersecurity and web
            development. I'm also a chess enthusiast.
          </p>
          <p className='mb-4 text-white'>
            I draw inspiration from the divine and aim to live my life to the
            fullest. My philosophy is{" "}
            <span className='text-xl'>"Loose it to grab it"</span>.
          </p>
          <p className='text-white'>
            Let's connect and explore the infinite possibilities that technology
            offers to make a positive impact on the world!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
