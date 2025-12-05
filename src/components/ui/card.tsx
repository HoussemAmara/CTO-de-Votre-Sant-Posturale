import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // add this
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded-2xl p-6 bg-white/20 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-4">{children}</div>
);
