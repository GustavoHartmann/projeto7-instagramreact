function Logo() {
  return (
    <div className="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div className="separador"></div>
      <img src="assets/img/logo.png" />
    </div>
  );
}

function LogoMobile() {
  return (
    <div className="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  );
}

function InstagramMobile() {
  return (
    <div className="instagram-mobile">
      <img src="assets/img/logo.png" />
    </div>
  );
}

function Pesquisa() {
  return (
    <div className="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
}

function Icones() {
  return (
    <div className="icones">
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}

function IconesMobile() {
  return (
    <div className="icones-mobile">
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
  );
}

function Container() {
  return (
    <div className="container">
      <Logo />
      <LogoMobile />
      <InstagramMobile />
      <Pesquisa />
      <Icones />
      <IconesMobile />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="navbar">
      <Container />
    </div>
  );
}
