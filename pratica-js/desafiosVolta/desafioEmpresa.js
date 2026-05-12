let numeros = [3,7,2,8,5,10,6];
let t = 0;

numeros.forEach((n) => {
  if(n % 2 === 0){
    t += 1;
  }
})

let total = numeros.filter((n) => {
  return n % 2 === 0
}).length;

console.log("Resultado filter: " + total);

console.log(t);

let usuarios = [
 {nome:"Ana", idade:22},
 {nome:"Carlos", idade:17},
 {nome:"Marina", idade:30}
];


let nomes = usuarios.map((u) => {
  return u.nome;
})


console.log(nomes);

let maiorIdade = usuarios.filter((u => {
  return u.idade > 18;
}))

console.log(maiorIdade);

let carrinho = [
 {produto:"Celular", preco:1500},
 {produto:"Fone", preco:200},
 {produto:"Carregador", preco:100}
];

let somaProdutos = carrinho.reduce((acc, p) => {
  return acc + p.preco;
}, 0)

console.log(somaProdutos);

let palavras = ["banana","maçã","laranja"];

let maiusculas = palavras.map((p) => {
  return p.toUpperCase();
})

console.log(maiusculas);