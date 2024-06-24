import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Menu from "../Menu";
import { FaTerminal } from "react-icons/fa";
import Terminal from "../../assets/Terminal";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // For responsive display
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className='flex justify-between items-center text-white px-2 py-1 bg-gray-36 h-12'>
      <RouterLink to='/' className='headerlink md:ml-8 ml-2'>
        {/* <img src='/public/photos/logo.png' className='h-8'></img> */}
        <p className='md:text-xl text-sm text-green-700 whitespace-nowrap'>
          {" "}
          <span className='md:text-4xl text-xl  text-green-600'>∫</span>
          life(happiness)
          <span className='md:text-xl text-sm text-green-600'>d(coding)</span>
        </p>
      </RouterLink>

      <div className='hidden md:flex'>
        <ul className='flex gap-16'>
          <li className='headerlink bottomLine'>
            <Terminal />
          </li>
          <li>
            <ScrollLink to='about' smooth className='headerlink bottomLine'>
              About
            </ScrollLink>
          </li>
          <li className='headerlink bottomLine'>
            <ScrollLink to='projects' smooth>
              Projects
            </ScrollLink>
          </li>
          <li className='mr-8 headerlink bottomLine'>
            <ScrollLink to='contact' smooth>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className='text-white text-2xl focus:outline-none'
        >
          &#9776;
        </button>
      </div>

      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}

export default Header;
