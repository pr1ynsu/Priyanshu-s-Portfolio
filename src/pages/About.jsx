// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-grey text-white px-6 md:px-20 py-20">
      {/* Screen 1 */}
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Helping Customers <br /> Thrive in the Digital World
        </h1>
        <div className="relative">
          <div className="border-t border-white w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
          <div className="relative flex justify-end pr-4">
            <div className="bg-white text-black font-semibold rounded-full w-32 h-32 flex items-center justify-center text-lg cursor-pointer hover:bg-gray-200 transition duration-300">
              <a href="#screen2" className="w-full h-full flex items-center justify-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 2: Introduction and Skills/Experience */}
      <div id="screen2" className="mt-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-left">
          INTRODUCTION
        </h2>
        <p className="text-lg md:text-xl text-justify mb-8">
          Hi, I’m Priyanshu! I am a passionate web designer and developer, focused on creating seamless, interactive, and visually engaging digital experiences. With a strong background in both design and development, I can bring your ideas to life in the digital world.
        </p>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Skills & Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-lg">
                I specialize in crafting user-centric and visually appealing designs that offer seamless experiences and drive user engagement.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-lg">
                From front-end to back-end, I build robust, scalable websites and web apps tailored to your needs. My focus is on micro animations, transitions, and interactions.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Full Stack Development</h3>
              <p className="text-lg">
                With expertise in both development and UI/UX, I create full-stack solutions, ensuring smooth integration of both front-end and back-end functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 3: Services */}
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          I Can Help You With...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">01. Design</h3>
            <p className="text-lg">
              With a solid track record in designing websites, I deliver strong and user-friendly digital designs (Since 2024, only in combination with development).
            </p>
          </div>
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">02. Development</h3>
            <p className="text-lg">
              I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I build using Webflow (or Kirby CMS).
            </p>
          </div>
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">03. The Full Package</h3>
            <p className="text-lg">
              A complete website from concept to implementation, that’s what makes me stand out. My great sense for design and development skills enable me to create kick-ass projects.
            </p>
          </div>
        </div>
      </div>

      {/* Screen 4: Achievements */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Award Winning Innovation</h3>
            <p className="text-lg">
              Received the "Inspired Manak" award from State Government for my unique and innovative approach of Idea.
            </p>
          </div>
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2+ Years of Experience</h3>
            <p className="text-lg">
              With over 2 years of experience in web design and development, I’ve helped many clients build a strong online presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
