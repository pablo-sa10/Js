const inputTarefa = document.getElementById('tarefa')
const btnAdd = document.getElementById('adicionar')

function save(){
    const div = document.createElement('div')
    
}


btnAdd.addEventListener('click', () =>{
    const nomeInput = inputTarefa.value
    if(nomeInput){
        save(nomeInput)
    }
    
})