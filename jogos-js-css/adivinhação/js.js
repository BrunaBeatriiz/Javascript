const palpite = window.document.getElementById("palpite");
const resultado = document.getElementById("resultado");
let h2 = document.getElementById("h2Tentativas");
let button = document.getElementById("button");
let phistorico = document.getElementById("historico");

let numeroGerado ;
let tentativas = 0;
let historico = [];

const numeroAleatorio = () => {
    numeroGerado = Math.floor(Math.random() * 100) + 1;
    console.log(numeroGerado);
}

function verificar () {
    if(palpite.value === ""){
        resultado.innerText = "Digite um número para continuar."
        palpite.focus();
        return;
    }


    button.disabled = true;
    let palpiteNumero = Number(palpite.value);
    tentativas++;


    historico.push(palpiteNumero);


    if(isNaN(palpiteNumero)){
        resultado.innerText = "Isto não é um númeo."
        h2.innerText = `Tentativas: ${tentativas}`
    }else if(palpiteNumero === numeroGerado){
        resultado.innerText = "Parabens você acertou.";
        h2.innerText = `Tentativas até o acerto: ${tentativas}.`
        phistorico.innerText = `Histórico: ${historico.join(",")}`;
        setTimeout(()=> {
            tentativas = 0;
            historico = [];
            numeroAleatorio();
            palpite.value = "";
            h2.innerText = " O jogo foi reiniciado.";
            resultado.innerText = "";
            button.disabled = false;
        },3000);
    }else if(palpiteNumero > numeroGerado){
        resultado.innerText = "Seu palpite está acima do número.";
        h2.innerText = `Tentativas: ${tentativas}`;
        phistorico.innerText = `Histórico: ${historico.join(",")}.`;
    }else if(palpiteNumero < numeroGerado){
        resultado.innerText = "Seu palpite está abaixo do número.";
        h2.innerText = `Tentativas: ${tentativas}`;
        phistorico.innerText = `Histórico: ${historico.join(",")}.`;
    }else{
        resultado.innerText = "Isto não é um número";
    }
    setTimeout(() => {
        button.disabled = false;
        palpite.value = "";
        palpite.focus();
    },1000)
}

numeroAleatorio();