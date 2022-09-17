function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.imagem} alt={props.perfil} />
        <div className="texto">
          <div className="nome">{props.perfil}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  const listaSugestões = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      perfil: "bad.vibes.memes",
    },
    {
      imagem: "assets/img/chibirdart.svg",
      perfil: "chibirdart",
    },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      perfil: "razoesparaacreditar",
    },
    {
      imagem: "assets/img/adorable_animals.svg",
      perfil: "adorable_animals",
    },
    {
      imagem: "assets/img/smallcutecats.svg",
      perfil: "smallcutecats",
    },
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {listaSugestões.map((p) => (
        <Sugestao imagem={p.imagem} perfil={p.perfil} />
      ))}
    </div>
  );
}
