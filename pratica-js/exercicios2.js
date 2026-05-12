let numeros = [0,2,300,4,5,100,7,8,900,200];

function pegarMaximo () {
    // const numerosOrdenados = numeros.sort((a,b) => b -a);
    // console.log(numerosOrdenados);
    // console.log(numerosOrdenados[0]);

    let maior = 0;
    numeros.forEach((number) => {
        if(number > maior){
            maior = number;
        }
    })
    console.log(maior);
    return maior;
}

pegarMaximo();

let palavra = 'As escadas tem degraus, e os oculos apenas graus, e os olhos tem iris';
let contagem = {};

function contaVogais () {
    let palavraNormalizada = palavra.toLowerCase().split("");
    console.log(palavraNormalizada);

    palavraNormalizada.forEach((letter) => {
        if(["a","e","i","o","u"].includes(letter)){
            contagem[letter]= contagem[letter]? contagem[letter]+ 1 : 1;
        }
    })
    console.log(contagem);
}
contaVogais();

// if(contagem[letter]){
            //     contagem[letter] += 1;
            // }else{
            //     contagem[letter] = 1;
            // }




let frase = "a pipoca é linda";

const invertePalavras = () => {

    let palavraSeparada = frase.split(" ").reverse().join(" ");
    console.log(palavraSeparada);
}

invertePalavras();


function substitui () {
    let novaFrase = palavra.split("");
    let novo = novaFrase.map((letter) => {
        return ["a","e","i","o","u"].includes(letter.toLowerCase())? "*" : letter;
    })
    return novo.join("")

    
}

console.log(substitui());