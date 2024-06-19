import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "../App.css";

//responsive menu bar for small screens
const Menu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-opacity-80 z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className='flex justify-end p-4'>
        <button
          onClick={onClose}
          className='text-white text-2xl focus:outline-none'
        >
          &times;
        </button>
      </div>
      <ul className='flex flex-col items-center'>
        <li className='mb-4'>
          <RouterLink
            to='/'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            Home
          </RouterLink>
        </li>
        <li className='mb-4'>
          <ScrollLink
            to='about'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            About
          </ScrollLink>
        </li>
        <li className='mb-4'>
          <ScrollLink
            to='projects'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to='contact'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
