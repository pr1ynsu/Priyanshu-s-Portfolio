import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./Greeting.css"; 

const greetings = [
  "Hello", "Hola", "Bonjour", "Ciao", "Namaste", "こんにちは", "안녕하세요", "你好", "Hallo", "Olá"
];

function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    let interval;
    if (showGreeting) {
      interval = setInterval(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
      }, 300);
    }

    const timeout = setTimeout(() => {
      setShowGreeting(false);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [showGreeting]);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {showGreeting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111] text-pink-300 greeting-slide">
          <h1 className="text-4xl sm:text-6xl font-bold">
            {greetings[currentGreeting]}
          </h1>
        </div>
      )}

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main
              className={`overflow-x-hidden transition-transform duration-1000 ease-in-out ${
                showGreeting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {/* Section 1 */}
              <section className="h-screen relative px-14">
                <div className="flex justify-between items-center h-full">
                  <div className="bg-white bg-opacity-10 text-white p-4 rounded-md text-xl backdrop-blur-md shadow-lg">
                    Located in the India
                  </div>
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
                    </div>
                    <div className="marquee-content">
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
                  <div className="md:w-1/2 text-left text-lg md:text-xl leading-relaxed space-y-2">
                    <p>Helping customer to stand out in the digital era.</p>
                    <p>Together we will set the new status quo.</p>
                    <p>No nonsense, always on the cutting edge.</p>
                  </div>
                  <div className="md:w-1/2 text-left text-base md:text-lg leading-relaxed space-y-2 flex flex-col justify-start">
                    <p>
                      The combination of my passion for design, code & interaction positions me uniquely in web design.
                    </p>
                  </div>
                </div>

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

      <Footer />
    </div>
  );
}

export default App;
