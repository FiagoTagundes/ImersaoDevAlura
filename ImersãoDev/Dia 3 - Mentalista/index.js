var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
console.log(tentativas);

function Chutar() {
   var resultado = document.getElementById("resultado");
   var chute = parseInt(document.getElementById("valor").value);
   console.log(chute);

   if (chute == numeroSecreto) {
      resultado.innerHTML = "Você acertou!!!";
   } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Você deve digitar um número entre 0 e 10!!";
   } else {
      if(chute > numeroSecreto){
         resultado.innerHTML = "Errou!! Seu chute foi maior que o número secreto";
         erro();
      } else if (chute < numeroSecreto){
         resultado.innerHTML = "Errou!! Seu chute foi menor que o número secreto";
         erro();
      }
   }
}

function erro(){
   tentativas = tentativas - 1;
   console.log(tentativas);
   var elementoTentativas = document.getElementById("tentativas");
   elementoTentativas.innerHTML = "Você ainda tem " + tentativas + " tentativas!!"

   if (tentativas == 0) {
      resultado.innerHTML = "Suas tentativas acabaram o jogo será reiniciado";
      location.reload();
   }
}