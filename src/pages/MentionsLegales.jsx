import React from "react";
import { Accordion } from "react-bootstrap";
import "../assets/styles/MentionsLegales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMobileScreen,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const MentionsLegales = () => {
  return (
    <section className="mentions-legales-page" id="mentions-legales">
      <div className="container">
        <h1 className="text-center mt-5 ">MENTIONS LEGALES</h1>
        <div className="separator-line mb-5 mt-3"></div>
        <Accordion className="Accordion" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Editeur du site</Accordion.Header>
            <Accordion.Body>
              <h2>John Doe</h2>
              <address>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold
                </p>
                <p>69009 Lyon, France</p>
                <FontAwesomeIcon icon={faMobileScreen} />
                <a href="tel:0620304050" className="text-decoration-none">
                  {" "}
                  06 20 30 40 50
                </a>
                <br />
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                  href="mailto:john.doe@gmail.com"
                  className="text-decoration-none">
                  {" "}
                  john.doe@gmail.com
                </a>
              </address>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h2>Always Data</h2>
              91 rue du Faubourg Saint Honoré <p>75008 Paris</p>
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <a
                href="https://www.alwaysdata.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none">
                www.alwaysdata.com
              </a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h2>Crédits</h2>
              <p>Site développé par John Doe, étudiant du CEF.</p> Les images
              libres de droit sont issues du site{" "}
              <a
                href="https://pixabay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none">
                Pixabay
              </a>
              .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default MentionsLegales;
