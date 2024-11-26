import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer le menu burger

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo textuel */}
          <Link className="navbar-brand" to="/">
            JOHN DOE
          </Link>

          {/* Bouton du menu burger */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de navigation */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setMenuOpen(false)}>
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/services"
                  onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/realisations"
                  onClick={() => setMenuOpen(false)}>
                  Realisations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/blog"
                  onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={() => setMenuOpen(false)}>
                  Me Contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
