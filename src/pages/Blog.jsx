import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Blog.css";
import Coder from "../assets/images/blog/coder.jpg";
import Croissance from "../assets/images/blog/croissance.jpg";
import Google from "../assets/images/blog/google.jpg";
import Screens from "../assets/images/blog/screens.jpg";
import Seo from "../assets/images/blog/seo.jpg";
import Technos from "../assets/images/blog/technos.png";
import { Helmet } from "react-helmet";

function Blog() {
  const articles = [
    {
      id: 1,
      title: "Coder son site en HTML/CSS",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Coder,
      link: "/article/1",
      date: "Publié le 22 août 2022",
    },
    {
      id: 2,
      title: "Vendre ses produits sur le web",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Croissance,
      link: "/article/2",
      date: "Publié le 20 août 2022",
    },
    {
      id: 3,
      title: "Se positionner sur Google",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Google,
      link: "/article/3",
      date: "Publié le 1 août 2022",
    },
    {
      id: 4,
      title: "Coder en responsive design",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Screens,
      link: "/article/4",
      date: "Publié le 31 juillet 2022",
    },
    {
      id: 5,
      title: "Techniques de référencement",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Seo,
      link: "/article/5",
      date: "Publié le 30 juillet 2022",
    },
    {
      id: 6,
      title: "Apprendre à coder",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Technos,
      link: "/article/6",
      date: "Publié le 12 juillet 2022",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Blog | Articles sur le développement web</title>
        <meta
          name="description"
          content="Retrouvez ici des articles intéressants sur le développement web, incluant des sujets comme le HTML, le CSS, le référencement et bien plus."
        />
        {/* Ajout d'une balise robots pour contrôler l'indexation */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Bannière  */}
      <div className="banner"></div>
      {/* Section Blog */}
      <div className="container py-5">
        <h2 className="text-center mb-3 fs-1">BLOG</h2>
        <p className="text-center mb-3">
          Retrouvez ici quelques articles sur le développement web.
        </p>
        <div className="separator-line mb-5"></div>
        <div className="row">
          {articles.map((article) => (
            <div className="col-lg-4 col-md-6 mb-4" key={article.id}>
              <div className="card">
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <Link to={article.link} className="btn btn-primary">
                    Lire l'article
                  </Link>
                  <p className="card-text text-muted mt-3 ">{article.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
