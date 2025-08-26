import React from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">Maria Geovanna</h1>
          <ul className="flex gap-6">
            <li><a href="#sobre" className="hover:text-gray-700">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-gray-700">Projetos</a></li>
            <li><a href="#contato" className="hover:text-gray-700">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero / Sobre */}
      <section id="sobre" className="bg-gray-50 py-20 px-6 text-center mt-20">
        <h2 className="text-4xl font-bold mb-6">Olá, eu sou Maria</h2>
        <p className="text-lg mb-6">
          Profissional apaixonada por transformar desafios em soluções concretas. Minha trajetória une tecnologia, educação e gestão de projetos, desde a concepção de ideias até a implementação de experiências digitais que geram impacto real.
        </p>
        <p className="text-lg mb-6">
          Ao longo da minha carreira, já colaborei com escolas, plataformas educacionais e comunidades, garantindo que a tecnologia esteja a serviço do aprendizado e do crescimento das pessoas. Minha abordagem combina análise de dados, atenção aos detalhes e criatividade, sempre buscando resultados que façam a diferença.
        </p>
        <p className="text-lg mb-6">
          Acredito que cada projeto é uma história a ser contada e cada desafio, uma oportunidade de inovar. Aqui no meu portfólio, compartilho minhas experiências, projetos e soluções – e convido você a explorar e se inspirar comigo nessa jornada.
        </p>
        <Button className="px-6 py-3 text-lg">Veja meus projetos</Button>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Projeto 1" description="Descrição do projeto 1"/>
          <Card title="Projeto 2" description="Descrição do projeto 2"/>
          <Card title="Projeto 3" description="Descrição do projeto 3"/>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-200 rounded-full px-4 py-2">React</span>
          <span className="bg-gray-200 rounded-full px-4 py-2">JavaScript</span>
          <span className="bg-gray-200 rounded-full px-4 py-2">Tailwind</span>
          <span className="bg-gray-200 rounded-full px-4 py-2">HTML</span>
          <span className="bg-gray-200 rounded-full px-4 py-2">CSS</span>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Contato</h2>
        <div className="flex flex-col gap-4">
          <a href="mailto:email@example.com" className="text-blue-600 hover:underline">email@example.com</a>
          <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 text-center text-gray-500">
        © 2025 Maria Geovanna. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
