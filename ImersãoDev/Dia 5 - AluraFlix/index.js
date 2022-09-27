function adicionarFilme() {
   var filmeFavorito = document.getElementById("filme").value;
   if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
   } else {
      console.error("Endereço de filme Inválido")
   }
   document.getElementById("filme").ariaValue = "";
}

function listarFilmesNaTela(filme){
   var elementoFilmeFavorito = "<img src=" + filme + ">";
   var elementoListaFilmes = document.getElementById("listaFilmes");
   elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}