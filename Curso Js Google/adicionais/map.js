let numbers = [1,2,3,4,5];
let a = [1,2,3,3,4];
let b = [1,2,3,3,4,5,5,4,1,2];
let numbersMultipliedByTwo = numbers.map((number) =>{
    return number* number;

});
console.log(numbersMultipliedByTwo);


let pessoas = [
    {nome:'Mo Salah', idade: 31},
    {nome: 'Nunez', idade: 24},
    {nome: 'Robertson', idade: 31},
];

let returnNome = pessoas.map(pessoas => pessoas.nome);

console.log(returnNome);

let x = numbers.map((numero) => {
//    return  numero % 2 == 0 ;
    if(numero % 2 == 0){
        return numero;
    }else{
        return '';
    }

});
console.log(x);

let findd = numbers.find((numero)=> {
     return numero == 10;
})
console.log(findd);

let find = numbers.indexOf(30);
console.log(find);

function duplo(arr){
    return (new Set (arr)).size !== arr.length;
}

console.log(duplo(numbers));
console.log(duplo(a));

const conj = new Set(numbers);
console.log(conj);
const newArray = Array.from(conj);
console.log(newArray);
const newLista= Array.from(new Set(b));
console.log(newLista);
// == compara valores e converte tipos para que possa ser feita a comparação. 5 == '5', sim pq converte os tipos e compara os valores. True.
//=== compara valor e tipo e não realiza a conversão de tipos. Valor e tipos exatamente iguais. 5 == '5', não pois valores iguais e tipos diferentes (ele não realizará a conversão para comparar.).False.