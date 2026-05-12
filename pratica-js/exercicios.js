let frase = " O peito do pé de Pedro é preto";

// let fraseInvertida = frase.split("");
// console.log(fraseInvertida);


// const reverterFrase = () =>{
//     let novaFrase ="";
//     for(i = 0; i < frase.length; i++){
//         const ultimaLetra = fraseInvertida.pop();

//         novaFrase += ultimaLetra;

//     }


//     console.log(novaFrase);
// }
const reverterFrase = () =>{
    const palavra = frase.split(" ");
    let resultado = palavra.map((palavra)=> 
    {
        let newWord = palavra.split("").reverse().join ("");;
        return newWord;
        
    
    })
    console.log(resultado.join(" "));
}

reverterFrase();


let numeros = [2,3,4,5,6,10,12,13,14,15,30,32,33,51,55,60,101,102];

function numerosFIltradosDobro () {
    let numerosPares = numeros.filter((numero) => numero % 2 === 0);
    // console.log(numerosPares);

    const paresDobro = numerosPares.map((numero) => numero * 2);
    console.log(paresDobro);
}


numerosFIltradosDobro();

const numerosRepetidos = [1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,8,8,8,8,8,8,8,8,8];


 
function con () {
    const contagem = {};

    numerosRepetidos.forEach((number) => {
        if (contagem[number]){
            contagem[number] += 1;
        }else{
            contagem[number] = 1;
        }
    })

    console.log(contagem);

    let quanridadeAparicao  = 0
    let numeroFrequnete ;
    for (var num in contagem){
        
        if(contagem[num] > quanridadeAparicao){
            quanridadeAparicao = contagem[num];
            numeroFrequnete = num;
        }
    }
    console.log('numero' , numeroFrequnete , 'numero de aparições',quanridadeAparicao)
    return contagem;
}
// contagem[num] → guarda quantas vezes o número apareceu.
// num → é a chave (o próprio número) usada no objeto contagem.
// O JS transforma as chaves em strings, mas o valor (contagem[num]) é o total de repetições.

con();



let p1 = 'conversation';
let p2 = 'voices rant on';

const verificaAnagrams = () => {
    let p1Normalizada = p1.toLowerCase().replace(/\s+/g, "");
    console.log(p1Normalizada);
    let p2Normalizada = p2.toLowerCase().replace(/\s+/g, "");
    console.log(p1Normalizada,p2Normalizada);

    let p1Ordenada = p1Normalizada.split("").sort().toString();
    let p2Ordenada = p2Normalizada.split("").sort().toString();
    console.log(p1Ordenada,p2Ordenada);

    if(p1Ordenada === p2Ordenada){
        console.log("verdadeiro");
    }else{
        console.log("falso");
    }

}

verificaAnagrams();
