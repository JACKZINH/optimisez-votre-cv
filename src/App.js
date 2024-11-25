import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<div>Accueil</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/realisation" element={<div>Réalisations</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/mentions-legales" element={<div>Mentions légales</div>} />
      </Routes>
    </>
  );
}

export default App;
