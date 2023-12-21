// AboutMe.js

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      className={`about min-h-screen pt-16 pb-16 px-20 bg-gray-100 rounded-md shadow-md`}
    >
      <h2 className="text-3xl font-semibold mb-16 text-center">About Me</h2>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -700 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="con text-xl"
        >
            <p className="mb-4 ">
              I was born in Gulmi, Nepal, in a hilly region, and that's where I
              was raised. Currently, I am pursuing my bachelor's degree in
              Software Engineering, with a keen interest in choosing between
              frontend, backend, or full-stack development.
            </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AboutMe;
