const clientes = require("./desafio")

// function funcaoCallback(a, b) {
//     if (a[propriedade] < b[propriedade]){
//         return -1;
//     }if(a[propriedade] > b[propriedade]){
//         return +1;
//     }
//     return 0;
// }

function ordenar(lista, propriedade){
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        
        if(a[propriedade] > b[propriedade]){
            return +1;
        }
        
        return 0;
    });

    return resultado
}

console.log(ordenar(clientes, "nome"))
    