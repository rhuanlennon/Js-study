const cliente = {
    nome: 'Rhuan',
    idade: 23,
    email:'rhuanebrenz@gmail.com',
    cpf:'11657357767'
}

console.log(`Nome do Cliente: ${cliente.nome} Idade: ${cliente.idade} email: ${cliente.cpf}`);
console.log(cliente.cpf.substring(0,3))
// substring forma uma nova string, de acordo com os valores indicados
// 0 => inicial, 3 => final