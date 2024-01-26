const divInputTareda = document.getElementById('addTarefa')
const inputTarefa = document.getElementById('input')
const btnAdd = document.getElementById('adicionar')
const form = document.getElementById('form')
const lista = document.getElementById('lista')
const check = document.getElementById('check')
const edit = document.getElementById('edit')
const deletar = document.getElementById('delete')
const tarefa = document.getElementById('tarefa')
const divEditar = document.getElementById('divEditar')
const btnDelete = document.getElementById('cancelar')
const inputEdit = document.getElementById('inputEditar')
const titulo = document.getElementById('titulo')
const btnConfirmar = document.getElementById('confirmarEdit')

let oldInputEdit;



const save = (text) => {
    const li = document.createElement('ul')
    li.innerHTML = `<li id="tarefa" class="d-flex border py-4" style="margin-right: 30px;">
    <p id="titulo" class="m-0 col-8">${text}</p>
    <button id="check" class="btn border mx-1"><i class="bi bi-check"></i></button>
    <button id="edit" class="btn border mx-1"><i class="bi bi-pencil-fill"></i></button>
    <button id="delete" class="btn border mx-1"><i class="bi bi-x"></i></button>
    </li>`

    lista.appendChild(li)
    inputTarefa.value = ''
    inputTarefa.focus()

}

const editar = () =>{
    divInputTareda.classList.toggle('hide')
    divEditar.classList.toggle('hide')
}

const updateTitulo = (text) =>{
    const todos = document.querySelectorAll('p')

    todos.forEach((todo) => {
        let titulo = todo.querySelector('p')

        if(titulo.innerText === oldInputEdit){
            titulo.innerText = text
        }
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nomeInput = inputTarefa.value
    if (nomeInput) {
        save(nomeInput)
    }

})

document.addEventListener('click', (e) => {
    const element = e.target;
    const parentEl = element.closest('li');
    let titulo;

    if(parentEl && parentEl.querySelector('p')){
        titulo = parentEl.querySelector('p').innerText

        inputEdit.value = titulo
        oldInputEdit = inputEdit
    }

    if (element.id === 'check') {
        parentEl.classList.toggle('concluido');
    }

    if (element.id === 'delete') {
        parentEl.remove();
    }

    if(element.id === 'edit'){
        editar()
    }
});


btnDelete.addEventListener('click', (e) =>{
    e.preventDefault()
    editar()
})

btnConfirmar.addEventListener('submit', (e) =>{
    e.preventDefault()

    const editValue = inputEdit.value
    if(editValue){
        updateTitulo()
    }   
    editar()
})