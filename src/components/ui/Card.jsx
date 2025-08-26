import React from "react";

// Card é um componente simples de demonstração
export function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-full max-w-sm mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
