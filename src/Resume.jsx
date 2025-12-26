import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

function Resume() {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      college: "MGIT, Hyderabad",
      duration: "2024 – Present",
      score: "CGPA: 9.0",
    },
    {
      id: 2,
      degree: "Intermediate (MPC)",
      college: "SRI CHAITANYA JR COLLEGE,HYDERABAD",
      duration: "2022 – 2024",
      score: "Percentage: 96%",
    },
    {
      id: 3,
      degree: "SSC",
      college: "KKR'S GOWTHAM CONCEPT SCHOOL,HYDERABAD",
      duration: "2020 – 2021",
      score: "Percentage: 97%",
    },
  ];

  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git / GitHub",
    "Bootstrap",
    "OOPS",
    "DSA",
    "Python",
    "Websockets"
  ];

  const experiences = [
    {
      id: 1,
      title: "Web Development Intern",
      org: "TechNova Labs (Virtual)",
      duration: "June 2024 – Aug 2024",
      desc: "Built responsive web components and worked on frontend optimizations using React and Tailwind CSS.",
    },
    {
      id: 2,
      title: "Personal Projects",
      org: "Self-Learning Journey",
      duration: "2023 – Present",
      desc: "Developed multiple MERN stack projects including E-commerce Store, Task Manager, and Notes App.",
    },
  ];

  return (
    <section className="resume">
      <div className="resume-container">
        <motion.h2
          className="resume-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Resume 📜
        </motion.h2>

        <motion.p
          className="resume-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A snapshot of my academic journey, technical skills, and practical experience in web development.
        </motion.p>

        {/* 🎓 Education Section */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="section-title">🎓 Education</h3>
          <div className="timeline">
            {education.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <h4>{item.degree}</h4>
                <p className="college">{item.college}</p>
                <p className="duration">{item.duration}</p>
                <p className="score">{item.score}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 💻 Skills Section */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="section-title">💻 Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.span
                className="skill-tag"
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 🧠 Experience Section */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="section-title">🧠 Experience</h3>
          <div className="exp-grid">
            {experiences.map((exp, index) => (
              <motion.div
                className="exp-card"
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4>{exp.title}</h4>
                <p className="exp-org">{exp.org}</p>
                <p className="exp-duration">{exp.duration}</p>
                <p className="exp-desc">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 📜 Download Resume */}
        <motion.div
          className="resume-download"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="/Nithish_Reddy_Resume.pdf" download className="btn-primary">
            📥 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
