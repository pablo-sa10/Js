const aprsentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow com mais de uma de uma linha

const somaNUmero = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente numeros de 1 a 9"
    }
    else{
        return num1 + num2;
    }
}