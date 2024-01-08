const form = document.querySelector("#form")
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmaSenha = document.querySelector("#confirmaSenha");

console.log(email)

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if(nome.value === ""){
        alert('Preencha os campos que faltam')
        return;
    }

    if(email.value === ""){
        alert("Preencha os campos que faltam");
        return;
    }

    if(!emailValid(email.value)){
        alert("Coloque um email válido")
        return;
    }

    if(!fun_senha(senha.value, 8)){
        alert("A senha precisa ter no mínimo 8 digítos")
        return;
    }

    if(!senhaIgual(senha.value, confirmaSenha.value)){
        alert("A senha precisam ser iguais")
        return;
    }

    form.submit()
});

//função para validar email
function emailValid(email){

    //cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
       return true;
    }

    return false;
}

function fun_senha(senha, numDig){
    if(senha >= numDig){
        return true;
    }

    return false;
}

function senhaIgual(senha, confirmaSenha){
    if(senha === confirmaSenha){
        return true
    }

    return false;
}