import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Let’s Build Something Great Together 💡</h2>
        <p>
          I’m always open to collaboration, hackathons, or just a good tech conversation!
        </p>

        <div className="socials">
          <a
            href="https://github.com/Nithish-2809"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mendu-nithish-reddy-054b8b336/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/Nithish_2809/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/nithishreozxj/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="https://www.instagram.com/electro_wizzz/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="contact-info">
          <p>📧 Email: <a href="mailto:nithishreddy2809@gmail.com">nithishreddy2809@gmail.com</a></p>
          <p>📍 Location: BHEL Hyderabad, India</p>
          <p>🕒 Open to: Internships, Projects & Hackathons</p>
        </div>

        <footer className="footer">
          © 2025 Nithish Reddy. All Rights Reserved.
        </footer>
      </div>
    </section>
  );
}

export default Contact;
