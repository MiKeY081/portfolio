import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, message);
    try {
      const { data } = await axios.post("/message/create", {
        name,
        email,
        message,
      });
      if (data.success) {
        toast.success(data.message);
      } else {
        console.log(data.createdMessage);
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    } finally {
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className='contact sm:p-12 md:p-16 mt-12' id='contact'>
      <h2 className='text-4xl sm:text-5xl lg:text-6xl font-semibold mb-10 text-center text-white'>
        Contact Me
      </h2>
      <div className='flex flex-col justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, left: "-200px" }}
          whileInView={{ opacity: 1, scale: 1, left: "0px" }}
          transition={{ duration: 0.6 }}
          className='relative w-full sm:w-1/2 mb-8 sm:mb-0'
        >
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className='py-4 px-2 lg:px-6 lg:py-12 rounded-lg shadow-md'
          >
            <h2 className='text-2xl text-green-600 mb-20'>
              Have or question or want to work together ?
            </h2>
            <div className='mb-4 relative'>
              <label
                htmlFor='name'
                className={`block text-lg font-medium text-gray-400 absolute top-1/2 left-2 transform -translate-y-1/2 transition-transform duration-100 
      ${name ? "-translate-y-8 scale-75" : ""}`}
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='p-2 w-full border border-gray-500 text-white outline-none rounded-md focus:outline-none bg-gray-36'
              />
            </div>

            <div className=' relative mb-4'>
              <label
                htmlFor='email'
                className={`text-lg font-medium text-gray-400 absolute top-1/2 left-2 transform -translate-y-1/2 transition-transform duration-100
                 ${email ? "-translate-y-8 scale-75" : ""}`}
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-2 w-full border border-gray-500 text-white outline-none rounded-md focus:outline-none bg-gray-36'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className={`text-lg font-medium text-gray-400 absolute top-8 left-2 transform -translate-y-1/2 transition-transform duration-100 
      ${message ? "-translate-y-9 scale-75" : ""}`}
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=' p-2 pt-4 w-full border border-gray-500 text-white outline-none rounded-md focus:outline-none bg-gray-36'
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300'
            >
              Submit
            </button>
          </form>
        </motion.div>
        {/* <div className='flex justify-around lg:flex-row sm:gap-32  md:justify-center items-center gap-4 w-full sm:w-1/2'>
          <a
            href='https://res.cloudinary.com/deqtuwtw5/image/upload/v1703339507/qdnczcsag3c9xw5jfzix.png'
            className='bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            View CV
          </a>
          <a
            href='mailto:kcmadhu081@gmail.com'
            className='bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Hire Me
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
