const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput =  document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const message = document.querySelector("#message");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    //verificar se está preenchido
    if (nameInput.value === "" || jobSelect.value === ""){
        alert("Por favor, preencha o campo que está faltando");
        return;
    }

    if(emailInput.value === ""){
        alert("Por favor, preencha seu email");
        return;
    }

    if(!emailValid(emailInput.value)){
        alert("Por favor, digite o email como no exemplo: nome@host.com");
        return;
    }

    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 dígitos ");
        return;
    }

    

    form.submit();
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

function validatePassword(senha, minDigitos){
    if(senha.length >= minDigitos){
        return true;
    }

    return false;
}
