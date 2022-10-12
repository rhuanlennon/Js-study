// expressão de função
// expressões de funções funcionam como variavéis
const soma = function(num1,num2) {
    return num1 + num2;
}
console.log(soma(2,2,))

//diferença principal: HOISTING: O Js analisa todo o código
// procurando por variáveis declaradas com var e funções para 
// trazer tais declarações para o início do código.
// funções e var são listadas no topo do arquivo

console.log(apresentar());

function apresentar() {
    return 'Olá';
}