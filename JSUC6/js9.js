//comparacao de igualdade com let usando ===
let g = 10;
let h = "10";
console.log(g === h); //resultado: false

//atribuicao de valor usando var e modificacao posterior
var x = 5;
x = 10;
console.log(x); //resultado: 10

//atribuicao de valor usando let e modificacao posterior
let y = 5;
y = 10;
console.log(y);//resultado: 10

//declaracao de variavel usando var e let no mesmo escopo
var a = 5;
let b = 10;
console.log(a + b); //resultado: 15

//uso de variavel nao declarada com var e let
console.log(c); //erro: referenceError: c is not defined
console.log(d); //erro: referenceError: d is not defined