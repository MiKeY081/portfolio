import React, { useState } from "react";
import { Link } from "react-scroll";
import "../App.css";

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
          <Link
            to='main'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            Home
          </Link>
        </li>
        <li className='mb-4'>
          <Link
            to='about'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            About
          </Link>
        </li>
        <li className='mb-4'>
          <Link
            to='projects'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth
            onClick={onClose}
            className='headerlink bottomLine'
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
