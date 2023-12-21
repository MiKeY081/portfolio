import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
export function Card({ project, index }) {
  return (
    <div
      // initial={{ opacity: 0, scale: 0, x: -700 }}
      // whileInView={{ opacity: 1, scale: 1, x: 10 }}
      // transition={{ duration: (index+1)/5}}
      // exit={{ opacity: 0, scale: 0, x: -700 }}
      className="relative h-[400px] w-[300px] rounded-md"
    >
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt={project.title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{project.title}</h1>
        <p className="mt-2 text-sm text-gray-300">{project.description}</p>
        <Link
          href={project.link}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
        >
          Visit Link &rarr;
        </Link>
      </div>
    </div>
  );
}
