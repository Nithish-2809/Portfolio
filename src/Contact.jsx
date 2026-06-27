import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "./Contact.css";

const SOCIALS = [
  { icon: <FaGithub />, href: "https://github.com/Nithish-2809", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/mendu-nithish-reddy-054b8b336/", label: "LinkedIn" },
  { icon: <SiLeetcode />, href: "https://leetcode.com/u/Nithish_2809/", label: "LeetCode" },
  { icon: <SiGeeksforgeeks />, href: "https://www.geeksforgeeks.org/user/nithishreozxj/", label: "GFG" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/electro_wizzz/", label: "Instagram" },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nithishreddy2809@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact">
      <div className="contact-wrapper">

        {/* ── Left: CTA ── */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="avail-badge">
            <span className="avail-dot" /> Available for Internships
          </span>

          <h2>Let's Work Together</h2>
          <p className="contact-lead">
            I'm a 2nd-year CS student actively looking for a{" "}
            <strong>software engineering internship</strong> — frontend,
            backend, or full-stack. I bring real project experience, fast
            learning, and a habit of shipping things that actually work.
          </p>

          <div className="contact-details">
            <div className="detail-row">
              <FaEnvelope className="detail-icon" />
              <div>
                <span className="detail-label">Email</span>
                <a href="mailto:nithishreddy2809@gmail.com" className="detail-value">
                  nithishreddy2809@gmail.com
                </a>
              </div>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="detail-row">
              <FaMapMarkerAlt className="detail-icon" />
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="open-to">
            <span className="open-label">Open to</span>
            <div className="open-tags">
              {["SWE Internships", "Hackathons", "Open Source", "Freelance Projects"].map((t) => (
                <span key={t} className="open-tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Socials + CTA ── */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="reach-card">
            <h3>Find me online</h3>
            <p>Check out my work or reach out on any platform below.</p>

            <div className="socials-grid">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-row"
                >
                  <span className="social-ico">{s.icon}</span>
                  <span className="social-label">{s.label}</span>
                  <span className="social-arrow">↗</span>
                </a>
              ))}
            </div>

            <a
              href="mailto:nithishreddy2809@gmail.com"
              className="btn-hire"
            >
              Send me an Email
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Nithish Reddy · Built with React
      </footer>
    </section>
  );
}

export default Contact;