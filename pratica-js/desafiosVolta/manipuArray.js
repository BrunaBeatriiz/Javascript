let numeros = [ 1,2,3,4,5];

let dobro = numeros.map((n) => {
  return n * 2;
})

console.log(dobro);

let produtos = [
  {nome: "Mousse", preco:50},
  {nome: "Teclado", preco:100},
  {nome: "Monitor", preco:800},
   {nome: "Mousepad", preco: 20},
];


let nome = produtos.map((n)=> {
  return n.nome;
})

console.log(nome);

// let maiorQue = [];

// let teste = produtos.map((p)=> {
   
//   if(p.preco > 50){
//     maiorQue.push(p)
    
//   }
// })

let maiorQue = produtos.filter((p) => {
  return p.preco > 50;
})

let resultadoSoma = maiorQue.reduce((acc, p) => {
   return acc + p.preco
}, 0);

console.log(maiorQue);
console.log(resultadoSoma);