let num = [1, 2, 3, 4, 5, 6, 7, 8];

let par = [];

num.forEach((n) => {
  if (n % 2 === 0) {
    par.push(n);
  }
});

let parTeste = num.filter((n) => {
  return n % 2 === 0
})

let teste = [1,2,3,4,5]

let dobroR = teste.reduce((acc,n) => {
  return acc * n;
},1);

let soma  = num.reduce((acc,n) => {
  return acc + n;
},0);



console.log(par);
console.log(parTeste);
console.log(soma);
console.log(dobroR);
