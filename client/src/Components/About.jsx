// AboutMe.js

import React, { useEffect, useState } from "react";
import {  motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      className={`about min-h-screen pt-16 pb-16 px-20 bg-gray-100 rounded-md shadow-md`}
    >
      <h2 className="text-3xl font-semibold mb-16 text-center">About Me</h2>
     
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -700 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{once:true}}
        className="con text-xl"
      >
        <p className="mb-4 ">
          I was born in Gulmi, Nepal, in a hilly region, and that's where I was
          raised. Currently, I am pursuing my bachelor's degree in Software
          Engineering, with a keen interest in choosing between frontend,
          backend, or full-stack development.
        </p>
        <p className="mb-4">
          In my academic journey, I've gained skills in frontend technologies
          such as React, Next.js, HTML, CSS, and Tailwind. On the backend, I'm
          familiar with Mongoose, Prisma, MongoDB, and Node.js.
        </p>
        <p className="mb-4">
          While I don't have specific passions, I aspire to contribute to my
          nation and the human existence through the skills I am acquiring. My
          hobbies include exploring the realms of cybersecurity and web
          development. I'm also a chess enthusiast.
        </p>
        <p className="mb-4">
          I draw inspiration from the divine and aim to live my life to the
          fullest. My philosophy is to [you can add your own philosophy here].
        </p>
        <p>
          Let's connect and explore the infinite possibilities that technology
          offers to make a positive impact on the world!
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
