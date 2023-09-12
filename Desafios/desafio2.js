//Definindo a função construtora para Funcionário
function Funcionario(nome, idade, telefone){
    this.nome = nome;
    this.idade= idade;
    this.telefone = telefone;
    this.contaBancaria = new ContaBancaria();

    this.exibirInfo = function(){
        console.log(`Funcionário: ${this.nome}, Idade: ${this.idade} anos, Telefone: ${this.telefone}`);
        this.contaBancaria.exibirSaldo();
    };
  }

    //Definindo a função construtora para Conta Bancária
    function ContaBancaria(){
        this.saldo = 0;
    
        this.depositar = function(valor){
            this.saldo += valor;
        };
    
        this.sacar = function(valor){
            if (valor <= this.saldo){
                this.saldo -= valor;
            }else {
                console.log("Saldo insuficiente para o saque.");
            }
        };
    
        this.exibirSaldo = function() {
            console.log(`Saldo: $${this.saldo}`);
        };
    }
        // Criando instâncias de funcionários
    const funcionario1 = new Funcionario("João", 28, "123-456-7890");
    const funcionario2 = new Funcionario("Maria", 35, "987-654-3210");
    const funcionario3 = new Funcionario("Pedro", 22, "555-123-4567");

    //Realizando operações na conta bancária dos funcionários
    funcionario1.contaBancaria.depositar(1000);
    funcionario1.contaBancaria.sacar(300);

    funcionario2.contaBancaria.depositar(1500);
    funcionario2.contaBancaria.sacar(200);

    funcionario3.contaBancaria.depositar(500);
    funcionario3.contaBancaria.sacar(100);

    funcionario1.exibirInfo();
    funcionario2.exibirInfo();
    funcionario3.exibirInfo();