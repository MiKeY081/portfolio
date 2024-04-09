import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const handleToAdminLoginPage = (e) => {
    e.preventDefault();
    navigate("/admin/login");
  };

  return (
    <footer className='bg-gray-800 text-white py-4 '>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex justify-center items-center gap-4'>
          <p className='text-sm'>Connect with me:</p>
          <div className='flex space-x-4'>
            <a
              href='https://www.youtube.com/channel/UCKRVpjLlFBLLXm-QAhDbkSg'
              target='_blank'
              rel='noopener noreferrer'
              className='contactIcons bottomLine'
            >
              <FaYoutube />
            </a>
            <a
              href='mailto:your.kcmadhu081@gmail.com'
              className='contactIcons bottomLine'
            >
              <FaEnvelope />
            </a>
            <a
              href='https://www.facebook.com/Ryuga.081'
              target='_blank'
              rel='noopener noreferrer'
              className='contactIcons bottomLine'
            >
              <FaFacebook />
            </a>
            <a
              href='https://www.instagram.com/madhu_kunwar081'
              target='_blank'
              rel='noopener noreferrer'
              className='contactIcons bottomLine'
            >
              <FaInstagram />
            </a>
            <a
              href='https://github.com/MiKeY081'
              target='_blank'
              rel='noopener noreferrer'
              className='contactIcons bottomLine'
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <p className='text-sm'>
          <span
            onClick={(e) => {
              handleToAdminLoginPage(e);
              
            }}
          >
            &copy;
          </span>{" "}
          2003 Madhu Kunwar All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
