import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../style/Hero.css";

export default function Hero({ showGreeting }) {

  const trackRef = useRef(null);
  const aboutRef = useRef(null);

  /* 🔥 NEW */
  const heroRef = useRef(null);
  const adamRef = useRef(null);
  const godRef = useRef(null);



  /* =========================
     TRUE SCROLL-DRIVEN MARQUEE (UNCHANGED)
  ========================= */
  useEffect(() => {
    let lastY = window.scrollY;
    let pos = 0;
    let raf;

    const animate = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      pos -= delta * 0.6;

      if (pos < -window.innerWidth) pos = 0;
      if (pos > 0) pos = -window.innerWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${pos}px)`;
      }

      lastY = currentY;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);



/* =========================
   ADAM + GOD PHYSICALLY CORRECT PIVOT MOTION
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
    const tilt  = ease * 28;

    /* Adam (same as before) */
    const adamUp    = ease * 80;
    const adamRight = ease * 50;

    /* God: ONLY down */
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
     REPEAT APPEAR ANIMATION (UNCHANGED)
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

        {/* 🔥 NEW IMAGES */}
        <img ref={adamRef} src="/adam.PNG" className="hero-adam" />
        <img ref={godRef} src="/god.PNG" className="hero-god" />


        <div className="hero-top">
          <div className="hero-location glass-card">
            Graphic designer <br />
            Full Stack Developer
          </div>

            <div className="hero-role">
              design, code &<br />
              <span className="hero-highlight">interaction</span>
            </div>

        </div>


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

        <div className="hero-divider">
          <Link to="/about" className="hero-btn">About Me</Link>
        </div>

      </section>

      {/* ================= SECTION 3 ================= */}
        <section className="hero-services">

          <div className="service-line left">Brand Strategy</div>
          <div className="service-line right">Visual Identity</div>
          <div className="service-line left">Packaging & Print</div>
          <div className="service-line right">Web Design & Build</div>

          <Link to="/info" className="services-cta">
            What Priyanshu Do →
          </Link>

        </section>      


    </main>
  );
}
