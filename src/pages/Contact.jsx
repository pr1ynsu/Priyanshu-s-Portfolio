import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-grey text-white px-6 md:px-16 py-20">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-5 gap-12 items-start">
        {/* Left: Form (80%) - 4 columns */}
        <div className="md:col-span-4 bg-white bg-opacity-5 p-10 rounded-lg space-y-10 backdrop-blur-md shadow-lg">
          <div>
            <label className="block mb-2 text-lg">1. What is your Name?</label>
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b border-white w-full outline-none py-2"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">2. What's your Email?</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent border-b border-white w-full outline-none py-2"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">3. What's the Name of your Organization?</label>
            <input
              type="text"
              placeholder="Your Organization"
              className="bg-transparent border-b border-white w-full outline-none py-2"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">4. What service are you looking for?</label>
            <input
              type="text"
              placeholder="e.g. Web Design, Branding"
              className="bg-transparent border-b border-white w-full outline-none py-2"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">5. Your Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="bg-transparent border-b border-white w-full outline-none py-2"
            ></textarea>
          </div>
        </div>

        {/* Right: Contact Info (20%) - 1 column */}
        <div className="md:col-span-1 flex flex-col justify-between text-sm md:text-base space-y-12 pt-2">
          {/* Contact Details */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Details</h2>
            <p>
              Email: {" "}
              <a href="mailto:2206283@kiit.ac.in" className="underline">
                2206283@kiit.ac.in
              </a>
            </p>
            <p>
              Phone: {" "}
              <a href="tel:7070567961" className="underline">
                7070567961
              </a>
            </p>
          </div>

          {/* Business Details */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Business Details</h2>
            <p>Dennis Snellenberg B.V.</p>
            <p>CoC: 92411711</p>
            <p>VAT: NL866034080B01</p>
            <p>Location: The Netherlands</p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Socials</h2>
            <ul className="space-y-1 underline">
              <li><a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">Awwwards</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
