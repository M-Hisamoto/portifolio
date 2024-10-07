import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiPython,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { 
    id: "html", 
    name: "HTML5", 
    icon: <DiHtml5 />, 
    description: "A linguagem de marcação padrão usada para criar páginas da web." 
  },
  { 
    id: "css", 
    name: "CSS3", 
    icon: <DiCss3 />, 
    description: "Utilizado para estilizar e melhorar o layout das páginas da web." 
  },
  { 
    id: "js", 
    name: "JavaScript", 
    icon: <DiJsBadge />, 
    description: "Uma linguagem de programação para adicionar interatividade às páginas da web." 
  },
  { 
    id: "node", 
    name: "Node.js", 
    icon: <DiNodejsSmall />, 
    description: "Plataforma para executar JavaScript do lado do servidor." 
  },
  { 
    id: "python", 
    name: "Python", 
    icon: <DiPython />, 
    description: "Python é uma linguagem de programação poderosa e versátil usada bastente para automação." 
  },
  { 
    id: "react", 
    name: "React", 
    icon: <DiReact />, 
    description: "Uma biblioteca JavaScript para construir interfaces de usuário." 
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
