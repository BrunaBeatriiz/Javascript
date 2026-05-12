function soma (a = 0,b = 0){
    return a + b;
}

console.log(soma(3,9));

// ou let resSoma = sum(4,5);
//console.log(resSoma);
//9


// function sum (a,b){
//     console.log (a+b);
// }
// sum(4,9);

const sum = (a,b) =>{
    console.log(a,b);
    return a + b;
}

console.log(sum(5, 9));

const sum1 = (a,b) => a + b;
console.log(sum1(5,3));
//se for apenas uma instução não é necessário utilizar o return;

const ola = () => 'Olá,Mundo!';
console.log(ola());
//pode ser usado sem parametros;

const quadrado = x => x * x;
console.log(quadrado(4));
//pode ser usado com apenas um parametro;