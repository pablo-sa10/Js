const form = document.querySelector("#form")
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmaSenha = document.querySelector("#confirmaSenha");
const google = document.querySelector("#google");
const twitter = document.querySelector("#twitter");
const insta = document.querySelector("#insta")


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
        alert("As senhas precisam ser iguais")
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

google.addEventListener('click', function(){
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=pt_BR&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1190578529%3A1704732992108988&theme=glif'
})

twitter.addEventListener('click', function(){
    window.location.href = 'https://twitter.com/i/flow/login'
})

insta.addEventListener('click', function(){
    window.location.href = 'https://www.instagram.com/accounts/login/'
})