console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador +=1; 
}
console.log('Destino existe:', destinoExiste)

if (podeComprar && destinoExiste) {
    console.log('Boa Viagem');
}
else {
    console.log('Desculpe tivemos um Erro');
}

for (let i = 0;  i < 3; i++) {
    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}

// a variavél let é utilizada quando a mudança de estado, valor nela nesse caso houve
// O problema da ausência de break foi resolvido usando o breakpoint pelo próprio vscode
// ao utiliza a condicional while é necessário utilizar o comando break nas condicionais 
//para não entrar nas duas condicionais
