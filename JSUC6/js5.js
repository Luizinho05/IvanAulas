// Expressão com parênteses

let resultado0 = (2 + 3) * 4;
console.log(resultado0); //Resultado: 20 (soma primeiro, depois multiplicacao)

//Combinacao de soma e subtração

let resultado1 = 10 + 5 - 2;
console.log(resultado1); //resultado: 13 (soma depois subtração)

//combinacao de soma, subtração e multiplicação
let resultado2 = (10 + 5) * 2 - 3;
console.log(resultado2); //resultado:27 (soma,depois multiplicação, depois subtração)

//utilizando variaveis em uma expressão

let num1 = 3;
let num2 = 4;
let resultado3 = num1 * (num1 + num2);
console.log(resultado3); //result 21(soma, depois multiplicacao)

//utilizando constantes em uma expressão
const PI = 3.14;
let raio = 5;
let area = PI * raio * raio;
console.log(area) //result 78.5 (calculo da area de um circulo)