// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen text-white relative pb-10">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="fixed left-0 top-1/2 transform -translate-y-1/2 pl-14">
                <div className="bg-white bg-opacity-10 text-white p-4 rounded-md text-xl backdrop-blur-md shadow-lg">
                  Located in the India
                </div>
              </div>

              <div className="fixed right-0 top-1/2 transform -translate-y-1/2 text-left pr-14 text-white text-2xl leading-relaxed">
                Freelance
                <br />
                Full Stack Developer
              </div>

              <div className="marquee-container">
                <div className="marquee-track">
                  <div className="marquee-content">
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                  </div>
                  <div className="marquee-content">
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                    <span>Welcome to Priyanshu's Portfolio — </span>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
