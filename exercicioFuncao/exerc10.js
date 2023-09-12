var capital = 1200
var taxa = 0.08
var tempo = 24

function JurosSimples(){
    let juros = capital * (taxa * tempo)
    console.log ("O juros será de: " + juros) //2304
}

JurosSimples()