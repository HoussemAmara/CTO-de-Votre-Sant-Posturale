import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
        alt="Background"
        className="background-image"
      />

      {/* Dark overlay */}
      <div className="dark-overlay"></div>

      {/* Content */}
      <div className="content">
        <h1>DECATHLON DIGITAL</h1>

        <p>
          Boostez vos performances, suivez vos entraînements et transformez votre
          corps. Votre parcours sportif commence ici !
        </p>

        <button
          onClick={() => (window.location.href = "/qcm")}
          className="start-button"
        >
          Commencer
        </button>

        <footer>
          © {new Date().getFullYear()} DECATHLON DIGITAL
        </footer>
      </div>
    </div>
  );
}
