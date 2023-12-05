const clientes = require("./desafio.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

function apartSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })
}

function apartamento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.hasOwnProperty("logradouro"))
    })
}

console.log(apartamento(clientes));
/* console.log(encontrar(clientes, "nome", "Kirby"));
console.log(encontrar(clientes, "telefone", "Olva")) */