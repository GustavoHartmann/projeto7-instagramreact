import React from "react";
import Sugestoes from "./Sugestoes";

function Usuarios() {
  const [nome, setNome] = React.useState("Anonimo")
  const [nomePerfil, setNomePerfil] = React.useState("Anonimo")
  const [imagemPerfil, setImagemPerfil] = React.useState("assets/img/usuario-anonimo.png")

  function perguntarNome() {
    let promptNome = prompt("Qual o seu nome?")
    let promptNomePerfil = prompt("Qual o nome do seu perfil?")
    promptNome !== "" && promptNome !== null ? setNome(promptNome) : setNome("Nome inválido")
    promptNomePerfil !== "" && promptNomePerfil !== null ? setNomePerfil(promptNomePerfil) : setNomePerfil("Nome inválido")
  }

  function perguntarImagem() {
    let promptImagemPerfil = prompt("Qual a URL da imagem de perfil?")
    promptImagemPerfil !== "" && promptImagemPerfil !== null ? setImagemPerfil(promptImagemPerfil) : setImagemPerfil("assets/img/usuario-anonimo.png")
  }

  return (
    <div className="usuario">
      <img src={imagemPerfil} alt="imagem usuário" onClick={perguntarImagem}/>
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
