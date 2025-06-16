import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 shadow-md  font-roboto`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="mx-2 w-[40px]" />
              <p
                className="text-2xl font-bold font-[cursive] text-violet-500"
                style={{
                  fontFamily: "roboto",
                  textShadow: "2px 2px 8px rgba(139, 92, 246, 0.8)",
                }}
              >
                Amjad Ali
              </p>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-violet-600 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation*/}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex space-x-8">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Portfolio
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                About Me
              </ScrollLink>
              <ScrollLink
                to="testimonials"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Testimonials
              </ScrollLink>
            </div>
          </div>
          <div className="hidden md:block">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-sm shadow-sm text-sm font-medium text-violet-600 ring-1 ring-violet-600 hover:bg-violet-700 cursor-pointer hover:text-white transition-colors duration-300"
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            activeClass="text-violet-600"
            duration={500}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-violet-600"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 cursor-pointer"
            onClick={toggleMenu}
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-violet-600"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 cursor-pointer"
            onClick={toggleMenu}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-violet-600"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 cursor-pointer"
            onClick={toggleMenu}
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="block px-3 py-2 rounded-md text-base font-medium border border-transparent rounded-sm shadow-sm text-sm font-medium text-violet-600 ring-1 ring-violet-600 hover:bg-violet-700 cursor-pointer hover:text-white transition-colors duration-300 cursor:pointer"
            onClick={toggleMenu}
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
