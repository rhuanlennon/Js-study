let nomes = ['ana Julia','Caio vinicius','BIA silva'];

const nomeAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomeAtualizados);

// método foreach não tem retorno, o método map tem
// map pode retornar um array se a função informada tiver um return em seu escopo