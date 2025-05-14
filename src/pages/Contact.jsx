import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send email function using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        "service_lmtlbco", // Your service ID from EmailJS
        "template_wocbfdp", // Your template ID from EmailJS
        templateParams,
        "UXqWTkLf7w6dJvyBd" // Your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-grey text-white px-6 md:px-16 py-20">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-5 gap-12 items-start">
        {/* Left: Form (80%) - 4 columns */}
        <div className="md:col-span-4 bg-white bg-opacity-5 p-10 rounded-lg space-y-10 backdrop-blur-md shadow-lg">
          <form onSubmit={sendEmail}>
            <div>
              <label className="block mb-2 text-lg">1. What is your Name?</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="bg-transparent border-b border-white w-full outline-none py-2"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">2. What's your Email?</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="bg-transparent border-b border-white w-full outline-none py-2"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">3. What's the Name of your Organization?</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Your Organization"
                className="bg-transparent border-b border-white w-full outline-none py-2"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">4. What service are you looking for?</label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="e.g. Web Design, Branding"
                className="bg-transparent border-b border-white w-full outline-none py-2"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">5. Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                className="bg-transparent border-b border-white w-full outline-none py-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Info (20%) - 1 column */}
        <div className="md:col-span-1 flex flex-col justify-between text-sm md:text-base space-y-12 pt-2">
          {/* Contact Details */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Details</h2>
            <p>
              Email:{" "}
              <a href="mailto:priyanshukr804@gmail.com" className="underline">
                priyanshukr804@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:7070567961" className="underline">
                7070567961
              </a>
            </p>
          </div>

          {/* Business Details */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Personal Details</h2>
            <p>Priyanshu Kumar Poddar</p>
            <p>B.tech in Information Technology</p>
            <p>Location: Gumla, Jharkhand</p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Socials</h2>
            <ul className="space-y-1 underline">
              <li>
                <a href="https://github.com/pr1ynsu" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_priynsu/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/prynsu5560" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/priyanshu-poddar-133609246/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
