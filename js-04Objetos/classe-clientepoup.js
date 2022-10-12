class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    // o this representa o objeto que executa a função, através desse contexto

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}
const Rhuan = new ClientePoupanca('Rhuan', 'rhuanebrenz@gmail.com','11657557367',100,200)
console.log(Rhuan)

Rhuan.depositar(50)
Rhuan.depositarPoupanca(50)

console.log(Rhuan)

class ClienteUniversitario extends Cliente {
    constructor(nome, email, cpf, saldo, saldoUniversitario) {
        super(nome, email, cpf, saldo)
        this.saldoUniversitario = saldoUniversitario;
    }

    depositarUniversitario(valor) {
        this.saldoUniversitario += valor;
    }
    saqueUniversitario(valor) {
        this.saldoUniversitario -= valor;
    }
}
const RhuanLennon = new ClienteUniversitario('Rhuan', 'rhuan.seabra@outlook.com', '11657357767',50, 200)
console.log(RhuanLennon)
RhuanLennon.depositarUniversitario(50)
RhuanLennon.saqueUniversitario(100);
console.log(RhuanLennon)