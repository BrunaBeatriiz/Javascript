let frutas = ["maçã","banana","maçã","laranja","banana","maçã"];

let newFrutas = [... new Set(frutas)];
newFrutas.sort();

console.log(newFrutas);
let obj = {};

let res = frutas.forEach((f) => {
  if(obj[f]){
    obj[f] += 1;
  }else{
    obj[f] = 1;
  }
})

console.log(obj);


let resultado = frutas.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
console.log("resultado reduce: " , resultado);