import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TITLES = [
  "Full-Stack Developer",
  "Desktop App Builder",
  "Competitive Programmer",
  "Problem Solver",
];

const SKILLS = [
  { label: "React", icon: "⚛" },
  { label: "Node.js", icon: "🟢" },
  { label: "MongoDB", icon: "🍃" },
  { label: "Electron", icon: "⚡" },
  { label: "C++", icon: "🔷" },
  { label: "Python", icon: "🐍" },
  { label: "Socket.IO", icon: "🔌" },
  { label: "SQLite", icon: "🗄" },
  { label: "MySQL", icon: "🐬" },
  { label: "Express", icon: "🚂" },
  { label: "Git", icon: "🔀" },
];

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Home() {
  const navigate = useNavigate();
  const typedTitle = useTypingEffect(TITLES);

  return (
    <section className="home">
      {/* Scanline / grid texture */}
      <div className="home-grid-bg" aria-hidden="true" />

      <div className="home-content">
        {/* ── Text ── */}
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <div className="status-badge">
            <span className="status-dot" />
            Open to Opportunities
          </div>

          <h2>Hello, I'm</h2>
          <h1 className="gradient-text">Nithish Reddy</h1>

          {/* Typing subtitle */}
          <h3 className="typing-title">
            {typedTitle}
            <span className="cursor">|</span>
          </h3>

          <p>
            I'm a Computer Science undergraduate who enjoys building software
            that solves real problems. I like taking ideas from a blank canvas
            to a working product — thinking through the architecture, making
            design decisions, debugging the unexpected, and polishing the final
            experience. Over time, my projects have evolved from full-stack web
            applications to real-time collaboration platforms and desktop
            systems powered by offline AI. I'm always curious to learn new
            technologies, but I enjoy understanding <em>why</em> they work even
            more than simply using them.
          </p>

          {/* Stats row */}
          <div className="home-stats">
            <div className="stat">
              <span className="stat-num">250+</span>
              <span className="stat-label">LeetCode</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">190+</span>
              <span className="stat-label">GeeksforGeeks</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">9.3</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="home-buttons">
            <button className="btn-primary" onClick={() => navigate("/projects")}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => navigate("/contact")}>
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* ── Right column ── */}
        <motion.div
          className="home-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="home-image">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80"
              alt="Developer"
            />
            {/* Glowing ring */}
            <div className="img-ring" aria-hidden="true" />
          </div>

          {/* Skills grid */}
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.label}
                className="skill-chip"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.08 }}
              >
                <span className="skill-icon">{s.icon}</span>
                {s.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;