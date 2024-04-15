import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Card({ project, index }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, bottom: "-200px" }}
      whileInView={{ opacity: 1, bottom: "0px" }}
      transition={{
        duration: 0.3,
        delay: (index * 1.2 + 1) / 10,
        bounce: 1,
      }}
      className='relative h-[300px] w-[500px] rounded-md cursor-grab'
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className='h-full w-full rounded-md object-contain cursor-pointer'
      />

      <div
        className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'
        onClick={(e) => {
          navigate(`/project/${index}`);
        }}
      ></div>
      <div className='absolute bottom-4 left-4 text-left'>
        <h1 className='text-lg font-semibold text-white hover:text-blue-400 cursor-pointer'>
          {project.title}
        </h1>
        <p className='mt-2 text-sm text-gray-300 line-clamp-2'>
          {project.description}
        </p>
        <div className='flex gap-20'>
          <Link
            to={project.link}
            className='mt-2 w-24 justify-center inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-blue-400 bottomLine'
            target='blank'
          >
            Visit Link &nbsp; <FaExternalLinkAlt />
          </Link>
          <Link
            to={project.github}
            className='mt-2 w-24 justify-center inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-blue-400 bottomLine'
            target='blank'
          >
            View code &nbsp; <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
