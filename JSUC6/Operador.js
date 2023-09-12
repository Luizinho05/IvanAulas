//Operador ${}
let nome = 'João' // João é o conteúdo de nome
var idade = 16 // 16 é contéudo de idade

const bebidaMaior = 'água' // definição da constante
const bebidaMenor = 'suco' // definição da constante

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18
? bebidaMaior : bebidaMenor}`

console.log(pedido)