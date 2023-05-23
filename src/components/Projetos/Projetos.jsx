import React from "react";
import buscadorCep from "./img/buscadorCep.jpg";
import geradorDeSenha from "./img/geradorDeSenha.jpg";
import "./Projetos.css";

export default function Projetos() {
  return (
    <main className="projetos">
      <h1 className="projetos-titulo">Projetos</h1>
      <section className="card-projetos">
        <div className="card card1">
          <div className="container-img">
            <img className="img-card" src={buscadorCep} alt="buscador de cep" />
          </div>
          <h3>Buscador de cep</h3>
          <a
            href="https://buscador-de-cep-update.vercel.app/"
            className="access-link"
            target="_blank"
          >
            Acessar
          </a>
        </div>
        <div className="card card2">
          <div className="container-img">
            <img
              className="img-card"
              src={geradorDeSenha}
              alt="gerador de senha"
            />
          </div>
          <h3>Gerador de Senha</h3>
          <a
            href="https://geradordesenha-six.vercel.app/"
            className="access-link"
            target="_blank"
          >
            Acessar
          </a>
        </div>
      </section>
      <p className="text">Em breve mais projetos.</p>
    </main>
  );
}
