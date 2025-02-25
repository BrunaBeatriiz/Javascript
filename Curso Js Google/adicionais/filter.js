let ages = [12,23,9,4,14,34];

let agesPar = ages.filter(function(age){
    return age % 2 == 0
})

console.log(agesPar);

let numeros = [1,2,3,4,5];
let numCheck = numeros.filter ((numeros) =>{ 
    return numeros % 2 !== 0});
console.log(numCheck);

//cria uma novo array sem alterar o original.