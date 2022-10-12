const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter( (aluno, indice) => notas
[indice] < 5)

// filter é booleano
// o filter apesar de não estarmos usando o aluno o filter retorna o valor de um aluno

console.log(`reprovados: ${reprovados}`);