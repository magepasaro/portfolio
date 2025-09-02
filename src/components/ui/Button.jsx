import React from "react";

export function Button({ children, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";
  const styles = {
    default: "bg-gray-900 text-white hover:bg-gray-800 shadow",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
