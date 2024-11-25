import React from "react";
import { Link } from "react-router-dom"; // Pour les liens internes dans l'application React
import "../assets/styles/Footer.css"; // Import du fichier CSS spécifique pour le footer

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Section 1 : Informations de contact */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="footer-list">
              <li>
                <strong>Adresse : </strong> 123 rue de l'Exemple, Paris, France
              </li>
              <li>
                <strong>Téléphone : </strong> +33 1 23 45 67 89
              </li>
              <li>
                <strong>Email : </strong> contact@exemple.com
              </li>
            </ul>
          </div>

          {/* Section 2 : Liens de navigation supplémentaires */}
          <div className="col-md-4">
            <h5>Liens rapides</h5>
            <ul className="footer-list">
              <li>
                <Link to="/about" className="footer-link">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3 : Réseaux sociaux */}
          <div className="col-md-4">
            <h5>Suivez-nous</h5>
            <ul className="footer-social">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4 : Copyright */}
        <div className="row">
          <div className="col text-center mt-4">
            <p>&copy; 2024 John Doe - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
