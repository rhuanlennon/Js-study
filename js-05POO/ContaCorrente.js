import { Cliente } from "./Cliente.js";

export class ContaCorrente {
   static numeroDeContas = 0;
   // criando como static que vai contar em todos os lugares que forem instaciando
   // contando assim o total de numeroDeContas criado
    agencia;
    _cliente;

    _saldo = 0;
    // o _ no Javascript é uma convenção que os programadores aceitam o método como privado

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }
    get cliente(){
        return this._cliente;
    }

    // SET pode alterar a regra de como um atributo pode ou não ser modificado
    // sem precisar em vários pontos do código
    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente,) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
            // o return para a execução da função e garante que o valor não irá ser undefinded
        }
    }
    depositar(valor) {
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
        // essa técnica aqui é o early return em que consiste caso entre no if ele dá o return
        // caso não dê a condição do if ele retorna o que está fora dos parentêses
    }
    // metodo e função são termos sinônimos utilizados para dar nomes aos comportamentos que
    // as classes podem vir até como depositar, sacar

    transferir(valor, conta) {
        conta.cidade = 'Rio de Janeiro'
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}