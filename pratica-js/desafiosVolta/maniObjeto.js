let usuarios = [
 {nome:"Ana", idade:22, cidade:"SP"},
 {nome:"Carlos", idade:17, cidade:"RJ"},
 {nome:"Marina", idade:30, cidade:"SP"},
 {nome:"João", idade:25, cidade:"MG"},
 {nome:"Pedro", idade:19, cidade:"RJ"}
];

let maiorIdade = usuarios.filter((user) => {
  return user.idade > 18;
})

console.log(maiorIdade);

let nomes = usuarios.map((user) => {
  return user.nome;
})

console.log(nomes);

let idadeUser = usuarios.reduce((acc, user) => {
 return acc + user.idade;
}, 0)

let media = idadeUser / (usuarios.length) ; 

console.log("idade: ", idadeUser, media)

let filtroCidade = usuarios.reduce((acc, user) => {
  if(!acc[user.cidade]){
    acc[user.cidade] = 0
  }
   acc[user.cidade] += 1;
  return acc;
}, {})

console.log(filtroCidade);