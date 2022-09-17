import React from "react";
import Sugestoes from "./Sugestoes";

function Usuarios() {
  const [nome, setNome] = React.useState("Anonimo")
  const [nomePerfil, setNomePerfil] = React.useState("Anonimo")

  function perguntarNome() {
    let promptNome = prompt("Qual o seu nome?")
    let promptNomePerfil = prompt("Qual o nome do seu perfil?")
    promptNome !== "" ? setNome(promptNome) : setNome("Nome inválido")
    promptNomePerfil !== "" ? setNomePerfil(promptNomePerfil) : setNomePerfil("Nome inválido")
  }

  return (
    <div className="usuario">
      <img src="assets/img/catanacomics.svg" alt="imagem usuário"/>
      <div className="texto">
        <strong>{nomePerfil}</strong>
        <span>
          {nome}
          <ion-icon name="pencil" onClick={perguntarNome} ></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Usuarios />
      <Sugestoes />
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
