const nome = 'desafio';

let letrasSeparadas = nome.split("");
console.log(letrasSeparadas);

function reverse(){
    let novo = "";
    for (i = 0; i < nome.length; i++){
        let letra = letrasSeparadas.pop();
    
        novo += letra;
    
    }
    console.log(novo)
}

reverse();



const numeros = [1,2,3,4,5,6,7,8,9,10];

function retunrPar(){
    let resultado = numeros.filter((number) => number % 2 === 0);
    console.log(resultado)
}

retunrPar();

function somaTodos () {
    const resultado = numeros.reduce((acc, number) => acc + number, 0);
    console.log(resultado);
}

somaTodos();

let palavra = "abacaxi";

function countLetter () {
    let contagem = {};

    let letras= palavra.split("");

    letras.forEach((letra) => {
        if(contagem[letra]){
            contagem[letra] += 1;
        }else{
            contagem[letra] = 1;
        }
    })

    console.log(contagem);
    return contagem;


}

countLetter();


let arraySet = new Set (palavra);
console.log(arraySet);
let arrayLimpo = [...arraySet];
console.log(arrayLimpo);



