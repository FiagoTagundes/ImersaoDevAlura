function ConverterParaReal () {
   var valorElemento = document.getElementById("valor");
   var valor = valorElemento.value;
   var valorEmDolarNumerico = parseFloat(valor);

   var valorEmReal = valorEmDolarNumerico * 5.19;

   var elementoValorConvertido = document.getElementById("valorConvertido");
   var valorConvertido = "O resultado em Real é R$ " + valorEmReal.toFixed(2);
   elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterParaDolar () {
   var valorElemento = document.getElementById("valor");
   var valor = valorElemento.value;
   var valorEmRealNumerico = parseFloat(valor);

   var valorEmDolar = valorEmRealNumerico / 5.19;

   var elementoValorConvertido = document.getElementById("valorConvertido");
   var valorConvertido = "O resultado em Dolar é U$ " + valorEmDolar.toFixed(2);
   elementoValorConvertido.innerHTML = valorConvertido;
}

