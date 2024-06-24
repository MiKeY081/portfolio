import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../assets/constant";
import { FiExternalLink, FiGithub } from "react-icons/fi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const ProjectDetails = () => {
  const { index } = useParams();
  const project = projectData[index];

  return (
    <div className='bg-black min-h-screen flex items-center justify-center '>
      <div className='py-8 px-4 bg-black rounded-lg shadow-xl flex lg:flex-row flex-col text-white'>
        <div className='relative w-full lg:w-2/3'>
          <Swiper
            className='md:h-[500px] md:w-[800px] w-80 h-96 mb-4 md:mb-0 bg-black text-white rounded-lg'
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectFade,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect='fade'
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  className='w-full h-full object-cover rounded-lg'
                  alt={`Project Slide ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full md:w-1/3 md:pl-8'>
          <h2 className='text-3xl font-bold  mb-2'>{project.title}</h2>
          <div className='flex flex-col items-start gap-4 mb-4'>
            <h3 className='text-xl font-semibold  mb-2'>Technologies</h3>
            <p className='text-lg '>{project.description}</p>
            <p className='text-md font-bold'>Complexity level:</p>
            <div className='flex flex-wrap gap-4'>
              {project.technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className='grid grid-cols-2 mb-4 rounded-full w-full'
                >
                  <div className='text-xl'>{tech.name}</div>
                  <div className='flex items-center w-full bg-green-900 rounded-full overflow-hidden'>
                    <div
                      style={{ width: `${tech.level}%` }}
                      className='bg-green-500 h-full '
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 text-xl  mb-6'>
            <p className='font-semibold'>Description</p>
            <p>{project.moreDescription}</p>
          </div>
          <div className='flex justify-between'>
            <a
              href={project.link}
              className='flex items-center  hover:text-green-300 transition duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiExternalLink className='mr-2' />
              <span className='text-lg text-green-600'>Visit Website</span>
            </a>
            <a
              href={project.github}
              className='flex items-center  hover:text-green-300 transition duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiGithub className='mr-2' />
              <span className='text-lg'> GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
