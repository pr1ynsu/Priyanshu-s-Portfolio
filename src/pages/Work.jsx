import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

const Work = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-background text-cream flex flex-col items-center justify-center px-6 py-10 pt-20">
      <h1 className="text-4xl font-bold mb-10">My Projects</h1>

      <div
        className="relative flex items-center justify-center w-full"
        style={{ maxWidth: "20cm" }}
      >
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-5xl z-30 hover:text-gray-400 select-none"
          aria-label="Previous Project"
          style={{ paddingLeft: "20px" }}
        >
          ◀
        </button>

        {/* Iframe container with cm dimensions */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "15cm",
              height: "8.44cm",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(255,255,255,0.1)",
              border: "1px solid #4B5563",
              backgroundColor: "#000000",
            }}
          >
            <iframe
              src={projects[index].liveLink}
              title={projects[index].title}
              style={{ width: "100%", height: "100%" }}
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              allowFullScreen
            />
          </motion.div>
        </AnimatePresence>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl z-30 hover:text-gray-400 select-none"
          aria-label="Next Project"
          style={{ paddingRight: "20px" }}
        >
          ▶
        </button>
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mt-10 px-4"
      >
        <h2 className="text-3xl font-semibold mb-3">{projects[index].title}</h2>
        <p className="text-gray-300 mb-6">{projects[index].description}</p>
        <div className="space-x-5">
          <a
            href={projects[index].liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground px-5 py-3 rounded-full text-black hover:bg-opacity-80 transition"
          >
            Live Demo
          </a>
          <a
            href={projects[index].githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground px-5 py-3 rounded-full text-black hover:bg-opacity-80 transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
