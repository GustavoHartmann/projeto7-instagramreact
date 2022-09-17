function Post(props) {
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagemPerfil} alt={props.nomePerfil} />
          {props.nomePerfil}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.imagemConteudo} alt="imagem postada"/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.imagemCurtida} alt={props.perfilCurtida}/>
          <div className="texto">
            Curtido por <strong>{props.perfilCurtida}</strong> e
            <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const listaPosts = [
    {
      imagemPerfil: "assets/img/meowed.svg",
      nomePerfil: "meowed",
      imagemConteudo: "assets/img/gato-telefone.svg",
      imagemCurtida: "assets/img/respondeai.svg",
      perfilCurtida: "respondeai",
    },
    {
      imagemPerfil: "assets/img/barked.svg",
      nomePerfil: "barked",
      imagemConteudo: "assets/img/dog.svg",
      imagemCurtida: "assets/img/adorable_animals.svg",
      perfilCurtida: "adorable_animals",
    },
  ];
  return (
    <div className="posts">
      {listaPosts.map((p) => (
        <Post
          imagemPerfil={p.imagemPerfil}
          nomePerfil={p.nomePerfil}
          imagemConteudo={p.imagemConteudo}
          imagemCurtida={p.imagemCurtida}
          perfilCurtida={p.perfilCurtida}
        />
      ))}
    </div>
  );
}
