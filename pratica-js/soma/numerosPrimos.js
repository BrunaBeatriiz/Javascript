let num = 11;
let inicio = 12;
let fim = 394;
let intervalo = [];

const array = () => {
    for (let i=inicio; i <= fim; i++){
        intervalo.push(i);
    }
}
array();


const ePrimo = (num) => {
    if(num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}

// console.log(ePrimo());
let primosIntervalo = [];

function intervaloPrimos (intervalo) {
    for (let i = 0; i <= intervalo.length - 1; i++){
        if(ePrimo(intervalo[i])){
            primosIntervalo.push(intervalo[i]);
        }
    }
    console.log(primosIntervalo);

}
intervaloPrimos(intervalo);
