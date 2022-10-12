const cliente = {
    nome: 'Rhuan',
    idade: 23,
    cpf: '11657357767',
    email: 'rhuanebrenz@gmail.com',
    fones: ['982017887', '98532519', '984947377'],
    dependentes: [{
        nome: 'Kauã Seabra',
        parentesco: 'Irmão',
        idade: 12
    }]
}

cliente.dependentes.push({
    nome:'Vânia',
    parentesco: 'Mãe',
    idade: 49,
})

const parenteMaisNovo = cliente.dependentes.
filter(dependente => dependente.idade=== 12);

console.log(parenteMaisNovo[0].nome);