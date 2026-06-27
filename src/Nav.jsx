import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Achieve from "./Achieve";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeMenu = () => setMenuOpen(false);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  // Lock body scroll when menu open on mobile
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="nav-logo">
          Nithish<span>Dev</span>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {[
            { to: "/",        label: "Home"         },
            { to: "/resume",  label: "Resume"       },
            { to: "/projects",label: "Projects"     },
            { to: "/achieve", label: "Achievements" },
            { to: "/contact", label: "Contact Me"   },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-item${isActive ? " active" : ""}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      <div className="route-container">
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/resume"  element={<Resume />}  />
          <Route path="/projects"element={<Projects />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/achieve" element={<Achieve />} />
        </Routes>
      </div>
    </>
  );
}

export default Nav;