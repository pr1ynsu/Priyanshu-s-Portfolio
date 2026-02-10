import { Link } from "react-router-dom";
import "../style/Hero.css";

export default function Hero({ showGreeting }) {
  return (
    <main
      className={`hero-main ${
        showGreeting ? "hero-hidden" : "hero-visible"
      }`}
    >
      {/* ================= SECTION 1 ================= */}
      <section className="hero-section">

        <div className="hero-top">
          <div className="hero-location glass-card">
            Located in India
          </div>

          <div className="hero-role">
            Graphic designer <br />
            Full Stack Developer
          </div>
        </div>

        {/* MARQUEE */}
        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-content">
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
            </div>

            <div className="marquee-content">
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
            </div>
          </div>
        </div>

      </section>


      {/* ================= SECTION 2 ================= */}
      <section className="hero-about">

        <div className="hero-about-inner">

          <div className="hero-left">
            <p>Helping customer to stand out in the digital era.</p>
            <p>Together we will set the new status quo.</p>
            <p>No nonsense, always on the cutting edge.</p>
          </div>

          <div className="hero-right">
            The combination of my passion for design, code & interaction
            positions me uniquely in web design.
          </div>

        </div>

        <div className="hero-divider">
          <Link to="/about" className="hero-btn">
            About Me
          </Link>
        </div>

      </section>
    </main>
  );
}
