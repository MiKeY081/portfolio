import React from "react";
import { Card } from "../assets/ProjectCard";
import { projectData } from "../assets/constant";

const Projects = () => {
  const projects = projectData;

  return (
    <div className="projects pt-16 min-h-screen px-6 sm:px-10 md:px-16 lg:px-32 bg-black">
      <h1 className="text-center font-bold mb-10 text-4xl sm:text-5xl lg:text-6xl text-white">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <Card project={project} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
