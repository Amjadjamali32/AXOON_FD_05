import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="text-black px-6 py-10 font-roboto">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
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

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-black">
          <a href="#home" className="hover:text-violet-600 transition">
            Home
          </a>
          <a href="#portfolio" className="hover:text-violet-600 transition">
            Portfolio
          </a>
          <a href="#about" className="hover:text-violet-600 transition">
            About Me
          </a>
          <a href="#contact" className="hover:text-violet-600 transition">
            Contact
          </a>
          <a href="#testimonials" className="hover:text-violet-600 transition">
            Testimonials
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-8 border-t border-gray-500"></div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-8 font-inter mt-6">
        <p>
          Made with 💖 by{" "}
          <span className="text-violet-600 font-semibold">Amjad Ali</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/privacy-policy" className="hover:text-violet-600">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-violet-600">
            Terms of Service
          </Link>
          <Link to="/cookies-settings" className="hover:text-violet-600">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
