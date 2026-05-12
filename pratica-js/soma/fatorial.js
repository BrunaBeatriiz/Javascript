let num = 100;
let resultado = 1n;

const fatorial = () => {
    for (i = 1n; i <= BigInt(num) ; i ++){
       resultado *= i;
    }
    console.log(`O fatorial de ${num} é ${resultado}`);
}

fatorial();