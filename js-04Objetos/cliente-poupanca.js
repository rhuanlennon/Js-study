function Cliente(nome,cpf,email,saldo) 
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar = function(valor) {
        this.saldo += valor; 
    }
}
function ClientePoupanca(nome,cpf,email,saldo,saldoPoup) 
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup;
    //chama as propriedades do Cliente
}

const Raissa = new ClientePoupanca('Raissa', '11657757367','raissa@gmail.com',100,200)
console.log(Raissa)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}
// acessa o ClientePoupanca o prototype e após isso cria o depositarPoup



Raissa.depositarPoup(30)
console.log(Raissa.saldoPoup);