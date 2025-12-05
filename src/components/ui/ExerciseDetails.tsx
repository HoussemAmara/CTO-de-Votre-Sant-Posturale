import React from "react";
import ProductCard from "./produit"; // <-- your product component

interface Product {
  id: string | number;
  name: string;
  img: string;
}

interface Exercise {
  id?: number | string;
  title?: string;
  name?: string;
  img?: string;
  image?: string;
  short?: string;
  conseilles?: string;
  instructions?: string[];
  products?: Product[];
}

interface Props {
  exercise: Exercise | null;
}

export default function ExerciseDetails({ exercise }: Props) {
  if (!exercise) return <p>Sélectionnez un exercice pour voir les détails.</p>;

  // Normalize fields
  const title = exercise.title ?? exercise.name ?? "Exercice";
  const img = exercise.img ?? exercise.image ?? "";
  const products = exercise.products ?? [];

  // 🔥 Log products to test
  console.log("Products of exercise:", products);

  return (
    <div className="exercise-details">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      {exercise.short && <p>{exercise.short}</p>}

      {exercise.conseilles && (
        <div>
          <h3>Conseils :</h3>
          <p>{exercise.conseilles}</p>
        </div>
      )}

      {exercise.instructions && exercise.instructions.length > 0 && (
        <div>
          <h3>Instructions :</h3>
          <ol>
            {exercise.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Products at the bottom */}
      {exercise.products && exercise.products.length > 0 && (
  <div className="products-section">
    <h3>Matériel recommandé :</h3>
    <div className="products-list">
      {exercise.products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  </div>
)}

    </div>
  );
}
