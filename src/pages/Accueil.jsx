import React from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/Accueil.css";
import About from "../components/About";

const Accueil = () => {
  return (
    <div className="accueil-container">
      {/* Optimisation SEO avec React Helmet */}
      <Helmet>
        <title>John Doe | Développeur Web Full Stack</title>
        <meta
          name="description"
          content="Bienvenue sur le site de John Doe, développeur web full stack. Découvrez mes compétences, mes projets et bien plus."
        />
        <meta
          name="keywords"
          content="Développeur web, Full Stack, portfolio, John Doe, React, PHP, HTML, CSS, JavaScript"
        />
        <meta
          property="og:title"
          content="John Doe - Développeur Web Full Stack"
        />
        <meta
          property="og:description"
          content="Bienvenue sur le site de John Doe, développeur web full stack. Découvrez mes compétences, mes projets et bien plus."
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.monsite.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="hero-section">
        <div className="overlay">
          <h1 className="hero-title text-white">Bonjour, je suis John Doe</h1>
          <h2 className="hero-subtitle text-white">
            Développeur web full stack
          </h2>
          <a href="/#about" className="btn btn-primary">
            En savoir plus
          </a>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Accueil;
