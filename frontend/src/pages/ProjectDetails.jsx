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
      <div className='p-8 bg-green-500 rounded-lg shadow-xl flex md:p-12'>
        <div className='relative w-full md:w-2/3'>
          <Swiper
            className='w-full h-96 md:h-auto'
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
                <div className=''>
                  <img
                    src={image}
                    className='w-full h-full object-cover rounded-lg'
                    alt={`Project Slide ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full md:w-1/3 md:pl-8'>
          <h2 className='text-3xl font-bold text-black mb-4'>
            {project.title}
          </h2>
          <p className='text-lg text-black mb-6'>{project.description}</p>
          <div className='flex flex-col gap-4 text-xl text-black mb-6'>
            <p className='font-semibold'>Description</p>
            <p>{project.moreDescription}</p>
          </div>
          <div className='flex justify-between'>
            <a
              href={project.link}
              className='flex items-center text-black hover:text-green-300 transition duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiExternalLink className='mr-2' />
              <span className='text-lg'>Visit Website</span>
            </a>
            <a
              href={project.github}
              className='flex items-center text-black hover:text-green-300 transition duration-300'
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
