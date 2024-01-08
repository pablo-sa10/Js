//lista de tarefas
const tarefas = {
    tarefa_1: {
        id: 1,
        descricao: "lavar carro",
        concluida: false,
},
    tarefa_2: {
        id: 2,
        descricao: "limpar casa",
        concluida: false,
},
    tarefa_3: {
        id: 3,
        descricao: "levar cachorro para passear",
        concluida: false,
    },
}
//Criando novas tarefa à lista.
const novaTarefa1 = {
        id: 4,
        descricao: "estudar Js",
        concluida: false
    }

const novaTarefa2 = {
        id: 5,
        descricao: "estudar PHP",
        concluida: false,
    };

console.log(tarefas);

//Adicionando novas tarefas
tarefas.tarefa_4 = [novaTarefa1];
tarefas.tarefa_5 = [novaTarefa2];

console.log(tarefas);

//Marcar uma tarefa como concluída.
function Concluida(tarefas, id){
    const chave = `tarefa_${id}`;
    if (tarefas.hasOwnProperty(chave)){
        delete tarefas[chave].concluida
        tarefas[chave].conlcuida = true;
        console.log(`Tarefa ${id} marcada como concluida`)
    }
    else{
        console.log(`Tarefa ${id} não encontrada`)
    }
}

Concluida(tarefas, 3)
Concluida(tarefas, 1)
Concluida(tarefas, 2)
Concluida(tarefas, 4)
Concluida(tarefas, 5)

//Exibir a lista de tarefas.
console.log(tarefas);

//Contar quantas tarefas estão concluídas.
function contarConcluidas(tarefas){
    const tarefasArray = Object.values(tarefas);
    return tarefasArray.filter(tarefa => tarefa.concluida).length;
}


const tarefasConcluidas = contarConcluidas(tarefas);
console.log(`tarefas foram concluidas: ${tarefasConcluidas}`)
        