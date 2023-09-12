//Utilizando operadores de atribuição abreviados
let valor = 10;
valor += 5; // Equivalente a: valor = valor + 5;
console.log(valor); // resultado 15

//Comprimento de uma string
let texto = "Olá,  mundo!";
console.log(texto.length); //Resultado 12

//Acesso a caracteres individuais de uma string
let texto1 = "JavaScript";
console.log(texto1[0]); //Resultado: "J"
console.log(texto1[4]); //resultado: "S"

//Concatenação de strings
let saudacao = "Olá";
let nome = "Maria";
let mensagem = saudacao + ", " + nome + "!";
console.log(mensagem); //Resultado: "Olá, Maria!"

//conversao para maiusculas e minusculas
let texto2 = "JavaScript";
console.log(texto2.toUpperCase()); //Resultado: "JAVASCRIPT"
console.log(texto2.toLowerCase()); //Resultado: "javascript"

//Extração de uma parte de uma string
let texto3 = "Olá,  mundo!";
let parte = texto3.slice(5,9);
console.log(parte); //Resultado: mun
