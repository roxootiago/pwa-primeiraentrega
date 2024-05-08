fetch("https://api.npoint.io/c6a450555fab95052aab")
  .then((res) => res.json())
  .then((data) => {
    const tituloElemento = document.getElementById("titulo1");
    const imagemElemento = document.getElementById("imagem1");
    const tempoEstimado = document.getElementById("tempoEstimado1");

    const tituloElemento2 = document.getElementById("titulo2");
    const imagemElemento2 = document.getElementById("imagem2");
    const tempoEstimado2 = document.getElementById("tempoEstimado2");

    const tituloElemento3 = document.getElementById("titulo3");
    const imagemElemento3 = document.getElementById("imagem3");
    const tempoEstimado3 = document.getElementById("tempoEstimado3");

    const titulo = data[0].exercicio;
    const imagemUrl = data[0].link_imagem;
    const descricao = data[0].tempo_estimado;

    const titulo2 = data[1].exercicio;
    const imagemUrl2 = data[1].link_imagem;
    const descricao2 = data[1].tempo_estimado;

    const titulo3 = data[2].exercicio;
    const imagemUrl3 = data[2].link_imagem;
    const descricao3 = data[2].tempo_estimado;

    tituloElemento.textContent = titulo;
    imagemElemento.src = imagemUrl;
    tempoEstimado.textContent = descricao;

    tituloElemento2.textContent = titulo2;
    imagemElemento2.src = imagemUrl2;
    tempoEstimado2.textContent = descricao2;

    tituloElemento3.textContent = titulo3;
    imagemElemento3.src = imagemUrl3;
    tempoEstimado3.textContent = descricao3;
  })
  .catch((error) => {
    console.error("Houve um erro ao recuperar os dados:", error);
  });
