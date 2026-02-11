import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCarousel = ({ projects }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prev} className="arrow">◀</button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="card"
        >
          <iframe src={projects[index].liveLink} title="demo" />

          <div className="card-info">
            <h3>{projects[index].title}</h3>
            <p>{projects[index].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={next} className="arrow">▶</button>
    </div>
  );
};

export default ProjectCarousel;
