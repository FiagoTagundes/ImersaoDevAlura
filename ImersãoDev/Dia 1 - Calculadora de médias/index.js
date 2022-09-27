/*var nome = "tiago"
var notaDoPrimeiroBimestre = 0
var notaDoSegundoBimestre = 0
var notaDoTerceiroBimestre = 0
var notaDoQuartoBimestre = 0


console.log("Bem vindo " + nome)
console.log("Sua média é " + media)

if (media >= 6) {
   console.log("Parabéns vocês está aprovado");
} else {
   console.log("Infelizmente você não alcançou a média");
}*/

function coletarNotasBimestrais(){
   var elementoPrimeiroBimestre = document.getElementById("notaPrimeiroBimestre").value;
   var elementoSegundoBimestre = document.getElementById("notaSegundoBimestre").value;
   var elementoTerceiroBimestre = document.getElementById("notaTerceiroBimestre").value;
   var elementoQuartoBimestre = document.getElementById("notaQuartoBimestre").value;

   console.log(elementoPrimeiroBimestre);
   console.log(elementoSegundoBimestre);
   console.log(elementoTerceiroBimestre);
   console.log(elementoQuartoBimestre);

   var media = ((parseFloat(elementoPrimeiroBimestre) + parseFloat(elementoSegundoBimestre) + parseFloat(elementoTerceiroBimestre) + parseFloat(elementoQuartoBimestre)) /4).toFixed(2);
   console.log(media);

   var elementoMediaDoAluno = document.getElementById("mediaDoAluno");
   var mediaDoAluno = "A sua média é " + media;
   elementoMediaDoAluno.innerHTML = mediaDoAluno;
}



