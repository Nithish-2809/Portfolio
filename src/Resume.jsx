import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

function Resume() {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      college: "MGIT, Hyderabad",
      duration: "2024 – Present",
      score: "CGPA: 9.3",
    },
    {
      id: 2,
      degree: "Intermediate (MPC)",
      college: "Sri Chaitanya Jr College, Hyderabad",
      duration: "2022 – 2024",
      score: "Percentage: 96%",
    },
    {
      id: 3,
      degree: "SSC",
      college: "KKR's Gowtham Concept School, Hyderabad",
      duration: "2020 – 2021",
      score: "Percentage: 97%",
    },
  ];

  const skillGroups = [
    {
      label: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript"],
    },
    {
      label: "Backend",
      skills: ["Node.js", "Express.js", "Socket.IO", "REST APIs"],
    },
    {
      label: "Databases",
      skills: ["MongoDB", "MySQL", "SQLite", "FTS5"],
    },
    {
      label: "Desktop & AI",
      skills: ["Electron.js", "BGE Embeddings", "Transformers.js", "OCR", "Semantic Search"],
    },
    {
      label: "CS Fundamentals",
      skills: ["DSA", "OOP", "C++", "Python", "Competitive Programming"],
    },
    {
      label: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section className="resume">
      <div className="resume-container">
        <motion.h2 className="resume-title" {...fadeUp(0)}>
          My Resume
        </motion.h2>
        <motion.p className="resume-subtitle" {...fadeUp(0.1)}>
          A snapshot of my academic journey, technical skills, and the tools I
          use to build production-grade software.
        </motion.p>

        {/* ── Education ── */}
        <motion.div className="section" {...fadeUp(0.2)}>
          <h3 className="section-title">Education</h3>
          <div className="timeline">
            {education.map((item, i) => (
              <motion.div
                className="timeline-item"
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
              >
                <div className="timeline-left">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-body">
                  <h4>{item.degree}</h4>
                  <p className="college">{item.college}</p>
                  <div className="timeline-meta">
                    <span className="duration">{item.duration}</span>
                    <span className="score-badge">{item.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Skills ── */}
        <motion.div className="section" {...fadeUp(0.4)}>
          <h3 className="section-title">Technical Skills</h3>
          <div className="skill-groups">
            {skillGroups.map((group, gi) => (
              <motion.div
                className="skill-group"
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + gi * 0.08 }}
              >
                <span className="group-label">{group.label}</span>
                <div className="skill-chips">
                  {group.skills.map((s) => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Download ── */}
        <motion.div className="resume-download" {...fadeUp(0.8)}>
          <a href="/Nithish_resume.pdf" download className="btn-download">
            Download Resume PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;