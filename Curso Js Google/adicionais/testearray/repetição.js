const numeros = [1,1,2,3,3,4,5,6,7,8,8,9,9,9,9,9,10];

let newNovo = new Set (numeros);
console.log(newNovo);
let newArr = [...newNovo];
console.log(newArr);