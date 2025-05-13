// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogoClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-center p-9 bg-transparent text-white">
      <a
        href="https://drive.google.com/file/d/1OVZhb0nONyXVXRj26Vt7_z_q5ZYlzNLz/view?usp=drive_link"
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // For security reasons
        className="text-sm sm:text-base font-bold tracking-wide text-left"
      >
        © Priyanshu
      </a>

      <div className="flex space-x-6 text-sm sm:text-base">
        
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
