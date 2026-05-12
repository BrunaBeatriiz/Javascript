let palavra = 'ekitike';

function palindromo () {
    let palavraInversa = palavra.split("").reverse().join("");
    console.log(palavraInversa);

    if(palavra === palavraInversa){
        console.log("verdadeiro")
    }else{
        console.log("false");
    }

}

palindromo();

let frase = "hoje o sol brilha hoje o céu está azul"
let contagem = {};

const analisaFrase = () => {
    let fraseSeparada = frase.split(" ");
    let contador = fraseSeparada.forEach((word) => {
        contagem[word] = contagem[word] ? contagem[word] + 1 : 1;
    })

    const repetidas = Object.keys(contagem).filter((palavra) => contagem[palavra] > 1);
    const unicas = Object.keys(contagem).filter((palavra) => contagem[palavra] === 1 );
    

    console.log(contagem)
    return{
        unicas:unicas.length,
        repetidas: repetidas
    };


}
console.log(analisaFrase());


let numero = 28 ;
let soma = 0;
let arrSoma = [];

function numeroPerfeito () {
    for(i = 1; i < numero; i++){
       if(numero % i === 0){
        // soma += i;
        // arrSoma = [...arrSoma, i];
        arrSoma.push(i);
       }
    }
    console.log(arrSoma);
    let somaArr = arrSoma.reduce((acc, number) => acc + number,0 );
    if(numero === soma || numero === somaArr){
        console.log("Este número é perfeito!");
    }else{
        console.log("Este número não é perfeito.");
    }
    
}
numeroPerfeito();


const verificaSenha = (senha) => {
    
    if(senha.length <= 8){
       return "A senha deve ter no mínimo 8 caracteres.";
    }
    if(!/[A-Z]/.test(senha)){
        return "Senha deve conter pelo menos uma letra maiúscula.";
    }
    if(!/[0-9]/.test(senha)){
        return "A senha deve conter pelo menos um número.";
    }
    if(!/[!@#$%&*^~?<>]/.test(senha)){
        return "A senha deve conter pelo menos um caractere especial (!@#$%&*^~?<>)."
    }

    return "Senha válida!"
}

console.log(verificaSenha("senhalomA1!"));