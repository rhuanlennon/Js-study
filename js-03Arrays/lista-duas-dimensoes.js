const alunos = ['João', 'Juliana', 'Caio', 
'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];
// aqui estamos criando uma lista com duas dimensões

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);
// ao acessar a posição do array[0][0] pega o primeiro array na posição 0
// e no segundo pega o segundo array[1] na posição[0]

