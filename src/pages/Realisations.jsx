import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Realisations.css";
import Food from "../assets/images/portfolio/fresh-food.jpg";
import Espace from "../assets/images/portfolio/espace-bien-etre.jpg";
import Restau from "../assets/images/portfolio/restaurant-japonais.jpg";

function Realisations() {
  const projets = [
    {
      id: 1,
      title: "Fresh food",
      description: "Réalisation d'un site avec commande en ligne.",
      image: Food,
      link: "/projet/1",
      technos: "Site réalisé avec PHP et MySQL",
    },
    {
      id: 2,
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      image: Restau,
      link: "/projet/2",
      technos: "Site réalisé avec WordPress",
    },
    {
      id: 3,
      title: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      image: Espace,
      link: "/projet/3",
      technos: "Site réalisé en HTML/CSS",
    },
  ];
  return (
    <div>
      {/* Bannière  */}
      <div className="banner"></div>
      {/* Section Projets */}
      <div className="container py-5">
        <h2 className="text-center mb-3 fs-1">PORTFOLIO</h2>
        <p className="text-center mb-3">
          Voici quelques-unes de mes réalisations.
        </p>
        <div className="separator-line mb-5"></div>
        <div className="row">
          {projets.map((projet) => (
            <div className="col-lg-4 col-md-6 mb-4" key={projet.id}>
              <div className="card">
                <img
                  src={projet.image}
                  className="card-img-top"
                  alt={projet.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title  fs-2">{projet.title}</h5>
                  <p className="card-text ">{projet.description}</p>
                  <Link to={projet.link} className="btn btn-outline-primary ">
                    Voir
                  </Link>
                  <p className="card-text text-muted mt-3 ">{projet.technos}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Realisations;
