import React from "react";

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300">
      {children}
    </button>
  );
}
