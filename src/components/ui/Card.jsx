import React from "react";

// Card base simples
export function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg ${className}`}>{children}</div>;
}

// CardContent para estrutura interna
export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
