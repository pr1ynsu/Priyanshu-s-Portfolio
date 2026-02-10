// src/pages/About.jsx
import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* ================= SCREEN 1 ================= */}
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Helping Customers <br /> Thrive in the Digital World
        </h1>

        <div className="relative">
          <div className="border-t border-cream w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>

          <div className="relative flex justify-end pr-4">
            <div className="about-btn-circle">
              <a href="#screen2">Learn More</a>
            </div>
          </div>
        </div>
      </div>



      {/* ================= SCREEN 2 ================= */}
      <div id="screen2" className="mt-20">

        <h2 className="section-title text-left">
          INTRODUCTION
        </h2>

        <p className="intro-text">
          Hi, I’m Priyanshu Kumar Poddar , a Full Stack Developer and Graphic Designer.
          I enjoy building clean, scalable websites and turning ideas into practical
          digital products. My focus is always simple: good design, smooth interaction,
          and real-world usefulness.
        </p>


        {/* Skills */}
        <h2 className="section-title text-center mt-14">
          Skills & Experience
        </h2>

        <div className="about-grid">

          <div className="glass-card">
            <h3>Frontend</h3>
            <p>React • HTML • CSS • Tailwind • Figma</p>
          </div>

          <div className="glass-card">
            <h3>Backend</h3>
            <p>Node.js • Express • MongoDB • MySQL</p>
          </div>

          <div className="glass-card">
            <h3>Design</h3>
            <p>UI/UX • Branding • Social Creatives • Posters</p>
          </div>

        </div>
      </div>



      {/* ================= SCREEN 3 (Timeline) ================= */}
      <div className="mt-20">

        <h2 className="section-title text-center">
          My Journey
        </h2>

        <div className="timeline">

          <div className="timeline-item">
            <span>2022</span>
            <p>Started B.Tech IT at KIIT Bhubaneswar</p>
          </div>

          <div className="timeline-item">
            <span>2023</span>
            <p>Freelance Digital Designer – built brand identities & social creatives</p>
          </div>

          <div className="timeline-item">
            <span>2023</span>
            <p>Developed Restaurant Website – full UI/UX + frontend backend integration</p>
          </div>

          <div className="timeline-item">
            <span>2024</span>
            <p>Built Traffic Violation Detection Portal (React + Node + MongoDB)</p>
          </div>

          <div className="timeline-item">
            <span>Now</span>
            <p>Building products, learning daily & preparing for real-world engineering</p>
          </div>

        </div>
      </div>



      {/* ================= SCREEN 4 ================= */}
      <div className="mt-20 text-center">

        <h2 className="section-title">
          Achievements
        </h2>

        <div className="about-grid">

          <div className="glass-card">
            <h3>Award Winning Innovation</h3>
            <p>Inspired Manak Award – State Government recognition</p>
          </div>

          <div className="glass-card">
            <h3>2+ Years Experience</h3>
            <p>Freelancing + real client projects</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
