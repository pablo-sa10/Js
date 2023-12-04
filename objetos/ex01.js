/* const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 };

pessoa.seguroSocial = "1000";
pessoa.cpf = "123456789";

console.log(pessoa)
console.log(`${pessoa.cpf.substring(0, 3)}`) */

const carro = {
    modelo: "fusca",
    ano: 2020,
    cor: "azul",
    ligado: false,

    //metodo dentron do objeto para ligar o carro
    ligar: function(){
        this.ligado = true;
        console.log("o carro está ligado");
    },

    //metodo para desligar o carro
    desligar: function(){
        this.ligado = false;
        console.log("o carro está desligado");
    },

    //crie um metodo para verificar se o carro esta ligado
    verificarStatus: function(){
        if (this.ligado){
            console.log("o carro está ligado");
        }
        else{
            console.log('o carro está desligado');
        }
    }

}

carro.verificarStatus();
carro.ligar();
carro.verificarStatus();
carro.desligar();
carro.verificarStatus();