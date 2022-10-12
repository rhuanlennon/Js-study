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
    },
    {
        nome:'Vânia',
        parentesco: 'Mãe',
        idade: 49,
    }
],
    saldo: 100,

    depositar: function(valor)
    {
        this.saldo += valor;
        // o this é referente ao objeto Cliente
    },
    sacar: function(valor) 
    {
        this.saldo -= valor;
    }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);

cliente.sacar(50);
console.log(cliente.saldo);