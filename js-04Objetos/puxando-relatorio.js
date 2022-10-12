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
    depositar:function(valor){
        this.saldo += valor
    }
}

let relatorio = '';

for (let info in cliente) {
    if(typeof cliente[info] === 'object' || typeof cliente[info] == 'function'){
        continue
    }
    else {
        relatorio += ` 
        ${info} ==> ${cliente[info]}
        `
    }
    
}
console.log(relatorio);