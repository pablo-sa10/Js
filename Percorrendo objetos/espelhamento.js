const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    fone: ["11 222333", "11 333222"],
    endereco:
        {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 100",
        }
};

// função para ligar 
function ligarClinete(foneComercial, foneResidencial){
    console.log(`Ligando para ${foneComercial}`)
    console.log(`Ligando para ${foneResidencial}`)
}

//função para mostrar endreço
ligarClinete(...cliente.fone)

function enderecoCliente(endereco){
    console.log(endereco)
}

enderecoCliente(cliente.endereco)

//objeto para encomenda 

const encomenda = {
    destinatario: cliente.nome,
    /* rua: cliente.endereco.rua,
    numero: cliente.endereco.numero,
    ap: cliente.endereco.complemento */
    ...cliente.endereco
}

console.log(encomenda)

