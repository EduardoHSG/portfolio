import React from "react";
import "./Contato.css";
import github from "./imgContact/Github_black.png";
import gmail from "./imgContact/Gmail_black.png";
import linkedIn from "./imgContact/LinkedIN_black.png";

export default function Contato() {
  const email = "eduardogomes3365@gmail.com";
  return (
    <main className="contato">
      <h1 className="titulo-contato">Contato</h1>
      <div className="container">
        <div className="github link">
          <img src={github} alt="Github" />
          <a
            href="https://github.com/EduardoHSG"
            className="contato-link"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="gmail link">
          <img src={gmail} alt="Gmail" />
          <a href={`mailto:${email}`} className="contato-link" target="_blank">
            Gmail
          </a>
        </div>
        <div className="linkedin link">
          <img src={linkedIn} alt="Linkedin" />
          <a
            href="https://www.linkedin.com/in/eduardo-gomes11/"
            className="contato-link"
            target="_blank"
          >
            Linked In
          </a>
        </div>
      </div>
    </main>
  );
}
