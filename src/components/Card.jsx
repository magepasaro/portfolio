import React from "react";

export function Card({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
      <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
        Ver detalhes
      </button>
    </div>
  );
}
