
  const botoes = document.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
      console.log("fui clicado");
      let texto = botao.querySelector("span");
      texto.textContent++;
    }
  });
