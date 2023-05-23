import React from "react";
import "./Navbar.css";

export default function Navbar({ renderizar }) {
  const handleClick = (e) => {
    let event = e.target.id;
    renderizar(event);
  };
  return (
    <header>
      <nav className="navigation">
        <h2 id="main" onClick={handleClick}>
          Eduardo
        </h2>
        <ul className="list">
          <li>
            <a id="main" className="button" onClick={handleClick}>
              Início
            </a>
          </li>
          <li>
            <a id="about" className="button" onClick={handleClick}>
              Sobre
            </a>
          </li>
          <li>
            <a id="projects" className="button" onClick={handleClick}>
              Projetos
            </a>
          </li>
          <li>
            <a id="contact" className="button" onClick={handleClick}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
