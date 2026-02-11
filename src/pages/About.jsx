import React, { useEffect } from "react";
import "../style/About.css";

export default function About() {

  /* ========= Smooth reveal system ========= */
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((i) => observer.observe(i));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about">

      {/* ================= HERO ================= */}
      <section className="hero reveal">
        <h1>Priyanshu Kumar Poddar</h1>

        <h3 className="subtitle">
          Full-Stack Developer · UI/UX Designer · Problem Solver
        </h3>

        <p className="lead-text">
          I design and build production-ready web applications that are fast,
          scalable, and visually refined. My focus is clean architecture,
          thoughtful interfaces, and solving real-world problems — not
          unnecessary complexity.
        </p>
      </section>


      {/* ================= SKILLS ================= */}
      <section className="skills reveal">
        <h2>Core Skills</h2>

        <div className="skill-grid">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
          <span>UI / UX Design</span>
          <span>Figma</span>
          <span>Responsive Design</span>
          <span>REST APIs</span>
          <span>Git & GitHub</span>
        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="timeline-section">

        <h2 className="center reveal">Experience & Projects</h2>

        <div className="timeline">

          <div className="timeline-item reveal">
            <div className="content">
              <h3>Traffic Violation Detection Portal</h3>
              <p>
                Designed complete UI in Figma and built the full-stack web app
                using React, Node, and MongoDB. Converts ML outputs into
                structured challans with admin dashboards and evidence tracking.
              </p>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="content">
              <h3>Freelance Web Developer</h3>
              <p>
                Built responsive business websites for clients including
                restaurants and local services. Delivered full frontend,
                backend integration, and deployment.
              </p>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="content">
              <h3>Digital Designer</h3>
              <p>
                Created branding, posters, and marketing creatives that improved
                social engagement and online visibility for small businesses.
              </p>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="content">
              <h3>B.Tech Information Technology</h3>
              <p>
                Kalinga Institute of Industrial Technology · CGPA 8.07
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ================= LEADERSHIP ================= */}
      <section className="lead reveal">
        <h2>Leadership & Interests</h2>

        <p>
          Team lead for academic projects · passionate about clean design
          systems · love building tools that simplify everyday workflows.
        </p>
      </section>

    </main>
  );
}