// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


// Pages
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen text-white relative">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="overflow-x-hidden">
              {/* Section 1 */}
              <section className="h-screen relative px-14">
                <div className="flex justify-between items-center h-full">
                  {/* Location Box */}
                  <div className="bg-white bg-opacity-10 text-white p-4 rounded-md text-xl backdrop-blur-md shadow-lg">
                    Located in the India
                  </div>

                  {/* Freelancer Text */}
                  <div className="text-2xl leading-relaxed text-left">
                    Freelance
                    <br />
                    Full Stack Developer
                  </div>
                </div>

                {/* Marquee */}
                <div className="absolute bottom-1 left-0 w-full marquee-container">
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
              </section>

              {/* Section 2 */}
              <section className="flex flex-col items-center justify-center py-24 px-8 md:px-20 bg-[#1e1e1e]">
                <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl gap-10">
                  {/* Left Text */}
                  <div className="md:w-1/2 text-left text-lg md:text-xl leading-relaxed space-y-2">
                    <p>Helping customer to stand out in the digital era.</p>
                    <p>Together we will set the new status quo.</p>
                    <p>No nonsense, always on the cutting edge.</p>
                  </div>

                  {/* Right Text */}
                  <div className="md:w-1/2 text-left text-base md:text-lg leading-relaxed space-y-2 flex flex-col justify-start">
                    <p>
                      The combination of my passion for design, code & interaction positions me uniquely in web design.
                    </p>
                  </div>
                </div>

                {/* Horizontal Line and Circle */}
                <div className="w-full max-w-7xl mt-20 relative">
                  <div className="border-t border-white w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
                  <div className="relative flex justify-end pr-4">
                    <Link
                      to="/about"
                      className="bg-white text-black font-semibold rounded-full w-28 h-28 flex items-center justify-center z-10 cursor-pointer hover:bg-gray-200 transition duration-300 text-sm"
                    >
                      About Me
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Your content here */}
      <Footer />
    </div>
    
  );
}

export default App;
