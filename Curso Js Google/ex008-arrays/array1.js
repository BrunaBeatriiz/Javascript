let num = [5,8,4];
console.log (num);

//let i = [9,7,4,2,72];
//console.log(`Meu vetor é o: ${i}`);

num[3] = 9;
// console.log(num);

num.push(1);
//console.log(num);

num.push(0);
//console.log(num);


//console.log(num.length);
num.sort();
console.log(num);

// for(i = 0; i < num.length; i++){
//     console.log(`A posição ${i} tem o valor: ${num[i]}`);
// }

for (let i in num)[
    console.log(`A posição ${i} tem o valor: ${num[i]}`)
]

// console.log(num.indexOf(9));
// console.log(num.indexOf(8));
// console.log(num.indexOf(0));

let pos = num.indexOf(9);
//console.log(pos);

if (pos == -1){
    console.log('O valor não foi encontrado.');
}else{
    console.log(`O valor está na posição: ${pos}.`)
}