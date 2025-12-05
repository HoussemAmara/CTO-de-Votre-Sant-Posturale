import React from "react";

interface Props {
  exercise: {
    id: string | number;
    title: string;
    img: string;
  };
  onSelect: (id: string | number) => void;
}

export default function ExerciseCardMinimized({ exercise, onSelect }: Props) {
  return (
    <div
      className="exercise-card"
      onClick={() => onSelect(exercise.id)}
    >
      <div className="exercise-card-image">
        <img src={exercise.img} alt={exercise.title} />
        <div className="overlay">
          <h2>{exercise.title}</h2>
        </div>
      </div>
    </div>
  );
}
