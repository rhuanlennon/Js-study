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

const Rhuan = new Cliente('Rhuan', 'rhuanebrenz@gmail.com', '11657357767',100)

Rhuan.exibirSaldo()
console.log(Rhuan);