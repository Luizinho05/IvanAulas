//diferenca entre =,== e === .atribuicao de valor usando var
var x = 5;
console.log(x)// resultado 5

//Atribuicao de valor usando let
let y = 10;
console.log(y); //resultado 10

//comparacao de igualdade com var usando ==
var a = 5;
var b = "5";
console.log(a == b); //Resultado: true

//comparacao de igualdade com let usando ==
let c = 10;
let d = "10"
console.log(c == d); //Resultado: true
//note que esta comparacao tem como retorno true pois ele identificou que os caracteres 10 sao
//iguais nao importante se foram definidos como string ou numero


//comparacao de igualdade com var usando ===
var e = 5;
var f = "5";
console.log(e === f);//Resultado: false
// a comparacao com === so sera verdadeiro se ambos forem numeros ou strings