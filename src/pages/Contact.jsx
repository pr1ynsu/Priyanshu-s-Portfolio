import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../style/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_lmtlbco",
      "template_wocbfdp",
      formData,
      "UXqWTkLf7w6dJvyBd"
    );

    alert("Message sent 🚀");
  };

  return (
    <section className="contact-page">

      <div className="contact-wrapper">

        {/* ===== LEFT FORM ===== */}
        <div className="contact-form-card">
          <h2>Get In Touch</h2>

          <form onSubmit={sendEmail} className="form">

            <input name="name" placeholder="Name" onChange={handleInputChange} />
            <input name="email" placeholder="Email" onChange={handleInputChange} />
            <input name="organization" placeholder="Organization" onChange={handleInputChange} />
            <input name="service" placeholder="Service Required" onChange={handleInputChange} />

            <textarea
              rows="3"
              name="message"
              placeholder="Message..."
              onChange={handleInputChange}
            />

            <button className="send-btn">Send Message</button>

          </form>
        </div>


        {/* ===== RIGHT INFO ===== */}
        <div className="contact-info-card">

          <div>
            <h4>CONTACT</h4>
            <p>priyanshukr804@gmail.com</p>
            <p>7070567961</p>
          </div>

          <div>
            <h4>LOCATION</h4>
            <p>Gumla, Jharkhand</p>
          </div>

          <div className="socials">
            <h4>SOCIALS</h4>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>

          {/* ⭐ Resume CTA */}
          <a
            href="https://drive.google.com/file/d/1MAvbbyp0w4i5ayeTkwNSWI3NsHZO23o8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            ↓ Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}
