import React from "react";

// Componente Button simples para uso em todo o portfólio
export function Button({ children, variant = "solid", className = "", ...props }) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
