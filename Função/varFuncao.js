var idade = 25 // a var dentro da primeira função  causa conflito com a segunda função
// porque a idade irá valer apenas para a primeira função

function mostraidade(){
    console.log("A idade agora é: " + idade)
}

mostraidade()

function mostraidade2(){
    console.log("A idade agora é: " + idade)
}

mostraidade2()
