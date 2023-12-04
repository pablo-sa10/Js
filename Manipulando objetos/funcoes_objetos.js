const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    fone: ["11 222333", "11 333222"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log('saldo insuficiente')
        }
        else{
            this.saldo -= valor
            console.log(`pagamento realizado: novo saldo: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(25)