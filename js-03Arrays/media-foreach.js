const notas = [10,6.5,8,7.5];

let somaDasNotas = 0;

//callback
notas.forEach(nota => {
    somaDasNotas += nota;
    
});
// o foreach é uma evolução do for 
// você não precisa especificar o indice ele já entende que é um array


let media = somaDasNotas/notas.length;

console.log(media)