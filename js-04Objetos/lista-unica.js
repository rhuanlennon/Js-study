const clientes = [
    {
    nome: 'Rhuan',
    idade: 23,
    cpf: '11657357767',
    email: 'rhuanebrenz@gmail.com',
    fones: ['982017887', '98532519', '984947377'],
    dependentes: [{
        nome: 'Kauã Seabra',
        parentesco: 'Irmão',
        idade: 12
    },
    {
        nome:'Vânia',
        parentesco: 'Mãe',
        idade: 49,
    }],
    },
    {
        nome: 'André',
        cpf: '01844884783',
        dependentes: [{
            nome: 'mel',
            parentesco: 'dog',
            idade: 2
        }],
    }
]

// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
// console.log(listaDependentes)
// // ... spread operator
// // ele espalha dentro do array nesse caso clientes, acessando de acordo com o valor passado dentro do colchetes

let listaDependentes = [];

for (let index = 0; index < clientes.length; index++) {
    listaDependentes.push(...clientes[index].dependentes)
}

console.table(listaDependentes);
// Criei um for que inteira sobre a quantidade de dependetes, então caso seja adicionado um novo cliente será 
// exibido na tabela