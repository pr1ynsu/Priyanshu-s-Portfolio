import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onLogoClick }) => {
  const location = useLocation(); // Get the current route

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
        {location.pathname !== "/" && (  // Only show Home if not on the landing page
          <Link to="/">Home</Link>  // This links back to the landing page (App.jsx)
        )}
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        {/* Direct Medium blog link */}
        <a
          href="https://medium.com/@poddarpriyanshu" // ← Replace with your real Medium URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Blog
        </a>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
