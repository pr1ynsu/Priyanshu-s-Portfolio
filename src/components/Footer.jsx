import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-screen bg-transparent px-8 md:px-20 pb-10 flex flex-col justify-between">
      {/* Main Section */}
      <div className="flex flex-1 items-center justify-between max-w-7xl mx-auto w-full relative">
        {/* Left side: Contact Me Circle over Line */}
        <div className="w-1/2 relative">
          <div className="border-t border-white w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
          <div className="relative flex justify-start pl-4 mt-[-2rem]">
            <div className="bg-white text-black font-semibold rounded-full w-32 h-32 flex items-center justify-center text-lg cursor-pointer hover:bg-gray-200 transition duration-300 shadow-lg">
              <Link to="/contact" className="w-full h-full flex items-center justify-center">
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Right side: Let's work together without line */}
        <div className="w-1/2 flex flex-col items-end justify-center text-right text-white pr-4">
          <p className="text-6xl font-bold leading-snug mb-0">Let's work<br />together</p>
        </div>
      </div>

      {/* Contact Info Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 w-full">
        {/* Email Box */}
        <a href="mailto:2206283@kiit.ac.in" className="bg-white bg-opacity-10 backdrop-blur-md text-white p-4 px-6 rounded-md text-center hover:bg-opacity-20 transition">
          Email: 2206283@kiit.ac.in
        </a>

        {/* Phone Box */}
        <a href="tel:+917070567961" className="bg-white bg-opacity-10 backdrop-blur-md text-white p-4 px-6 rounded-md text-center hover:bg-opacity-20 transition">
          Phone: 7070567961
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center mt-14 text-sm flex-wrap gap-4 text-white max-w-7xl mx-auto w-full">
        <div>© Priyanshu</div>
        <div className="flex space-x-6 text-lg">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
