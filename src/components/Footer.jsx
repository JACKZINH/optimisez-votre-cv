import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  // État pour gérer l'affichage du bouton
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Vérifie la position de défilement
  const checkScrollPosition = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    setShowScrollTop(isAtBottom);
  };

  // Ecouteur d'événements pour le défilement
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Fonction pour revenir en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      {/* Partie supérieure - Gris clair */}
      <div className="footer-main">
        <div className="container py-4">
          <div className="row">
            {/* Section Contact */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">John Doe</h5>
              <p className="mb-0">40 Rue Laure Diebold</p>
              <p className="mb-0">69009 Lyon, France</p>
              <p>Téléphone : 06 20 30 40 50</p>
              <div className="footer-socials">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="footer-icon"
                  />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="lg"
                    className="footer-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className="footer-icon"
                  />
                </a>
              </div>
            </div>

            {/* Section Liens utiles */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">Liens utiles</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Accueil
                  </Link>
                </li>
                <li>
                  <a href="/#about">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    À propos
                  </a>
                </li>
                <li>
                  <Link to="/services">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Me contacter
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    {""}
                    Mentions légales{""}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section Réalisations */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">Mes dernières réalisations</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/realisations">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Fresh food
                  </Link>
                </li>
                <li>
                  <Link to="/realisations">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Restaurant Akira
                  </Link>
                </li>
                <li>
                  <Link to="/realisations">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Espace bien-être
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section Articles */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">Mes derniers articles</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/blog">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Coder son site en HTML/CSS
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Vendre ses produits sur le web
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size="xs"
                      className="chevron-right"
                    />
                    Se positionner sur Google
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Partie inférieure - Sombre */}
      <div className="footer-bottom bg-dark text-center text-white py-3">
        {/* Bouton retour en haut */}
        {showScrollTop && (
          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Retour en haut">
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        )}
        <p className="text-white">© Designed by John Doe</p>
      </div>
    </footer>
  );
}

export default Footer;
