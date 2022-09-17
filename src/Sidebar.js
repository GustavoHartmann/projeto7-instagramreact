import Sugestoes from "./Sugestoes";

function Usuarios() {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          Catana
          <ion-icon name="pencil"></ion-icon>
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
