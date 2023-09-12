const numero1 = 10
const numero2 = 5
const numero3 = 3

const resultadoSoma = soma(numero1, numero2)

function soma(num1, num2){
    return num1 + num2
}

const resultadoDivisao = divisao(resultadoSoma, numero3)

function divisao(resultadoSoma, num3){
    return resultadoSoma / num3
}

const resultadoMultiplicacao = multiplicacao(resultadoDivisao, numero3)

function multiplicacao(resultadoDivisao, num3){
    return resultadoDivisao * num3
}

const resultadoSubtracao = subtracao(resultadoMultiplicacao, numero3)

function subtracao(resultadoMultiplicacao, num3){
    return resultadoMultiplicacao - num3
}

console.log(`Resultado da soma: ${resultadoSoma}`) // 15
console.log(`Resultado da divisão: ${resultadoDivisao}`) // 5
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`) //15
console.log(`Resultado da subtração: ${resultadoSubtracao}`) //12