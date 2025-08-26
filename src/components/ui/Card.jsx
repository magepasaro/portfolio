import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);
