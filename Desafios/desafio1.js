//Definindo função construtora para funcionario
function Funcionario(nome, idade, telefone){
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;

    this.exibirInfo = function(){
        console.log(`Funcionário: ${this.nome}, Idade: ${this.idade} anos, Telefone:${this.telefone}`);
    };
}

//Criando instâncias de funcionários
const funcionario1 = new Funcionario("João", 28, "(12)3456-7890");
const funcionario2 = new Funcionario("Maria", 35, "(15)98754-3210");
const funcionario3 = new Funcionario("Pedro", 22, "(16)99555-4567");

//Exibindo informações de funcionários
funcionario1.exibirInfo();
funcionario2.exibirInfo();
funcionario3.exibirInfo();