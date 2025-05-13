// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar"; // Make sure this component exists

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative pb-10">
      <Navbar /> {/* Navbar at the top */}
      
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 pl-14">
        <div className="bg-white bg-opacity-10 text-white p-4 rounded-md text-xl backdrop-blur-md shadow-lg">
        Located in the India
       </div>
      </div>

      
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 text-left pr-14 text-white text-2xl leading-relaxed">
        Freelance<br />
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
    </div>
  );
}

export default App;
