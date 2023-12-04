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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto)