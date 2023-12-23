import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export function Card({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: "-200px" }}
      whileInView={{ opacity: 1, bottom: "0px" }}
      transition={{
        duration: 0.5,
        delay: (index + 4) / 10,
        bounce: 1,
      }}
      className="relative h-[400px] w-[300px] rounded-md"
    >
      <img
        src={project.image}
        alt={project.title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{project.title}</h1>
        <p className="mt-2 text-sm text-gray-300 line-clamp-2">
          {project.description}
        </p>
        <Link
          to={project.link}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
          target="blank"
        >
          Visit Link &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
