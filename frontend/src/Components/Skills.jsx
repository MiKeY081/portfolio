import React from "react";
import { motion } from "framer-motion";

//Skills page
const Skills = () => {
  //level of skills acquired
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "NextJs", level: 85 },
    { name: "NodeJs", level: 90 },
    { name: "Mongoose, Prisma", level: 80 },
    { name: "C, C++", level: 85 },
    { name: "Java", level: 75 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 85 },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-4xl font-bold flex justify-center items-center w-full h-full mb-10'>
        Skills
      </div>
      <div>
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, right: "-200px" }}
            whileInView={{ opacity: 1, scale: 1, right: "0px" }}
            transition={{
              duration: 0.3,
              delay: 0.1 + { index } / 10,
            }}
            key={skill.name}
            className='grid grid-cols-2 gap-2 mb-4 rounded-full '
          >
            <div className='text-xl whitespace-nowrapher'>{skill.name}</div>
            <div className='flex items-center md:w-96 w-40 bg-green-900 rounded-full overflow-hidden'>
              <div
                style={{ width: `${skill.level}%` }}
                className='bg-green-500 h-full rounded-sm'
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
