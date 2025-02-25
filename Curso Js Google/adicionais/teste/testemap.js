// const numbers = [1, 4,11,19,26,66,76];
// const numbers1 = [1,2,3,4,5];
// const arraydouble = [];

// let double = numbers.map( x => x * 2);

// console.log(double);

// numbers.forEach( (x, i, array) => {
//     array[i] = x * 2
// });
// console.log(numbers);

// let double1 = numbers.map( x => x * 2);

// console.log(double1);

// numbers1.forEach (x => {
//     arraydouble.push(x * 2);
// })

// console.log(arraydouble);

// numbers1.forEach((x) =>{
//     console.log(x*2);
// })



//map cria um novo array
//foreach não cria um novo array apenas percorre o array original sem altera-ló, por isso ele não cria um novo array, e ele realiza apenas operações isoladas.
// const num = [1,1,1,1,1];

// let sum =num.reduce((acc,x)=> acc+x,0);
// console.log(sum);


let pessoas = [
    {nome:'Salah',idade:31},
    {nome:'Trent',idade:24},
    {nome:'Elliot',idade:21},
    {nome:'Konate',idade:24},
    {nome:'Endo',idade:31},
];

// let nomes = pessoas.map((pessoas) =>{
//    return pessoas.nome
// })

// console.log(nomes)
const find = pessoas.filter((nome, i,array) => {pessoas.idade > 25 ;
return nome});
console.log(find)

console.log(pessoas[2]);