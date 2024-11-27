import React from "react";
import "../assets/styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Helmet>
        <title>Contact | Me contacter pour une collaboration</title>
        <meta
          name="description"
          content="Pour toute demande d'entretien ou collaboration, vous pouvez me contacter directement via ce formulaire ou en utilisant mes coordonnées."
        />
        {/* Ajout d'une balise robots pour contrôler l'indexation */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div
        className="card shadow mt-5 mb-5 mx-auto p-5 "
        style={{ maxWidth: "1600px" }}>
        <div className="card-body">
          <h1 className="card-title text-center mb-4 ">ME CONTACTER</h1>
          <p className="sous-titre text-center mb-4 fs-5">
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="row ">
            {/* Colonne gauche : Formulaire */}
            <div className="col-md-6">
              <h3>Formulaire de contact</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Votre adresse email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Sujet"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Votre message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg  ">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
            {/* Colonne droite : Coordonnées */}
            <div className="col-md-6">
              <h3>Mes coordonnées</h3>
              <address>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="ps-2">
                    40 Rue Laure Diebold, 69009 Lyon, France
                  </span>
                </p>

                <p>
                  <FontAwesomeIcon icon={faMobileScreen} />
                  <span className="ps-2">06 20 30 40 50</span>
                </p>
              </address>

              <div className="map-container">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.591413070366!2d4.813039715402042!3d45.77692937910233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e9e9edbff2ab%3A0xd6b7799b3bdb7d87!2s40%20Rue%20Laure%20Diebold%2C%2069000%20Lyon%2C%20France!5e0!3m2!1sfr!2sus!4v1662620901089!5m2!1sfr!2sus"
                  width="100%"
                  height="270px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
