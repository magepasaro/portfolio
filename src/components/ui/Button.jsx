import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
  >
    {text}
  </button>
);
