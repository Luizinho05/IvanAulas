var inicialCapital = 5.000
var tempo = 6
var taxa = 0.06
let soma = 1.06 * 1.06 * 1.06 * 1.06 * 1.06 * 1.06

function JurosCompostos(){
   resultado = inicialCapital * soma
   console.log("O resultado do juros composto é: " + resultado) //7.09259
}

JurosCompostos()