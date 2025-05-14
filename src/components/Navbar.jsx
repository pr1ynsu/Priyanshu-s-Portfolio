import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center p-9 bg-transparent text-white transition-all duration-300 ease-in-out ${
          scrolling ? "opacity-0" : "opacity-100"
        }`}
      >
        <a
          href="https://drive.google.com/file/d/1OVZhb0nONyXVXRj26Vt7_z_q5ZYlzNLz/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base font-bold tracking-wide text-left"
        >
          © Priyanshu
        </a>
        <div className="flex space-x-6 text-sm sm:text-base">
          {location.pathname !== "/" && <Link to="/">Home</Link>}
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <a
            href="https://medium.com/@poddarpriyanshu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Blog
          </a>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Floating Open Menu Button */}
      {!menuVisible && scrolling && (
        <div
          onClick={toggleMenu}
          className="fixed right-6 top-6 w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50"
        >
          <i className="text-3xl">☰</i>
        </div>
      )}

      {/* Sliding Menu */}
      <div
  className={`fixed top-0 right-0 w-[45%] h-full p-8 bg-[#222222] text-white z-50 transform transition-transform duration-300 ease-in-out ${
    menuVisible ? "translate-x-0" : "translate-x-full"
  }`}

        style={{ backgroundColor: "#222222" }}
      >
        <div className="flex flex-col h-full justify-between relative">
          {/* Close Button Inside Sliding Menu */}
          <div
            onClick={toggleMenu}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center cursor-pointer z-50"
          >
            <i className="text-2xl">×</i>
          </div>

          {/* Top Nav Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Navigation</h2>
            <div className="border-b border-white mb-6"></div>
            <ul className="space-y-6 text-center text-base sm:text-lg md:text-xl">
              {location.pathname !== "/" && (
                <li>
                  <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
              )}
              <li>
                <Link to="/about" className="hover:text-gray-400" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-gray-400" onClick={toggleMenu}>
                  Work
                </Link>
              </li>
              <li>
                <a
                  href="https://medium.com/@poddarpriyanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Social Section */}
          <div className="pt-10">
            <h3 className="text-lg font-semibold mb-4 text-center">Follow Me</h3>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base text-center">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
