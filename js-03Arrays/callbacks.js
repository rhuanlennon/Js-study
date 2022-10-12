const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];

nomes.forEach(imprimeNomes) 
// função callback o nomes tem como retorno uma 
//outra função que é a imprimeNomes


function imprimeNomes(nome) {
    console.log(nome)
}