const salaJs = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9.5, 6];
const salaPython = [7,3.5,8,9.5];

                    // substitui depois por cada um dos array
function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => 
    atual + acumulador,0)
    return somaDasNotas/notasDaSala.length;
}

console.log(`Média da sala de Javascript ${mediaSala(salaJs)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(salaPython)}`);

const notas = [10, 6.5, 8, 7.5];

const media = notas.reduce((acum, atual) => 
atual + acum, 0) / notas.length;

console.log(media)

// reduce é necessário dois parâmetros um acumulador que nesse caso soma os valore do array
// e um outro parametro que irá inteirar sobre o array
