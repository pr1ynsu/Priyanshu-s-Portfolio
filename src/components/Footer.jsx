import { Link } from "react-router-dom";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* ===== MAIN SECTION ===== */}
      <div className="footer-main">

        {/* Contact circle */}
        <div className="footer-contact-wrapper">
          <div className="footer-line" />

          <Link to="/contact" className="contact-circle">
            Contact Me
          </Link>
        </div>

        {/* Text */}
        <div className="footer-heading">
          <h2>Let’s Work<br />Together !</h2>
        </div>

      </div>


      {/* ===== INFO CARDS ===== */}
      <div className="footer-info">

        <a href="mailto:priyanshukr804@gmail.com" className="info-card">
          priyanshukr804@gmail.com
        </a>

        <a href="tel:+917070567961" className="info-card">
          +91 7070567961
        </a>

      </div>


      {/* ===== BOTTOM BAR ===== */}
      <div className="footer-bottom">

        {/* sliding copyright */}
        <div className="footer-logo">

          <span className="footer-logo-symbol">©</span>

          <span className="footer-logo-text">
            <span className="footer-text-primary">code by Priyanshu</span>
            <span className="footer-text-secondary">Priyanshu Poddar</span>
          </span>

        </div>


        <div className="footer-socials">
          <a href="https://x.com/prynsu5560" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/priyanshu-poddar-133609246/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/pr1ynsu" target="_blank" rel="noreferrer">GitHub</a>
        </div>

      </div>

    </footer>
  );
}
