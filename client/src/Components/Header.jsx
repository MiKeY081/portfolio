import React, { useState } from "react";
import { Link } from "react-scroll";

const Menu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white text-2xl focus:outline-none"
        >
          &times;
        </button>
      </div>
      <ul className="flex flex-col items-center">
        <li className="mb-4">
          <Link to="main" smooth onClick={onClose} className="hover:text-blue-300 cursor-pointer transition-all duration-75">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="about" smooth onClick={onClose} className="hover:text-blue-300 cursor-pointer transition-all duration-75">
            About
          </Link>
        </li>
        <li className="mb-4">
          <Link to="projects" smooth onClick={onClose} className="hover:text-blue-300 cursor-pointer transition-all duration-75">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth onClick={onClose} className="hover:text-blue-300 cursor-pointer transition-all duration-75">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex sticky top-0 z-20 justify-between items-center text-white p-2 bg-slate-800 h-16">
        <Link
          to="main"
          smooth
          className="ml-8 font-bold text-2xl hover:text-blue-300 transition-all duration-200"
        >
          Live Free
        </Link>

        <div className="hidden md:flex">
          <ul className="flex gap-16">
            <li className="hover:font-bold text-lg hover:text-blue-300 transition-all duration-200">
              <Link to="main" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth
                className="relative -top-1 hover:font-bold text-lg hover:text-blue-300 transition-all duration-200"
              >
                About
              </Link>
            </li>
            <li className="hover:font-bold text-lg hover:text-blue-300 transition-all duration-200">
              <Link to="projects" smooth>
                Projects
              </Link>
            </li>
            <li className="mr-8 hover:font-bold text-lg hover:text-blue-300 transition-all duration-200">
              <Link to="contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu */}
        <Menu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </>
  );
}

export default Header;
