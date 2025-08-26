import React from "react";
import { Card, CardContent } from "./components/ui/Card"; // caminho relativo
import { Button } from "./components/ui/Button"; // caminho relativo

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>
        <nav className="space-x-6">
          <a href="#sobre" className="hover:text-blue-600">Sobre</a>
          <a href="#projetos" className="hover:text-blue-600">Projetos</a>
          <a href="#habilidades" className="hover:text-blue-600">Habilidades</a>
          <a href="#contato" className="hover:text-blue-600">Contato</a>
        </nav>
      </header>

      {/* Hero / Sobre mim */}
      <section id="sobre" className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Olá, eu sou a Maria</h2>
        <p className="text-lg max-w-2xl mb-6">
          Profissional apaixonada por transformar desafios em soluções concretas. Minha trajetória une tecnologia, educação e gestão de projetos, desde a concepção de ideias até a implementação de experiências digitais que geram impacto real.
        </p>
        <p className="text-lg max-w-2xl mb-6">
          Ao longo da minha carreira, já colaborei com escolas, plataformas educacionais e comunidades, garantindo que a tecnologia esteja a serviço do aprendizado e do crescimento das pessoas. Minha abordagem combina análise de dados, atenção aos detalhes e criatividade, sempre buscando resultados que façam a diferença.
        </p>
        <p className="text-lg max-w-2xl mb-6">
          Acredito que cada projeto é uma história a ser contada e cada desafio, uma oportunidade de inovar. Aqui no meu portfólio, compartilho minhas experiências, projetos e soluções – e convido você a explorar e se inspirar comigo nessa jornada.
        </p>
        <Button className="px-6 py-3 text-lg">Veja meus projetos</Button>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[1, 2, 3].map((p) => (
            <Card key={p} className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-6">
                <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Projeto {p}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Adicionar descrição breve do projeto, quais tecnologias foram usadas e qual problema resolveu.
                </p>
                <Button variant="outline">Ver detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Power BI", "SQL", "Gestão de Projetos"].map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <p className="mb-6">Adoraria conversar sobre oportunidades e projetos interessantes.</p>
        <div className="space-x-6">
          <a href="mailto:seuemail@email.com" className="text-blue-600 hover:underline">E-mail</a>
          <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 mt-10 shadow-inner">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

