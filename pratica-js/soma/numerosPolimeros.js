let numero = "0010";
let numeroString = String(numero);

let numeroArray = Array.from(String(numero));
console.log(numeroArray);
let numeroReverso = numeroArray.reverse().join("");
console.log(numeroReverso);

const comparacao = () => {
    if(numero === Number(numeroReverso)){
        console.log("Este número é um palíndromo:", numero);
    }else{
        console.log("Este número não é um palíndromo.");
    }
}
const comparacaoS = () => {
    if(numeroString === numeroReverso){
        console.log("Este número é um palíndromo S:", numero);
    }else{
        console.log("Este número não é um palíndromo S.");
    }
}

comparacao();
comparacaoS();