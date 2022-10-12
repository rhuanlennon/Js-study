const cliente = {
    nome: 'Rhuan',
    idade: 23,
    cpf:'11657357767',    
    email: 'rhuanebrenz@gmail.com'

}

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));
// a info nesse caso é a função callback 

// console.log(cliente['nome']);

// ao tentar acessar um valor inexistente de um objeto no Js vai dar undefined 
