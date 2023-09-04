import React, { useState } from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import {MdWhatsapp} from 'react-icons/md'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMouileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="bg-transparent  text-black z-50  p-4 animate__animated animate__zoomIn animate__slower "
      style={{ animationIterationCount: 1 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">My App 1</div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden space-y-4 z-50 ">
            <li className="text-black animate__animated  animate__slideInRight">
              <Link to="/"> Home </Link>
            </li>
            <li className="text-black animate__animated  animate__slideInLeft">
              <Link to="/about"> About</Link>
            </li>
            {/* Add dropdown for Services */}
            <li className="relative text-black animate__animated  animate__slideInRight">
              <Link to="/service">
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left flex items-center justify-between"
                >
                  Products
                  <FaCaretDown
                    className={`ml-2 transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    } transition-transform`}
                  />
                </button>
              </Link>
              {/* Dropdown */}
              {isDropdownOpen && (
                <ul className=" z-40 absolute top-0  right-full bg-blue-300 rounded p-2 animate__animated animate__slideInRight">
                  <li className="text-black cursor-pointer border p-2  my-2 hover:bg-yellow-300 rounded">
                    <Link to="/1">Product_1</Link>
                  </li>
                  <li className="text-black cursor-pointer border p-2  my-2 hover:bg-yellow-300 rounded">
                    <Link to="/2">Product_2</Link>
                  </li>
                  <li className="text-black cursor-pointer border p-2  my-2 hover:bg-yellow-300 rounded">
                    <Link to="/3">Product_3</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* End dropdown */}
            <li className="text-black animate__animated  animate__slideInLeft">
              <Link to="contactus"> Contact</Link>
            </li>

            <button className="flex items-center max-sm:block max-md:block cursor-pointer py-2 px-4 border bg-green-400 rounded-xl">
              <MdWhatsapp className="text-3xl" />
              WhatsApp 
            </button>
          </ul>
        )}
        {/* Mobile menu icon */}
        <button className="md:hidden text-black " onClick={toggleMouileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="hover:animate-spin" />
          ) : (
            <FaBars className="hover:animate-bounce" />
          )}
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <li className="text-black">
            <Link to="/"> Home </Link>
          </li>
          <li className="text-black">
            <Link to="/about"> About</Link>
          </li>
          {/* Add dropdown for Services */}
          <li
            className="relative text-black "
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link to="/service">
              <button className="w-full text-left flex items-center justify-between">
                Products
                <FaCaretDown
                  className={`ml-2 transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                />
              </button>
            </Link>
            {/* Dropdown */}
            {isDropdownOpen && (
              <ul className=" absolute top-full h-fit py-5  left-0 w-fit bg-blue-300 rounded px-3 animate__animated animate__bounceIn animate__slow">
                <li className="text-black cursor-pointer  border p-2 my-2 hover:bg-yellow-300 rounded">
                  <Link to="/1">Product_1</Link>
                </li>
                <li className="text-black cursor-pointer border p-2  my-2 hover:bg-yellow-300 rounded">
                  <Link to="/2">Product_2</Link>
                </li>
                <li className="text-black cursor-pointer border p-2 mt-2 hover:bg-yellow-300 rounded">
                  <Link to="/3">Product_3</Link>
                </li>
              </ul>
            )}
          </li>
          {/* End dropdown */}

          <li className="text-black">
            <Link to="contactus"> Contact us</Link>
          </li>
        </ul>
              <Link to='https://wa.link/y56ed9' target="_blank">
        <button className="flex items-center max-sm:hidden max-md:hidden cursor-pointer py-2 px-4 border bg-green-400 rounded-xl">
        <MdWhatsapp className="text-3xl"/>
        WhatsApp +
        </button>
              </Link>
      </div>
    </nav>
  );
};

export default Navbar;
