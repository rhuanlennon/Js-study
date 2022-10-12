const notas = [10, 8, 7, 6];

const notasAtualizadas = notas.map( nota => nota == 10 ? 
nota : ++nota);

// o ternário soma mais um dando o ponto extra para o aluno caso
// a nota não tenha sido 10

console.log(notasAtualizadas);