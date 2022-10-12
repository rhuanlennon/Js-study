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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)