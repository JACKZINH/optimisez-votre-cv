import React from "react";
import "../assets/styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faFileCode,
  faMagnifyingGlassDollar,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="services-container">
      {/* Bannière  */}
      <div className="banner"></div>
      {/* Section Services */}
      <div className="container py-5">
        <h2 className="text-center mb-3 fs-1">MON OFFRE DE SERVICES</h2>
        <p className="text-center mb-3">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div className="separator-line mb-5"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <FontAwesomeIcon
                icon={faDisplay}
                size="4x"
                className="services-icon"
              />
              <div className="card-body text-center">
                <h5 className="card-title  fs-3">UX DESIGN</h5>
                <p className="card-text ">
                  L'UX Design est une méthode de conception centrée sur
                  l'utilisateur. Son but est d'offrir une exprérience de
                  navigation optimale à l'intérnaute.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <FontAwesomeIcon
                icon={faFileCode}
                size="4x"
                className="services-icon"
              />
              <div className="card-body text-center">
                <h5 className="card-title  fs-3">DEVELOPPEMENT WEB</h5>
                <p className="card-text ">
                  Le développemtn de sites web repos sur l'utilisation de
                  languages HTML, CSS, JavaScript et PHP.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <FontAwesomeIcon
                icon={faMagnifyingGlassDollar}
                size="4x"
                className="services-icon"
              />
              <div className="card-body text-center">
                <h5 className="card-title  fs-3">REFERENCEMENT</h5>
                <p className="card-text ">
                  Le référencement naturel d'un site, aussi appelé SEO, consiste
                  à mettre des techniques en oeuvre pour améliorer sa postion
                  dans les résultats des moteurs de recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
