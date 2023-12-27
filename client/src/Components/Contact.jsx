import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact bg-black p-6 sm:p-12 md:p-16 pt-16 min-h-screen min-w-screen" id="contact">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-10 text-center text-white">Contact Me</h2>
      <div className="flex flex-col sm:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0, left: "-200px" }}
          whileInView={{ opacity: 1, scale: 1, left: "0px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full sm:w-1/2 mb-8 sm:mb-0"
        >
          <form className="relative p-4 sm:p-8 lg:px-20 rounded-lg shadow-md bg-slate-800">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-500 text-white outline-none rounded-md focus:outline-none bg-slate-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-500 text-white outline-none rounded-md focus:outline-none bg-slate-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border border-gray-500 text-white outline-none rounded-md focus:outline-none bg-slate-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
        <div className="flex flex-col lg:flex-row sm:gap-32  justify-center items-center gap-4 w-full sm:w-1/2">
          <a
            href="https://res.cloudinary.com/deqtuwtw5/image/upload/v1703339507/qdnczcsag3c9xw5jfzix.png"
            className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
          <a
            href="mailto:kcmadhu081@gmail.com"
            className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
