import React from "react";
import { motion } from "framer-motion";
import "./Achieve.css";

function Achieve() {
  const achievements = [
    {
      id: 1,
      icon: "🧠",
      title: "440+ Problems Solved",
      description:
        "Solved 250+ problems on LeetCode and 190+ on GeeksforGeeks, spanning arrays, binary search, trees, heaps, graphs, and dynamic programming.",
      tag: "Competitive Programming",
      date: "2024 – Present",
    },
    {
      id: 2,
      icon: "🥈",
      title: "Runner-up — KL University Hackathon",
      description:
        "Secured 2nd place among 120+ teams by building a full-stack Customer Churn Prediction system with live dashboards and automated email alerts — built end-to-end in under 24 hours.",
      tag: "Hackathon",
      date: "2026",
    },
    {
      id: 3,
      icon: "🏅",
      title: "Top 7 — JNTU Brainstorm",
      description:
        "Ranked in the Top 7 at JNTU Brainstorm, a competitive technical hackathon, competing against teams from multiple colleges across Hyderabad.",
      tag: "Hackathon",
      date: "2026",
    },
    {
      id: 4,
      icon: "⚡",
      title: "Built ElectricSearch — Offline AI Desktop App",
      description:
        "Independently designed and shipped ElectricSearch, an Electron + React desktop app that indexes screenshots via OCR and searches them using hybrid FTS5 + BGE semantic embeddings — fully offline.",
      tag: "Project Milestone",
      date: "2026",
    },
    {
      id: 5,
      icon: "🎓",
      title: "CGPA 9.3 at MGIT",
      description:
        "Maintaining a 9.3 CGPA in B.Tech Computer Science at Mahatma Gandhi Institute of Technology, Hyderabad, while actively building full-stack and desktop projects alongside coursework.",
      tag: "Academic",
      date: "2024 – Present",
    }
  ];

  const tagColors = {
    "Competitive Programming": "#00e0ff",
    "Hackathon": "#00ffa1",
    "Project Milestone": "#a78bfa",
    "Academic": "#f59e0b",
  };

  return (
    <section className="achieve">
      <div className="achieve-container">
        <motion.div
          className="achieve-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="achieve-title">Achievements</h2>
          <p className="achieve-subtitle">
            Milestones from hackathons, competitive programming, academics, and
            things I've built along the way.
          </p>
        </motion.div>

        <div className="achieve-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              className="achieve-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-top">
                <span className="achieve-icon">{item.icon}</span>
                <span
                  className="achieve-tag"
                  style={{
                    color: tagColors[item.tag],
                    borderColor: tagColors[item.tag] + "44",
                    background: tagColors[item.tag] + "12",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="achieve-date">{item.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achieve;