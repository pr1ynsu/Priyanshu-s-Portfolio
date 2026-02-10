import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuVisible((p) => !p);

  return (
    <>
      {/* ================= TOP NAV ================= */}
      <nav className={`navbar ${scrolling ? "navbar-hide" : ""}`}>

        {/* LOGO */}
        <a href="#" className="navbar-logo">

  <span className="logo-symbol">©</span>

  <span className="logo-text-wrapper">
    <span className="logo-text-primary">code by Priyanshu</span>

    <a
      href="https://drive.google.com/file/d/1MAvbbyp0w4i5ayeTkwNSWI3NsHZO23o8/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
      className="logo-text-secondary"
    >
      Priyanshu Poddar
    </a>
  </span>

</a>


        {/* LINKS */}
        <div className="navbar-links">
          {location.pathname !== "/" && <Link to="/" className="nav-link">Home</Link>}
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

      </nav>


      {/* ================= FLOAT BUTTON ================= */}
      {!menuVisible && scrolling && (
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      )}


      {/* ================= SIDE MENU ================= */}
      <div className={`side-menu ${menuVisible ? "side-menu-open" : ""}`}>

        <button className="close-btn" onClick={toggleMenu}>×</button>

      <div className="menu-inner">

      <h4 className="menu-title">NAVIGATION</h4>
      <div className="menu-divider" />

        <ul className="menu-links">
          <li><Link onClick={toggleMenu} className="menu-link" to="/">Home</Link></li>
          <li><Link onClick={toggleMenu} className="menu-link" to="/work">Work</Link></li>
          <li><Link onClick={toggleMenu} className="menu-link" to="/about">About</Link></li>
            <li><Link onClick={toggleMenu} className="menu-link" to="/contact">Contact</Link></li>
        </ul>

      <div className="menu-divider" />

      <h4 className="menu-title">SOCIALS</h4>

      <div className="social-links">
        <a className="social-link" href="#">GitHub</a>
        <a className="social-link" href="#">LinkedIn</a>
        <a className="social-link" href="#">Twitter</a>
      </div>

  </div>
</div>

    </>
  );
}
