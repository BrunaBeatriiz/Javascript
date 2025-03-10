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
        msgVitoria.innerText = "DEU VELHA!";
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



//jogador atual são os valores classeAd ('x' ou 'o').
// No contexto do código, combination é um único array dentro da lista combinacaoVitoria que representa uma combinação específica de índices das células que formam uma linha, coluna ou diagonal no tabuleiro.
// Exemplo de combination:
// [0, 1, 2]
//index é a posição no array combinaçãoVitoria.Se naquela posição do index há uma classe.
// então some é pra que todas as combinações sejam checadas, every percorre uma combinação procurando se todas tem x ou o, e ele passa index das combinações como parametro, e acessa no elementosCelulas os indexes correspondentes e analisa se tem a classe do jogador atual? respostas curtas


// some: Checa se pelo menos uma combinação de vitória tem todas as células com a classe do jogador atual.
// every: Percorre uma combinação específica e verifica se todas as células dessa combinação têm a classe do jogador atual (se for X ou O).
// O index dentro de every é o índice da combinação de vitória, e elementosCelula[index] acessa as células correspondentes no tabuleiro para verificar se têm a classe do jogador atual.
const verificarVitoria = (jogadorAtual) => {
    return combinacaoVitoria.some((combinacao) =>{
        return combinacao.every ((index) =>{
            return elementosCelula[index].classList.contains(jogadorAtual);
        });
    });
}

// const addClasse =(celula, classeAd)=>{
//     celula.classList.add(classeAd);
// }

const cliqueJogo = (e) =>{

    //adiciona x ou o
    const celula = e.target;
    const classeAd = vezCirculo? 'o' :  'x';

    celula.classList.add(classeAd);

    //verificar vitoria
    const vitoria = verificarVitoria(classeAd);
    if(vitoria){
        encerrarJogo(false);
    }


    const empate = [...elementosCelula].every((celula) => celula.classList.contains("x")||celula.classList.contains("o"));
    if(empate){
        encerrarJogo(true);
    }
    //troca o jogador
    trocarJogador();
    // O trocarJogador() será executado somente se não houver um vencedor.
}

const reiniciar = () =>{
    for(const celula of elementosCelula){
    celula.classList.remove("x","o");
    }
    cxVitoria.classList.remove("mostrarMsg");


    comecaJogo();
    // O { once: true } garante que o evento de clique seja disparado apenas uma vez, mas quando o jogo reinicia, você precisa reativar esse comportamento, ou seja, adicionar novamente os event listeners para que as células possam ser clicadas novamente.
    // Ao chamar a função comecaJogo() novamente dentro do reiniciar(), você está reativando os event listeners nas células, permitindo que os jogadores possam clicar nelas novamente e fazer suas jogadas.
}

comecaJogo();

