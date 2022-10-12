// var 
// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// O var é muito solto dentro de um programa por isso é mais recomendado usar o let

// let figura = 'triângulo';
// let altura = 5;
// let comprimento = 7;
// let area

// if(figura === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);
// utilizar sempre let, o var não é mais utilizado


const figura = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if(figura === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

// O Javascript tem uma tipagem dinâmica 
// untyped
let minhaVar = 567;
minhaVar = "texto"
console.log(minhaVar);
// nesse caso aqui o JS indentifica o tipo, ele aceita a troca do tipo de dado, sem você precisar declarar
