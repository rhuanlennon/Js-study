console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 14;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log('Destinos possíveis:')
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Boa viagem');
    listaDeDestinos.splice(2, 1); // removendo um item da  lista se for maior de idade
}
else {
    console.log('Não é maior de Idade e não posso vender');
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada ) {
    console.log("Boa viagem");
}
else {
    console.log("Infelizmente você não pode embarcar");
}

console.log(listaDeDestinos)