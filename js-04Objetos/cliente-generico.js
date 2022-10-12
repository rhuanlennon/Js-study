
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
// Cliente função construtora

const Rhuan = new Cliente('Rhuan', '11657357767', 'rhuanebrenz@gmail.com', 100);

console.log(Rhuan)