const cliente = {
    nome: "andre",
    idade: 32,
    cpf: "11211111",
    email: "andre@dominio.com",
};

console.log(`o nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`)

console.log(`os 3 primeiros digitos do cpf sao ${cliente.cpf.substring(0, 3)} `);