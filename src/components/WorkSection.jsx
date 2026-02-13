import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/WorkSection.css";

export default function WorkSection() {
  const [images, setImages] = useState([]);

  /* =========================
     AUTO LOAD /public/work/001.jpg ...
  ========================= */

  useEffect(() => {
    const loaded = [];
    let i = 1;

    const loadNext = () => {
      const num = String(i).padStart(3, "0");
      const src = `/work/${num}.jpg`;

      const img = new Image();
      img.src = src;

      img.onload = () => {
        loaded.push(src);
        i++;
        loadNext();
      };

      img.onerror = () => {
        setImages(loaded);
      };
    };

    loadNext();
  }, []);

  return (
    <section className="hero-work">

      <h2 className="work-title">Selected Work</h2>

      <p className="work-sub">
        Full-Stack Development • UI/UX • Graphic Design
      </p>


      {/* 🔥 AUTO GRID */}
      <div className="work-grid">
        {images.map((src, i) => (
          <div key={i} className="work-card">
            <img src={src} alt={`project-${i}`} />
          </div>
        ))}
      </div>


      <Link to="/work" className="work-preview-btn">
        View All Projects →
      </Link>

    </section>
  );
}