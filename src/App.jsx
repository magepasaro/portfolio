import React from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";

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

    {/* Hero / Sobre */}
      <section id="sobre" className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Olá, eu sou Maria Geovanna</h2>
        <p className="text-lg max-w-2xl mb-6 leading-relaxed">
          Sou apaixonada por tecnologia, design e educação, e construí minha trajetória explorando a interseção entre esses mundos. 
          Já atuei como <strong>Analista de Projetos/Negócios na Alura</strong>, onde liderei iniciativas para implementar aulas de programação 
          em escolas públicas e privadas, além de acompanhar clientes em processos de implantação tecnológica.
        </p>
        <p className="text-lg max-w-2xl mb-6 leading-relaxed">
          Minha experiência também passa por <strong>gestão de comunidades e projetos sociais</strong>, como o Engenheiros Sem Fronteiras e 
          o projeto Geração Mulher, sempre com foco em capacitar pessoas e criar impacto real.
        </p>
        <p className="text-lg max-w-2xl mb-6 leading-relaxed">
          Hoje, me especializo em <strong>tecnologias educacionais, desenvolvimento web e análise de dados</strong>, com domínio de ferramentas 
          como React, JavaScript, SQL, Power BI, Tailwind, Notion e Jira. Também tenho experiência em design, edição de vídeo e interfaces digitais.
        </p>
        <p className="text-lg max-w-2xl mb-6 leading-relaxed">
          Meu objetivo é unir <strong>criatividade e tecnologia</strong> para construir experiências digitais que sejam funcionais, acessíveis e transformadoras 🚀
        </p>
      <Button>Veja meus projetos</Button>
      </section>


      {/* Projetos */}
      <section id="projetos" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card
            title="Projeto 1"
            description="Descrição breve do projeto, quais tecnologias foram usadas e qual problema resolveu."
          />
          <Card
            title="Projeto 2"
            description="Descrição breve do projeto, quais tecnologias foram usadas e qual problema resolveu."
          />
          <Card
            title="Projeto 3"
            description="Descrição breve do projeto, quais tecnologias foram usadas e qual problema resolveu."
          />
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Power BI", "SQL", "Gestão de Projetos"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <p className="mb-6">Adoraria conversar sobre oportunidades e projetos interessantes.</p>
        <div className="space-x-6">
          <a href="mailto:seuemail@email.com" className="text-blue-600 hover:underline">
            E-mail
          </a>
          <a
            href="https://linkedin.com/in/seulinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/seugithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 mt-10 shadow-inner">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}


