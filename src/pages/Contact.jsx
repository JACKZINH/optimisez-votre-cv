import React from "react";
import "../assets/styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Bloc unique contenant à la fois le formulaire et les coordonnées */}
        <div className="contact-block">
          {/* Contenu principal */}
          <div className="contact-content">
            {/* Titre principal "ME CONTACTER" */}
            <h1 className="text-center">ME CONTACTER</h1>
            <p className="text-center">
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <div className="blue-line"></div>

            {/* Formulaire de contact */}
            <div className="contact-form">
              <h2>Formulaire de contact</h2>
              <div className="blue-line"></div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>

            {/* Coordonnées */}
            <div className="contact-info">
              <h2>Mes coordonnées</h2>
              <div className="blue-line"></div>
              <p>
                <strong>John Doe</strong>
              </p>
              <ul>
                <li>Adresse : 123 rue de l'Exemple, Paris</li>
                <li>Téléphone : +33 1 23 45 67 89</li>
                <li>Email : johndoe@example.com</li>
              </ul>

              {/* Carte Google Map */}
              <h4>Notre emplacement</h4>
              <div className="google-map">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091086004875!2d-122.4019781846851!3d37.78877687975651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858092a72fe669%3A0x4c7ebea254b22228!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1646284557681!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
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
