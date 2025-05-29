let num = [5,8,4];
console.log (num);


num[3] = 9;


num.push(1);

num.push(0);


//console.log(num.length);
num.sort();
console.log(num);

// for(i = 0; i < num.length; i++){
//     console.log(`A posição ${i} tem o valor: ${num[i]}`);
// }

for (let i in num)[
    console.log(`A posição ${i} tem o valor: ${num[i]}`)
]



let pos = num.indexOf(9);
//console.log(pos);

if (pos == -1){
    console.log('O valor não foi encontrado.');
}else{
    console.log(`O valor está na posição: ${pos}.`)
}