const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    fone: ["11 222333", "11 333222"],
    endereco: [
        {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 100",
        }
    ]
    
};

cliente.endereco.push({
    rua: "R. Joseph Ladder",
    numero: 100,
    apartamento: false,
});

console.log(cliente.endereco);

const listaApartamento = cliente.endereco.filter(endereco => endereco.apartamento === true
);

console.log(listaApartamento)