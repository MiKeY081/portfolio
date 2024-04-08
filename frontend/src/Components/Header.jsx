import React, { useState } from "react";
import { Link } from "react-scroll";
import Menu from "./Menu"
import "../App.css"

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
          className="headerlink ml-8"
        >
          Live Free
        </Link>

        <div className="hidden md:flex">
          <ul className="flex gap-16">
            <li className="headerlink bottomLine">
              <Link to="main" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth
                className="headerlink bottomLine"
              >
                About
              </Link>
            </li>
            <li className="headerlink bottomLine">
              <Link to="projects" smooth>
                Projects
              </Link>
            </li>
            <li className="mr-8 headerlink bottomLine">
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
