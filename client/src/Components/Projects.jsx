import React from "react";
import { Card } from "../assets/card";
import { projectData } from "../assets/constant";
const Projects = () => {
  const projects = projectData;
  return (
    <div className="projects pt-16 min-h-screen px-32 bg-black">
      <h1 className="text-center font-bold mb-20 text-6xl">My Projects</h1>
        <div
          className="grid grid-cols-3 gap-20 "
        >
            {projects.map((project, index) => (
              <Card project={project} key={index} index={index} />
            ))}
        </div>
    </div>
  );
};

export default Projects;
