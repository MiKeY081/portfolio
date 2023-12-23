import React from "react";

const Contact = () => {
  return (
    <div className="contact bg-black p-12 pt-16 min-h-screen min-w-screen" id="contact">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
      <div className="flex">
        <form className="w-1/2  p-8 lg:px-20 rounded-lg shadow-md ">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 bg-slate-500 p-2 w-full border text-white outline-none  border-gray-500 rounded-md focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 bg-slate-500 p-2 w-full border border-gray-500 text-white outline-none  rounded-md focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium ">
            
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 bg-slate-500 p-2 w-full border border-gray-500 rounded-md focus:outline-none  text-white outline-none "
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600  px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
        <div className="flex lg:flex-row flex-col justify-center  items-center gap-20 w-1/2 ">
          <a
            href=""
            className="bg-green-600  px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            View CV{" "}
          </a>
          <a
            href="mailto:kcmadhu081@gmail.com"
            className="bg-green-600  px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
