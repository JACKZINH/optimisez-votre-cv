import React, { useState, useEffect } from "react";
import "../assets/styles/GithubProfile.css";

// Composant pour afficher les informations du profil
const ProfileInfo = ({ profile }) => {
  return (
    <div className="profile-container">
      <h2>{profile.name || "Nom indisponible"}</h2>
      <img src={profile.avatar_url} alt="Avatar" className="profile-avatar" />

      <p>{profile.bio || "Aucune bio disponible"}</p>

      <p>
        <strong>Abonnés :</strong> {profile.followers}
      </p>
      <p>
        <strong>Abonnements :</strong> {profile.following}
      </p>
      <p>
        <strong>Créer le : </strong>
        {profile.created_at}
      </p>
      <p>
        <strong>Modifié le : </strong> {profile.updated_at}
      </p>
      <p>
        URL repositories :{" "}
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link text-decoration-none">
          https://api.github.com/users/github-john-doe
        </a>
      </p>
    </div>
  );
};

const GithubProfile = () => {
  // État pour stocker les données du profil
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données depuis l'API GitHub
  const fetchProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.github.com/users/github-john-doe"
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Utilisation de useEffect pour récupérer les données au chargement
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="github-profile-page">
      <h1>Github user</h1>
      {loading && <p>Chargement des données...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {profile && <ProfileInfo profile={profile} />}
    </div>
  );
};

export default GithubProfile;
