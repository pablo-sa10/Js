//puxo o arquivo JSON
const dados = require("./livro.json");
const dadosBiblioteca = require("./biblioteca.json")

//crio uma função para exibir detalhes do livro
function exibirDetalheDoLivro(livros){
    return livros
}

//calcular idade
function calcularIdadeLivro(livro, ano){
    let idade = ano - livro["ano de publicação"]
    if (idade > 20){
        console.log(`O livro ${livro.Titulo} tem ${idade} anos e é mais velho que eu`)
    }
    else if(idade == 20){
        console.log(`O livro ${livro.Titulo} tem ${idade} anos é tem a mesma idade que eu`)
    }
    else{
        console.log(`O livro ${livro.Titulo} tem ${idade} anos é mais velho que eu`)
    }
    return idade
}

const anoAtual = 2023 // ano ataul
const livro = dados;

//exibrir dados do livro
console.log(exibirDetalheDoLivro(dados))
console.log(exibirDetalheDoLivro(dadosBiblioteca))

//calculo do livro gato de botas
console.log(calcularIdadeLivro(livro, anoAtual))

//calculo idade dos dados da biblioteca
dadosBiblioteca.forEach(livro => {
    calcularIdadeLivro(livro, anoAtual)
})
