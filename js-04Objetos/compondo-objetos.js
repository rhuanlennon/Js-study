const cliente = {
    nome: 'Rhuan',
    idade: 23,
    cpf:'11657357767',
    email: 'rhuanebrenz@gmail.com',
    fones: ['982017887', '98532519', '984947377']
}

cliente.dependentes = {
    nome:'Kauã',
    parentesco: 'Irmão',
    idade: 12
}
console.log(cliente);

cliente.dependentes.nome = 'Kauã Seabra';

// através do ponto é possível acessar o objeto e alterar ele
//mesmo estando dentro de outro objeto

console.log(cliente)