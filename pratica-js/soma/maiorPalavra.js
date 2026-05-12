let frase = "Eu gosto muito de programar em JavaScript";
let palavras = frase.split(" ");
console.log(palavras);
let maior = "";

const contagem = () => {
    palavras.forEach((word) => {
        if(word.length > maior.length){
            maior = word;
        }
    });
}

const maiorPalavra = palavras.reduce((maior, palavraAtual) => {
    return palavraAtual.length > maior.length? palavraAtual : maior;
}, "");


contagem();
console.log("A palavra mais longa é", maior);
console.log("A palavra mais longa usando reduce é", maiorPalavra);

/*
Este código encontra a palavra mais longa de uma frase.

Passos:
1. Divide a frase em palavras com split(" ").
2. Usa reduce para percorrer todas as palavras.
3. Compara o comprimento de cada palavra com a maior encontrada até agora.
4. Retorna a palavra com mais caracteres no final.
*/
