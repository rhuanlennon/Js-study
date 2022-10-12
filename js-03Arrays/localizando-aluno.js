const alunos = ['João', 'Juliana', 'Caio', 
'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

// includes -> booleano
// indexOf -> 3
// o indexOf procura na lista de alunos o índice 3 que é o valor correspondente da Ana

const exibeNomeNota = (nomeDoAluno) => {
        // o includes faz uma busca por um valor, nesse caso Ana
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é: ' +
        listaDeNotasEAlunos[1][indice];
    } 
    else {
        return "Aluno não está cadastrado";
    }
}

console.log(exibeNomeNota('Rhuan'));

