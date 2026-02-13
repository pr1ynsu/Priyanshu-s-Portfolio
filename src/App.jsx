import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Curve from "./components/Transition/Curve";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Info from "./pages/Info";

import "./App.css";

function App() {
  const location = useLocation();
  const [showGreeting, setShowGreeting] = useState(true);

  // Hide footer on contact page
  const hideFooter = location.pathname === "/contact";

  return (
    <div className="app-root">

      {/* Greeting Overlay */}
      {showGreeting && (
        <Greeting onFinish={() => setShowGreeting(false)} />
      )}

      {/* Main App */}
      {!showGreeting && (
        <>
          <ScrollToTop />

          <Navbar />

          <AnimatePresence mode="wait">
            <Curve key={location.pathname}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/info" element={<Info />} />
              </Routes>
            </Curve>
          </AnimatePresence>

          {/* Conditional Footer */}
          {!hideFooter && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
