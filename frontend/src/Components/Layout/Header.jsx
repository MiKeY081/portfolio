import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Menu from "../Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className='flex justify-between items-center text-white px-2 py-1 bg-slate-800 h-12'>
      <RouterLink to='/' className='headerlink ml-8'>
        Live Free
      </RouterLink>

      <div className='hidden md:flex'>
        <ul className='flex gap-16'>
          <li className='headerlink bottomLine'>
            <RouterLink to='/' smooth>
              Home
            </RouterLink>
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
