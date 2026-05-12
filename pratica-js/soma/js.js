let number = 23456;
let soma = 0 ;

let digitos = number.toString().split("");

console.log(digitos);

const somaDigitos = () => {
    digitos.forEach((n)=>{
       let num = Number(n);
        soma += num;
    })
    console.log(soma);
}



somaDigitos();



const ssss = digitos.reduce((acc, num) => acc + Number(num), 0);
console.log(ssss); 
