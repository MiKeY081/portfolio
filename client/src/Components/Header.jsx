import React from "react";
import { Link } from "react-scroll";

function Header() {
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

        <div>
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
                className="hover:font-bold text-lg hover:text-blue-300 transition-all duration-200"
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
      </div>
    </>
  );
}

export default Header;
