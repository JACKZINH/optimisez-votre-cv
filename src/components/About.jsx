import React from "react";
import "../assets/styles/About.css";
import AboutImage from "../assets/images/john-doe-about.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container mt-5">
        {/* Card Bootstrap */}
        <div className="card shadow-lg p-4">
          <div className="row">
            {/* Colonne gauche : Titre et description */}
            <div className="col-md-6 d-flex flex-column justify-content-start pt-3 text-start">
              <h2 className="card-title">À propos</h2>

              <p className="card-text mt-3">
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web</strong> au CEF. Au cours de
                cette formation, j'ai pu acquérir des bases solides pour
                travailler dans le domaine du développement web.
              </p>
              <p className="card-text">
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de{" "}
                <strong>développeur web full stack</strong>.
              </p>
              <p className="card-text">
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>

            {/* Colonne droite : Image et progress bars */}
            <div className="image-container col-md-6">
              {/* Image */}
              <div className="text-center mb-4 me-4">
                <img
                  src={AboutImage}
                  className="img-fluid rounded"
                  alt="Profil développeur"
                  style={{ maxHeight: "250px" }} // Taille maximale pour garder l'image proportionnée
                />
              </div>
              <h2>Mes compétences</h2>

              {/* Progress bars */}
              <div className="progress-container">
                <div className="progress-bar mb-3">
                  <p className="text-start">HTML5</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "90%" }}>
                      90%
                    </div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="text-start">CSS3</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}>
                      80%
                    </div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="text-start">JavaScript</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "70%" }}>
                      70%
                    </div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="text-start">PHP</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "60%" }}>
                      60%
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="text-start">React</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "50%" }}>
                      50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
