const minhaConta = conta(12345.1, 1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.juros(0.05);
minhaConta.emprestimo(0);
minhaConta.prestacao_casa(800);


function conta (numero, saldoInicial){
    return{
        saldo: saldoInicial,

        depositar: function(valor) {
            this.saldo += valor;
            console.log(`Com o depósito de ${valor}, o novo saldo da conta ${numero} é: ${this.saldo}`);
        },

        sacar: function(valor){
            if (valor <= this.saldo){
                this.saldo -= valor;
                console.log(`Com o saque de ${valor}, o novo saldo da conta ${numero} é: ${this.saldo}`);
            }
        },

        juros: function(taxa){
            const jurosCalculados = this.saldo * taxa;
            this.saldo += jurosCalculados;
            console.log(`Pago juros de ${jurosCalculados}, sendo o saldo final: ${this.saldo}`);
        },

        emprestimo: function(empréstimo){
           if (empréstimo >= this.saldo) 
            this.saldo += 1000.00
            console.log(`Realizado empréstimo de ${empréstimo}, novo saldo da conta ${numero}: ${this.saldo}`);
        },

        prestacao_casa: function(casa){
            if (this.saldo >= casa ){
            this.saldo -= casa;
            console.log(`Realizada a prestação de ${casa} reais. Saldo atual da conta ${numero}: ${this.saldo}`)
            }else{
                console.log(`Saldo insuficiente da conta ${numero}. O saldo Atual é: ${this.saldo}`)
            }
// se a conta 12345.1 houver 1000 reais de saldo inicial, o saldo final será de 565 reais, conseguindo pagar a prestação da casa.
// se a conta 12345.1 houver 400 reais de saldo inicial, o saldo será o mesmo do empréstimo de 0 reais = 735 reais,
// aonde o saldo seria insuficiente para pagar 800 reais que é a prestação da casa.
        }
    }
}