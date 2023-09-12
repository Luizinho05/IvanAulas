const numero1 = 10
const numero2 = 5
const numero3 = 3

function calcular(num1, num2, num3){
    const soma = num1 + num2
    const total = soma / num3
    console.log(`(${num1} + ${num2}) / ${num3} = ${total}`)
}

calcular(numero1, numero2, numero3)