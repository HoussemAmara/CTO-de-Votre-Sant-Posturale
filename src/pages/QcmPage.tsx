import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exercices from "../data/exercices.json"; // adjust path
import "../App.css";

export default function SportQCM() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      title: "Niveau sportif actuel",
      options: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    },
    {
      title: "Sports pratiqués régulièrement",
      options: [
        "Musculation / Fitness",
        "Course / Endurance",
        "Sports collectifs",
        "Yoga / Pilates",
        "Natation",
        "Cyclisme",
        "Sports de combat",
        "Aucun",
      ],
    },
    {
      title: "Objectif principal",
      options: [
        "Perte de poids",
        "Prise de masse musculaire",
        "Amélioration performance cardio",
        "Souplesse / Mobilité",
      ],
    },
    {
      title: "Fréquence d’entraînement actuelle",
      options: ["0 fois / semaine", "1-2 fois / semaine", "3-4 fois / semaine", "5+ fois / semaine"],
    },
    {
      title: "Disponibilité par jour",
      options: ["< 20 minutes", "20-40 minutes", "40-60 minutes", "1h ou plus"],
    },
    {
      title: "Contraintes physiques",
      options: ["Douleurs genoux", "Douleurs dos", "Douleurs épaules", "Douleurs hanches", "Aucune"],
    },
    {
      title: "Environnement d'entraînement préféré",
      options: ["Maison", "Salle de sport", "Outdoor / Parc", "Studio Yoga / Pilates"],
    },
  ];

  // Handle selecting an option
  const handleSelect = (answer: string) => {
    const newAnswers = { ...answers, [step]: answer };
    setAnswers(newAnswers);

    if (step === questions.length - 1) {
      // Last question → finish
      handleFinish(newAnswers);
    } else {
      setStep(step + 1);
    }
  };

  // Handle finish logic
const handleFinish = (finalAnswers: Record<number, string>) => {
  console.log("finish");

  const objective = finalAnswers[2]; // Objectif principal
  const environment = finalAnswers[6]; // Environnement préféré

  let filteredExercises = exercices;

  // Step 1: filter based on objective first
  const objectivesToCheck = [
    "Prise de masse musculaire",
    "Perte de poids",
    "Amélioration performance cardio",
    "Souplesse / Mobilité",
  ];

  if (objectivesToCheck.includes(objective)) {
    filteredExercises = filteredExercises.filter((ex) =>
      ex.tags.includes(objective)
    );
  }

  // Step 2: if objective is muscle building, check gym environment
  if (objective === "Prise de masse musculaire") {
    if (environment === "Salle de sport") {
      // Keep only exercises that can be done in a gym
      filteredExercises = filteredExercises.filter((ex) =>
        ex.tags.includes("Salle de sport")
      );
    } else {
      // Exclude exercises that require a gym
      filteredExercises = filteredExercises.filter(
        (ex) => !ex.tags.includes("Salle de sport")
      );
    }
  }

  console.log("Filtered exercises:", filteredExercises);

  // Navigate to recommendations page with filtered exercises
  navigate("/recommendations", { state: { exercises: filteredExercises } });
};



  return (
    <div className="qcm-container">
      <div className="background-image"></div>
      <div className="dark-overlay"></div>

      <div className="qcm-card">
        <h1>Profilage Sportif</h1>

        {step < questions.length ? (
          <div className="question-step">
            <h2>{questions[step].title}</h2>
            <div className="options-grid">
              {questions[step].options.map((opt, index) => (
                <button key={index} className="option-btn" onClick={() => handleSelect(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="results">
            <h2>Profil généré 🎯</h2>
            <p>Voici un résumé de vos réponses :</p>
            <div className="answers-summary">
              {Object.keys(answers).map((qIndex) => {
                const index = Number(qIndex);
                return (
                  <p key={qIndex}>
                    <strong>{questions[index].title}:</strong> {answers[index]}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
