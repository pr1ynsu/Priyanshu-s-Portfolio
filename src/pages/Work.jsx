import { useState } from "react";
import WorkToggle from "../components/WorkToggle";
import ProjectCarousel from "../components/ProjectCarousel";

import fullstack from "../data/fullstack";
import design from "../data/Design";

import "../style/work.css";

const Work = () => {
  const [category, setCategory] = useState("dev");

  const projects = category === "dev" ? fullstack : design;

  return (
    <div className="work-page">

      <h1 className="work-title">My Work</h1>

      <WorkToggle category={category} setCategory={setCategory} />

      <ProjectCarousel projects={projects} />

    </div>
  );
};

export default Work;
