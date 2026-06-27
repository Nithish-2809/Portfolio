import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

const ALL_PROJECTS = [
  {
    id: 2,
    title: "ElectricSearch",
    description:
      "Offline desktop app built with Electron + React that indexes screenshots via OCR and lets you search them using hybrid FTS5 + BGE semantic embeddings — no internet required.",
    img: "/ElectricSearch.png",
    skills: ["Electron", "React", "SQLite", "FTS5", "Transformers.js", "OCR", "BGE Embeddings", "Node.js"],
    link: "https://github.com/Nithish-2809/ElectricSearch/releases/tag/v1.0.0",
    github: "https://github.com/Nithish-2809/ElectricSearch",
    featured: true,
  },
  {
    id: 3,
    title: "TeamFlow",
    description:
      "Real-time project management backend with role-based access, live task updates via Socket.IO, and a RESTful API built on Node.js, Express, and MongoDB.",
    img: "/TeamFlow.png",
    skills: ["Node.js", "Express", "MongoDB", "Socket.IO", "REST API", "JWT","Zuatand","Redis","Bullmq"],
    link: "#",
    github: "https://github.com/Nithish-2809/TeamFlow-backend",
    featured: true,
  },
  {
    id: 1,
    title: "LocalLynk",
    description:
      "Hyperlocal MERN marketplace with geospatial product discovery, real-time buyer–seller chat via Socket.IO, Google OAuth, Stripe payments with order tracking, and Cloudinary image uploads.",
    img: "/LocalLynk-img.png",
    skills: ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Stripe", "Google Auth", "Cloudinary"],
    link: "https://local-lynk.onrender.com",
    github: "https://github.com/Nithish-2809/Local-Lynk",
    featured: true,
  },
  {
    id: 4,
    title: "Customer Churn Predictor",
    description:
      "Full-stack web app built in under 24 hours at a college hackathon. Admins analyse user churn risk from submitted issues, visualised with Recharts dashboards and automated alerts via Nodemailer.",
    img: "/Churn.png",
    skills: ["React", "Tailwind", "Node.js", "MongoDB", "Recharts", "Nodemailer", "Express"],
    link: "https://frontendhackathon-olive.vercel.app/",
    github: "https://github.com/Nithish-2809/HACKATHON-BACKEND",
    featured: false,
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.featured);

  return (
    <section className="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            A collection of things I've built — from full-stack marketplaces to
            offline AI desktop apps.
          </p>
        </motion.div>

        <div className="projects-grid">
          {visible.map((project, index) => (
            <motion.div
              className={`project-card${project.featured ? " featured" : ""}`}
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="project-img-wrap">
                <img src={project.img} alt={project.title} className="project-img" />
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>

              {/* Body */}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="skills">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Footer links */}
              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link link-github"
                >
                  <FaGithub /> GitHub
                </a>
                <div className="footer-divider" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link link-live${project.link === "#" ? " disabled" : ""}`}
                  onClick={project.link === "#" ? (e) => e.preventDefault() : undefined}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more / less toggle */}
        <motion.div
          className="projects-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="btn-toggle" onClick={() => setShowAll((s) => !s)}>
            {showAll ? "Show Less" : `Show All Projects (${ALL_PROJECTS.length})`}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;