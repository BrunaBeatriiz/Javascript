let palavras = [
    ["ola", "mundo", "js"],
    ["frontend", "teste", "codigo"],
    ["desafio", "matriz", "valor"]
];
  

function palavrasASCII (arrayP) {
    let valor = 0;
    let valoresMatriz =[];
    for (let i = 0; i < arrayP.length; i++){
        let novaLinha = [];
        for (let j = 0; j < arrayP[i].length; j++){
            valor = 0;
            let palavra = arrayP[i][j].split("");
            palavra.forEach(letter => {
                valor += letter.charCodeAt(0);
            });
            novaLinha.push(valor);
        }
        valoresMatriz.push(novaLinha);
        
    }
    console.log(valoresMatriz);
    return valoresMatriz;
}
let novaMatriz = palavrasASCII(palavras);
console.table(palavras);

const somaPorLinha = (arrayNumeros) => {
    let soma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        soma = 0;
        for (let j = 0; j < arrayNumeros[i].length; j++) {
            const element = arrayNumeros
            [i][j];
            soma+=element;
            
        }
        console.log(soma)
        
        
    }

}

somaPorLinha(novaMatriz);
const somaPorColuna = (arrayNumeros) => {
    let soma = new Array(arrayNumeros[0].length).fill(0);
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros[i].length; j++) {
            const element = arrayNumeros
            [i][j];
            soma[j]+=element;
            
        }   
    }
    console.log(soma)

}

somaPorColuna(novaMatriz);

const maiorValor = (arrayNumeros) => {
    let maior = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros[i].length; j++) {
            const element = arrayNumeros
            [i][j];
            if(element > maior){
                maior = element;
            }
            
        }   
    }
    console.log(maior)

}

maiorValor(novaMatriz);

const menorValor = (arrayNumeros) => {
    let menor = arrayNumeros[0][0];
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros[i].length; j++) {
            const element = arrayNumeros
            [i][j];
            if(element < menor){
                menor = element;
            }
            
        }   
    }
    console.log(menor)

}

menorValor(novaMatriz);


const somaDiagonal = (arrayNumeros) => {
    let soma =0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros.length; j++) {
            if(i===j){
                soma+=arrayNumeros[i][j];
            }
            
        }
    }
    console.log(soma);
}
somaDiagonal(novaMatriz);

const mediaAcima = (arrayNumeros) => {
    let contador = 0;
    let soma = 0;
    let acimaDaMedia = [];
    let abaixoDaMedia = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros.length; j++) {
            contador++;
            element = arrayNumeros[i][j];
            soma+=element;
            
        }
    }

    let media = soma / contador;
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros.length; j++) {
            element = arrayNumeros[i][j];
            if(element > media){
                acimaDaMedia.push(element);
               
            }else{
                abaixoDaMedia.push(element);
                
            }
            
        }
    }
    console.log(media);
    console.log("Os números acimda da média são:", acimaDaMedia);
    console.log("os números abaixo da média são:", abaixoDaMedia);
   
}
mediaAcima(novaMatriz);
// const condicao = (arrayNumeros) => {
//     let numerospar =[];
//     let numerosImpar =[];
//     for (let i = 0; i < arrayNumeros.length; i++) {
//         for (let j = 0; j < arrayNumeros.length; j++) {
//             if(i===j){
//                 soma+=arrayNumeros[i][j];
//             }
            
//         }
//     }
//     console.log(soma);
// }
// condicao(novaMatriz);