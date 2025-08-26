import React from "react";

// Antes: import { Card } from "@/components/ui/card";
// Corrigido para caminho relativo:
import { Card } from "./components/ui/Card";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Meu Portfólio</h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Bem-vindo ao meu portfólio digital! Aqui apresento projetos, habilidades e informações de contato.
      </p>

      {/* Exemplo de uso do Card */}
      <Card title="Projeto Exemplo" description="Descrição do projeto exemplo." />
    </div>
  );
}


