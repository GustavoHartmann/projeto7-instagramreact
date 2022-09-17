function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.imagem} alt={props.perfil} />
      </div>
      <div className="usuario">{props.perfil}</div>
    </div>
  );
}

export default function Stories() {
  const listaStories = [
    {
      imagem: "assets/img/9gag.svg",
      perfil: "9gag",
    },
    {
      imagem: "assets/img/meowed.svg",
      perfil: "meowed",
    },
    {
      imagem: "assets/img/barked.svg",
      perfil: "barked",
    },
    {
      imagem: "assets/img/nathanwpylestrangeplanet.svg",
      perfil: "nathanwpylestrangeplanet",
    },
    {
      imagem: "assets/img/wawawicomics.svg",
      perfil: "wawawicomics",
    },
    {
      imagem: "assets/img/respondeai.svg",
      perfil: "respondeai",
    },
    {
      imagem: "assets/img/filomoderna.svg",
      perfil: "filomoderna",
    },
    {
      imagem: "assets/img/memeriagourmet.svg",
      perfil: "memeriagourmet",
    },
  ];

  return (
    <div className="stories">
      {listaStories.map((p) => (
        <Story imagem={p.imagem} perfil={p.perfil} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
