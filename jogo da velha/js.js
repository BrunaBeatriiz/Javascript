const elementosCelula = document.querySelectorAll("[data-celula]");
//o elementosCelula retorna uma nodeList, algo semelhante a um array, uma lista indexaos.

const tabuleiro = document.querySelector('.tabuleiro');
let msgVitoria = document.getElementById('mensagemVitoria');
let cxVitoria = document.querySelector('.mensagem');

let vezCirculo;

let  combinacaoVitoria = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
]

const comecaJogo = () => {
    for( const celula of elementosCelula){
        celula.addEventListener("click", cliqueJogo, {once:true});
    }

    let vezCirculo = false;

    tabuleiro.classList.add("x")
}


const encerrarJogo = (empate)=>{
    if(empate){
        msgVitoria.innerText = "Deu velha";
    }else{
        msgVitoria.innerHTML = vezCirculo? "<p> <strong>O</strong> VENCEU</p>": "<p> <strong>X</strong> VENCEU</p>";
    }


    cxVitoria.classList.add("mostrarMsg");
}

const trocarJogador = () =>{
    vezCirculo = !vezCirculo;
    tabuleiro.classList.remove("o","x");
    
    if(vezCirculo){
        tabuleiro.classList.add("o");
    }else{
        tabuleiro.classList.add("x");
    }

}

const addClasse =(celula, classeAd)=>{
    celula.classList.add(classeAd);
}

const verificarVitoria = (jogadorAtual) => {
    return combinacaoVitoria.some((combination) =>{
        return combination.every ((index) =>{
            return elementosCelula[index].classList.contains(jogadorAtual);
        });
    });
}

const cliqueJogo = (e) =>{

    //adiciona x ou o
    const celula = e.target;
    const classeAd = vezCirculo? 'o' :  'x';

    addClasse(celula, classeAd);

    //verificar vitoria
    const vitoria = verificarVitoria(classeAd);
    if(vitoria){
        encerrarJogo(false);
    }
    //troca o jogador
    trocarJogador();
}


comecaJogo();

// for( const celula of elementosCelula){
//     celula.addEventListener("click", cliqueJogo, {once:true});
// }

//pesquisar once:true;

// o celula representa um elemento da lista, por exemplo o elemento clicado?
// Exatamente! Dentro do for, a variável celula representa cada elemento da lista de células (elementosCelula). Ou seja, durante a iteração, celula é um elemento individual do tabuleiro, como uma célula, mas não necessariamente a célula clicada — a célula clicada é tratada dentro da função cliqueJogo.


