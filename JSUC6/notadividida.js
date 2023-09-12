var nota1 = 1
var nota2 = 90
var media = (nota1 + nota2) / 2

if(nota1 >= 90 && nota2 >= 90){
    console.log("Suas notas são MB. média: " + media.toFixed(2))
} else if ((nota1 >= 80 && nota1 <= 89) || (nota2 >= 80 && nota2 <= 89))
{
    console.log("pelo menos sua nota é B. Média: " + media.toFixed(2))
} else if ((nota1 >= 70 && nota1 <= 79) || (nota2 >= 70 && nota2 <= 79)){
    console.log("pelo menos uma de suas notas é R. Média: " + media.toFixed(2))
} else {
    console.log("suas notas são I. Média: " + media.toFixed(2))
}