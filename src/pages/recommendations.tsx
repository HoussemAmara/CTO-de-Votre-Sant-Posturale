import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ExerciseCardMinimized from "../components/ui/ExerciseCardMinimized";
import ExerciseDetails from "../components/ui/ExerciseDetails";
import "../styles/Recommendations.css";

export default function Recommendations() {
  const location = useLocation();
  const exercisesFromQCM = location.state?.exercises || [];

  // Normalize exercises
  const normalizedExercises = exercisesFromQCM.map((ex: any) => ({
    ...ex,
    title: ex.title ?? ex.name,
    img: ex.img ?? ex.image,
    products: ex.products ?? [],
  }));

  const [selectedId, setSelectedId] = useState<string | number>(
    normalizedExercises.length > 0 ? normalizedExercises[0].id : ""
  );

  const selectedExercise =
    normalizedExercises.find((ex: any) => ex.id === selectedId) || null;

  return (
    <div
      className="recommendations-wrapper"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')",
      }}
    >
      <div className="overlay"></div>

      <header className="dashboard-header">
        <div>
          <h1>Exercices</h1>
          <p>Explorez les exercices recommandés selon votre profil sportif.</p>
        </div>
        {/* <button
  onClick={async () => {
    try {
      const response = await fetch("http://localhost:5000/run-python");
      const result = await response.text();
      console.log(result);
      alert("Python script exécuté !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'exécution du script Python");
    }
  }}
  className="start-button"
>
  Upload video posture
</button> */}
      </header>

      <main className="dashboard-main">
        {/* Left minimized exercises */}
        <section className="exercise-list">
          {normalizedExercises.map((ex: any) => (
            <ExerciseCardMinimized
              key={ex.id}
              exercise={{
                id: ex.id,
                title: ex.title,
                img: ex.img,
              }}
              onSelect={setSelectedId}
            />
          ))}
        </section>

        {/* Right detailed exercise */}
        <aside>
          <ExerciseDetails exercise={selectedExercise} />
        </aside>
      </main>
    </div>
  );
}
