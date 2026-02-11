import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../style/Hero.css";
import WorkSection from "./WorkSection";
import About from "../pages/About";

export default function Hero({ showGreeting }) {

  const trackRef = useRef(null);
  const aboutRef = useRef(null);

  const heroRef = useRef(null);
  const adamRef = useRef(null);
  const godRef = useRef(null);

  /* =========================
     CENTER TEXT ROTATOR
  ========================= */

  const roles = [
    "Web Developer",
    "Brand Designing",
    "Graphic Designing"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);



/* =========================
   TRUE PHYSICS MARQUEE
========================= */

useEffect(() => {
  let lastY = window.scrollY;
  let pos = 0;
  let raf;

  const animate = () => {
    const currentY = window.scrollY;

    /* scroll difference */
    const delta = currentY - lastY;

    /* 🔥 IMPORTANT: subtract = reverse direction */
    pos -= delta * 0.6;

    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 2;

      /* smooth infinite loop */
      if (pos > width) pos -= width;
      if (pos < -width) pos += width;

      trackRef.current.style.transform = `translate3d(${pos}px,0,0)`;
    }

    lastY = currentY;
    raf = requestAnimationFrame(animate);
  };

  raf = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(raf);
}, []);


  /* =========================
     STATUE MOTION
  ========================= */

  useEffect(() => {
    let raf;

    const animate = () => {
      const heroTop = heroRef.current.offsetTop;
      const scroll = window.scrollY;

      const raw = (scroll - heroTop) / window.innerHeight;
      const progress = Math.max(0, Math.min(raw, 1));

      const ease = 1 - Math.pow(1 - progress, 3);

      const scale = 1 + ease * 0.8;
      const tilt = ease * 28;

      const adamUp = ease * 80;
      const adamRight = ease * 50;

      const godDown = ease * 90;

      if (adamRef.current) {
        adamRef.current.style.transform =
          `translate(${adamRight}px, ${-adamUp}px)
           rotate(${-tilt}deg)
           scale(${scale})`;
      }

      if (godRef.current) {
        godRef.current.style.transform =
          `translateY(${godDown}px)
           rotate(${tilt}deg)
           scale(${scale})`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);



  /* =========================
     REVEAL
  ========================= */

  useEffect(() => {
    const el = aboutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("hero-show");
        else el.classList.remove("hero-show");
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);



  return (
    <main className={`hero-main ${showGreeting ? "hero-hidden" : "hero-visible"}`}>

      {/* ================= SECTION 1 ================= */}
      <section ref={heroRef} className="hero-section">

        <img ref={adamRef} src="/adam.PNG" className="hero-adam" />
        <img ref={godRef} src="/god.PNG" className="hero-god" />


        {/* 🔥 CENTER GLASS TEXT */}
        <div className="hero-center-glass">
          <span key={index} className="glass-text">
            {roles[index]}
          </span>
        </div>


        {/* MARQUEE */}
        <div className="marquee-container">
          <div ref={trackRef} className="marquee-track">
            <div className="marquee-content">
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
            </div>

            <div className="marquee-content">
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
              <span>Welcome to Priyanshu's Portfolio — </span>
            </div>
          </div>
        </div>

      </section>



      {/* ================= SECTION 2 ================= */}
      <section ref={aboutRef} className="hero-about">

        <div className="hero-about-inner hero-reveal">

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



      </section>

        {/* About section directly rendered */}
        <About />

      {/* ================= SECTION 3 ================= */}
      <section className="hero-services">

        <div className="service-line left">Brand Strategy</div>
        <div className="service-line right">Visual Identity</div>
        <div className="service-line left">Packaging & Print</div>
        <div className="service-line right">Web Design & Build</div>

        <Link to="/info" className="services-cta">
          What Priyanshu Does →
        </Link>

      </section>

      <WorkSection />

    </main>
  );
}