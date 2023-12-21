import React from "react";
import mikeyImage from "../assets/photos/mikie.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className=" main pt-16 px-20 max-w-screen h-[100vh] flex bg-gradient-to-r from-slate-400 to-black p-4">
      <div className="left w-2/3 text-3xl font-bold flex flex-col justify-center">
        <h1>Welcome!!!</h1>
        <br />
        <div className="flex flex-nowrap">
          <span className="font-semibold">I am &nbsp;</span>
          <div className="inline-block text-green-500 text-3xl">
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
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -700 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="home right h-screen flex justify-center items-center"
      >
        <img src={mikeyImage} alt="" className="relative -top-20 h-screen" />
      </motion.div>
    </div>
  );
};

export default Main;
