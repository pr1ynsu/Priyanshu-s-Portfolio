import { useEffect, useState } from "react";
import "../style/Info.css";

export default function Info() {

  /* =========================
     AUTO LOAD IMAGES FROM /public/graphic
  ========================= */
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loaded = [];
    let i = 1;

    const tryLoad = () => {
      const img = new Image();

      // ✅ correct public path
      img.src = `/graphic/${i}.jpg`;

      img.onload = () => {
        loaded.push(img.src);
        i++;
        tryLoad();
      };

      img.onerror = () => {
        setImages(loaded); // stop when not found
      };
    };

    tryLoad();
  }, []);


  /* =========================
     SCROLL REVEAL
  ========================= */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    els.forEach(el => observer.observe(el));
  }, []);



  return (
    <main className="info-page">

      {/* MANIFESTO */}
      <section className="info-manifesto reveal">
        <h1>
          I help brands succeed by creating confident
          and compelling identities.
        </h1>

        <p>
          Through strategy, design, and interaction I craft digital
          experiences that connect, inspire and resonate with people.
          I collaborate with startups and ambitious brands who understand
          the power of great design and want to stand out. <br />
          From first idea to launch, I become your creative ally,
          shaping products that feel bold, honest and unforgettable.
        </p>
      </section>



      {/* SERVICES */}
      <section className="info-services reveal">

        <h2>Services</h2>

        <div className="services-grid">
          {[
            "Brand Identity",
            "Brand Strategy",
            "Art Direction",
            "Graphic Design",
            "Packaging",
            "Print Design",
            "Web Design",
            "Web Development",
            "UI / UX Systems",
            "Digital Strategy"
          ].map((item, i) => (
            <span key={i} className="service-item">{item}</span>
          ))}
        </div>

      </section>



      {/* SLIDER */}
      <section className="info-slider reveal">

        <div className="slider-track">
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt="" />
          ))}
        </div>

      </section>



      {/* ABOUT */}
      <section className="info-aboutme reveal">

        <h2>Who I am</h2>

        <p>
          I'm Priyanshu, a graphic designer and full-stack developer
          blending storytelling with clean code to craft meaningful
          digital experiences.
        </p>

      </section>

    </main>
  );
}
