let numeros = [1,2,3,4,2,5,6,3,7,1];
//let newNum = [... new Set(numeros)];

let qntd = numeros.reduce((acc, item) => {
  if(!acc[item]){
    acc[item] = 0
  }

  acc[item] += 1;
  return acc;
}, {})

let duplicados = [];

for(let n in qntd){
    if(qntd[n] > 1){
      duplicados.push(Number(n));
    }
  }
//console.log(newNum);
console.log(qntd);


console.log(duplicados);



