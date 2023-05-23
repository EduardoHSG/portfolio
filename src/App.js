import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";

function App() {
  const inicio = <Inicio />;
  const sobre = <Sobre />;
  const projetos = <Projetos />;
  const contato = <Contato />;

  const [start, setStart] = useState(inicio);

  const renderizar = (event) => {
    switch (event) {
      case "main":
        setStart(inicio);
        break;
      case "about":
        setStart(sobre);
        break;
      case "projects":
        setStart(projetos);
        break;
      case "contact":
        setStart(contato);
        break;
      default:
        setStart(inicio);
    }
  };

  return (
    <div className="App">
      <Navbar renderizar={renderizar} />
      {start}
      <Footer />
    </div>
  );
}

export default App;
