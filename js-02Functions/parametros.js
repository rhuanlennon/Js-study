// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2,3));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `O meu Nome é: ${nome}, e minha idade é: ${idade}`;
}
console.log(nomeIdade('Rhuan', 23));

function multiplica(num1 = 1, num2 =1) {
    return num1 * num2;
}
// passar um valor default pode ajudar na prevensão de erros
// Apesar das funções terem os mesmos nomes no argumentos elas rodam
// apenas naquele escopo

// nesse caso aqui, executa primeiro as funções 
//soma e depois a função multiplica
console.log(multiplica(soma(5,5), soma(3, 3)))