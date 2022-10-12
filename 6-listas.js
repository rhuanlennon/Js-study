console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
listaDeDestinos.push('Curitiba') // adicionando um item no final da lista
console.log('Destinos possíveis:')
console.log(listaDeDestinos)

listaDeDestinos.splice(1,2); // tirando um elemento da lista, o primeiro número é aonde vai começar a deleção e o segundo é o número
// de elementos que serão deletados
// Nesse caso deletamos São Paulo passsan o splice(1,2)
console.log(listaDeDestinos);
console.log(listaDeDestinos[1],listaDeDestinos[0]);