//substituicao de texto em uma string

let texto = "Olá,mundo!"
let novoTexto = texto.replace("mundo","JavaSript");
console.log(novoTexto); //Resultado: "Olá,JavaScript!"

//verificacao de existencia de uma substring em uma string
let texto1 = "Olá, mundo!";
console.log(texto1.includes("mundo")); //Resultado: true
console.log(texto1.includes("JavaScript")); //Resultado: false

//divisao de uma string em um array com base em um delimitador

let texto2 = "JavaScript é uma linguagem poderosa";
let palavras = texto2.split(" ");
console.log(palavras); //Resultado: [ 'JavaScript', 'é', 'uma', 'linguagem', 'poderosa' ]

//remocao de espacos em branco no inicio e no final de uma string

let texto3 = " Olá, mundo! ";
let novoTexto1 = texto3.trim();
console.log(novoTexto1); //Resultado: "Olá, mundo!"

//verificacao de início ou fim de uma string
let texto4 = "Olá, mundo!";
console.log(texto4.startsWith("Olá")); // Resultado: true
console.log(texto4.endsWith("mundo!")); // Resultado: true