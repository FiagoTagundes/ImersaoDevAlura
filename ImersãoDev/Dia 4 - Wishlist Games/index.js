function adicionarJogo() {
   var jogoAdicionado = document.getElementById("jogo").value;
   if (jogoAdicionado.endsWith(".jpg")) {
      listarJogosNaTela(jogoAdicionado);
   } else {
      console.error("Endereço de jogo Inválido")
   }
   document.getElementById("jogo").value = "";
}

function listarJogosNaTela(jogo){
   var elementoJogoAdicionado = "<img src=" + jogo + ">";
   var elementoListaJogos = document.getElementById("listaJogos");
   elementoListaJogos.innerHTML = elementoListaJogos.innerHTML + elementoJogoAdicionado;
}