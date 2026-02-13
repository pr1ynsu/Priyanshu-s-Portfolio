import { useEffect, useState } from "react";
import WorkToggle from "../components/WorkToggle";
import fullstack from "../data/fullstack";
import "../style/work.css";

export default function Work() {
  const [category, setCategory] = useState("dev");
  const [designImages, setDesignImages] = useState([]);

  const [preview, setPreview] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /* =========================
     AUTO LOAD DESIGN IMAGES
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
        setDesignImages(loaded);
      };
    };

    loadNext();
  }, []);

  return (
    <div className="work-page">
      <h1 className="work-title">Selected Work</h1>

      <WorkToggle category={category} setCategory={setCategory} />

      {category === "design" ? (
        <div className="work-grid">
          {designImages.map((src, i) => (
            <div key={i} className="work-card image-card">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <div className="work-grid">
          {fullstack.map((project, i) => (
            <div key={i} className="project-wrapper">

              {/* IMAGE BOX */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="work-card image-hover-card"
                onMouseEnter={() => setPreview(project.liveLink)}
                onMouseLeave={() => setPreview(null)}
                onMouseMove={(e) =>
                  setPosition({
                    x: e.clientX + 25,
                    y: e.clientY + 25,
                  })
                }
              >
                <img src={project.image} alt={project.title} />
              </a>

              {/* INFO BELOW BOX */}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* FLOATING LIVE PREVIEW */}
      {preview && (
        <div
          className="preview-box"
          style={{
            top: position.y,
            left: position.x,
          }}
        >
          <iframe src={preview} title="Live Preview" />
        </div>
      )}
    </div>
  );
}
