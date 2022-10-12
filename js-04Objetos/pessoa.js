const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 console.log(pessoa);
 pessoa.cpf = "15346626522-65";
 pessoa.SeguroSocial = '854321985-9';
 // adiciona duas novas propriedades a pessoa
 pessoa.cpf.substring(0,4);
 // cria uma nova string com os primeiros 4 digitos do cpf
 console.log(pessoa);