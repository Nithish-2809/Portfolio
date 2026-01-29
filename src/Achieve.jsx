import React from "react";
import { motion } from "framer-motion";
import "./Achieve.css";

function Achieve() {
  const achievements = [
    {
      id: 1,
      title: "LeetCode Milestone",
      description:
        "Solved 100+ coding problems across various data structures and algorithms. Consistently improving problem-solving speed.",
      date: "2025",
    },
    {
      id: 2,
      title: "Hackathon Finalist",
      description:
        "Reached the finals in a national-level hackathon for building an innovative productivity app using the MERN stack.",
      date: "2026",
    },
    {
      id: 3,
      title: "Web Dev Bootcamp Graduate",
      description:
        "Completed a full-stack web development bootcamp in udemy and built multiple responsive projects from scratch.",
      date: "2025",
    },
    {
      id: 5,
      title: "Open Source Contribution",
      description:
        "Contributed to an open-source project on GitHub by improving UI components and fixing minor bugs in React.",
      date: "2025",
    }
  ];

  return (
    <section className="achieve">
      <div className="achieve-container">
        <motion.h2
          className="achieve-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Milestones 🏆
        </motion.h2>

        <motion.p
          className="achieve-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A glimpse into the moments that shaped my growth — from solving challenges to building impactful projects.
        </motion.p>

        <div className="achieve-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              className="achieve-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="achieve-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achieve;
