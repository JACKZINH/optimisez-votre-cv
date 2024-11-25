import React from "react";
import "../assets/styles/Accueil.css";

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="hero-section">
        <div className="overlay">
          <h1 className="hero-title">Bonjour, je suis John Doe</h1>
          <h2 className="hero-subtitle">Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
