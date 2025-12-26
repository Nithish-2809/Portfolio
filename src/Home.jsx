import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

function Home() {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <section className="home">
      <div className="home-content">
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Hello, I'm</h2>
          <h1 className="gradient-text">Nithish Reddy</h1>
          <h3>MERN Stack Developer | Problem Solver | Tech Enthusiast</h3>
          <p>
            Iam a 2nd-year B.Tech student at MGIT HYDERABAD and a passionate MERN Stack Developer who loves turning real-world ideas into clean, functional, and responsive web experiences.
            I enjoy solving problems through code, and I’m steadily improving my DSA skills alongside building full-stack projects.
            Currently exploring backend architecture and machine learning to expand my technical depth and build smarter web applications.
          </p>

          <div className="home-buttons">
            {/* ✅ navigate to Projects page */}
            <button className="btn-primary" onClick={() => navigate("/projects")}>
              View Projects
            </button>

            {/* ✅ navigate to Contact page */}
            <button className="btn-outline" onClick={() => navigate("/contact")}>
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          className="home-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80"
            alt="Developer"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
