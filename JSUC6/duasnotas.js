var nota1 = 90
var nota2 = 90

if (nota1 >= 90 && nota2 >= 90){
    console.log("Suas notas são excelentes.")
}else if ((nota1 >= 80 && nota1 <= 89) || (nota2 >= 80 && nota2 <= 89))
{
    console.log("suas notas são boas.")
}else if ((nota1 >= 70 && nota1 <= 79) || (nota2 >= 70 && nota2 <= 79))
{
    console.log("suas notas são básicas.")
}else{
    console.log("Suas notas não são boas")
}