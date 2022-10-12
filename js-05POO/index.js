import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
// Importamos os arquivos Cliente e Conta Corrente, estamos
// modularizando o projeto assim fica mais fácil de enteder e mais organizado
// para modularizarmos e necessário ter um package.json
// para criar um package.json precisamos dar um npm init 
// após isso criamos um type: "module" para termos os modules no projeto

const cliente1 = new Cliente('Rhuan', 11657357767);
// aqui declaramos os valores esperados do constructor
// Rhuan = nome cpf = 11657357767 

//estou acessando as propriedades do Cliente
const cliente2 = new Cliente('Raissa',11557457765);


const contaCorrenteRhuan = new ContaCorrente(1001, cliente1);
contaCorrenteRhuan.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);
// aqui estamos criando os valores do constructor da Conta corrente 
// cliente e agência



contaCorrenteRhuan.transferir(200, conta2);

console.log(contaCorrenteRhuan)
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);

// O null pode ser um valor intencional, ele pode ser null 
// o Undefined não é intencional é mostra que esse valor não está vindo como o esperado


