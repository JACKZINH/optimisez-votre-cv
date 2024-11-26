import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/realisations" element={<div>Realisation</div>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<div>Mentions légales</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
