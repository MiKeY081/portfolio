import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { z } from "zod";

const Contact = () => {
  // Zod schema for validation
  const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters"),
  });

  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    try {
      contactSchema.parse(formValues); // Validate formValues against the schema
      setErrors({});
      return true;
    } catch (validationError) {
      const errorMessages = validationError.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(errorMessages);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setDisabled(true);
    try {
      const { data } = await axios.post("/message/create", formValues);
      if (data.success) {
        toast.success(data.message);
        setFormValues({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="contact sm:p-12 md:p-16 mt-12" id="contact">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-10 text-center text-white">
        Contact Me
      </h2>
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, left: "-200px" }}
          whileInView={{ opacity: 1, scale: 1, left: "0px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full sm:w-1/2 mb-8 sm:mb-0"
        >
          <form onSubmit={handleSubmit} className="py-4 px-2 lg:px-6 lg:py-12 rounded-lg shadow-md">
            <h2 className="text-2xl text-green-600 mb-20">
              Have a question or want to work together?
            </h2>
            <div className="mb-4 relative">
              <label htmlFor="name" className="block text-lg font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="p-2 w-full border border-gray-500 text-white outline-none rounded-md bg-gray-36"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4 relative">
              <label htmlFor="email" className="block text-lg font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="p-2 w-full border border-gray-500 text-white outline-none rounded-md bg-gray-36"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formValues.message}
                onChange={handleChange}
                className="p-2 w-full border border-gray-500 text-white outline-none rounded-md bg-gray-36"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
              disabled={disabled}
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
