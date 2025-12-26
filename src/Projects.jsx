import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "LocalLynk",
      description:
        "LocalLynk is a full-stack marketplace web application that enables users to buy and sell products locally. It features secure authentication, location-based product discovery, real-time chat between buyers and sellers, and Stripe-powered payments with order tracking.",
      img: "/LocalLynk-img.png",
      skills: ["React", "Node.js", "MongoDB", "Express","Google-Auth","Socket.io","Cloudinary","Stripe","Multer","Postman"],
      link: "https://local-lynk.onrender.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Framer Motion showcasing skills, projects, and achievements.",
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
      skills: ["React", "CSS", "Framer Motion", "Vite", "GitHub", "Vercel"],
      link: "https://example.com/portfolio",
    },
    {
      id: 3,
      title: "Notes Keeper App",
      description:
        "Lightweight React app for creating, editing, and deleting notes. Saves data locally for persistence.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      skills: ["React", "LocalStorage", "Hooks", "HTML", "CSS", "JavaScript"],
      link: "https://example.com/notes",
    },
    {
      id: 4,
      title: "Task Manager Dashboard",
      description:
        "A clean productivity dashboard with task management, analytics, and local data handling.",
      img: "https://images.unsplash.com/photo-1581093588401-22d86e3a89b0?auto=format&fit=crop&w=600&q=80",
      skills: ["React", "Chart.js", "Bootstrap", "Node.js", "MongoDB", "Express"],
      link: "https://example.com/taskmanager",
    },
    {
      id: 5,
      title: "Travel Planner",
      description:
        "Trip planning app with interactive UI for destinations, maps integration, and recommendations.",
      img: "https://images.unsplash.com/photo-1502920917128-1aa500764b43?auto=format&fit=crop&w=600&q=80",
      skills: ["React", "API", "Tailwind", "Mapbox", "JavaScript", "Vite"],
      link: "https://example.com/travel",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-title">  A collection of projects that reflect my journey.</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <img src={project.img} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="skills">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
