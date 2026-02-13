import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          alert("message sent succesfully !");
          setFormData({
            name: "",
            email: "",
            organization: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong ");
        }
      );
  };

  return (
    <section className="contact-page">
      <div className="contact-wrapper">

        <div className="contact-form-card">
          <h2>Get In Touch</h2>

          <form onSubmit={sendEmail} className="form">

            <input
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleInputChange}
              required
            />

            <input
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleInputChange}
              required
            />

            <input
              name="organization"
              value={formData.organization}
              placeholder="Organization"
              onChange={handleInputChange}
            />

            <input
              name="service"
              value={formData.service}
              placeholder="Service Required"
              onChange={handleInputChange}
            />

            <textarea
              rows="3"
              name="message"
              value={formData.message}
              placeholder="Message..."
              onChange={handleInputChange}
              required
            />

            <button className="send-btn" type="submit">
              Send Message
            </button>

          </form>
        </div>

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
