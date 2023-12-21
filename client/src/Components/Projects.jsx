import React from "react";
import { Card } from "../assets/card";
import { AnimatePresence, motion } from "framer-motion";
import { projectData } from "../assets/constant";
const Projects = () => {
  const projects = projectData;
  return (
    <div className="projects pt-16 min-h-screen px-32 ">
      <h1 className="text-3xl text-center font-bold mb-20">My Projects</h1>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -700 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-20 "
        >
          <div>
            {projects.map((project, index) => (
              <Card project={project} key={index} index={index} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
