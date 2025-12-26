import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Achieve from "./Achieve";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          Nithish<span>Dev</span>
        </div>

        {/* Hamburger icon */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className="nav-item" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="nav-item" onClick={closeMenu}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-item" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/achieve" className="nav-item" onClick={closeMenu}>
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-item" onClick={closeMenu}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ⚙️ Route setup below navbar */}
      <div className="route-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achieve" element={<Achieve />} />
        </Routes>
      </div>
    </>
  );
}

export default Nav;
