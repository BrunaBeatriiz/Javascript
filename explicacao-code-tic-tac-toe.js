const elementosCelula = document.querySelectorAll("[data-celula]");
//o elementosCelula retorna uma nodeList, algo semelhante a um array, uma lista indexaos.

console.log(elementosCelula);

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

// Exatamente! 😄
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

// for( const celula of elementosCelula){
//     celula.addEventListener("click", cliqueJogo, {once:true});
// }

//pesquisar once:true;

// o celula representa um elemento da lista, por exemplo o elemento clicado?
// Exatamente! Dentro do for, a variável celula representa cada elemento da lista de células (elementosCelula). Ou seja, durante a iteração, celula é um elemento individual do tabuleiro, como uma célula, mas não necessariamente a célula clicada — a célula clicada é tratada dentro da função cliqueJogo.


// A função comecaJogo() é chamada automaticamente após o carregamento completo do DOM. Quando o navegador termina de renderizar a página, o JavaScript é executado e, no final do código, a função é invocada para inicializar o jogo, configurando os eventos de clique nas células.



// for: O for é usado para percorrer a lista de células (elementosCelula), que são selecionadas no DOM.
// addEventListener: Dentro do loop, para cada célula, é adicionado um ouvinte de evento de clique (click). Quando a célula é clicada, a função cliqueJogo é chamada.
// {once: true}: Essa opção garante que o evento de clique na célula seja registrado apenas uma vez. Ou seja, a célula só pode ser clicada uma vez, e depois o ouvinte de evento é removido automaticamente. Isso evita que a célula seja clicada novamente durante o jogo.
// celula é o nome da variável dentro do loop e pode ser alterado para qualquer outro nome. Ele só representa cada célula do tabuleiro no momento em que o loop percorre a lista de elementos.
// cliqueJogo (sem os parênteses) é passado como referência para o addEventListener, permitindo que a função seja executada quando o evento ocorrer. Se fosse cliqueJogo(), a função seria chamada imediatamente ao adicionar o ouvinte, o que não é o desejado.
// A variável vezCirculo controla a alternância entre os jogadores "X" e "O". Quando false, o jogador "X" joga, e quando true, o jogador "O" joga. Ela também altera o estilo do tabuleiro e garante que o jogo troque corretamente entre os jogadores, impactando a lógica do jogo.
// tabuleiro.classList.add("x")
// A linha tabuleiro.classList.add("x") adiciona a classe x ao elemento do tabuleiro, indicando que o primeiro jogador será o "X". Isso altera o estilo do tabuleiro, aplicando qualquer estilo CSS associado à classe x e sinalizando que é a vez do jogador "X".
// Sim, **`e`** (ou **`event`**) é o parâmetro que representa o evento, passado automaticamente pela função de callback. **`e.target`** (ou **`event.target`**) é a célula que foi clicada. Então, **`const celula = e.target;`** pega a célula que disparou o evento.
// tem necessidade deste const celula = e.target? ja que o evento já esta sendo passado para essa função?
// Embora o evento seja passado automaticamente para a função cliqueJogo, a linha const celula = e.target; ainda é necessária para referenciar o elemento específico que foi clicado.
// O e.target é o elemento que disparou o evento, e a variável celula serve para simplificar o código, armazenando esse elemento em uma variável mais legível e fácil de usar ao longo da função.
// Sem essa linha, você precisaria acessar e.target diretamente em todos os lugares onde fosse necessário, como por exemplo:
// addClasse(e.target, classeAd);
// Então, não é obrigatório ter essa linha, mas ela ajuda a deixar o código mais claro e fácil de entender.
// é necessário para referenciar a celula especifica que foi acionada?
// Sim, a linha const celula = e.target; é necessária para referenciar a célula específica que foi clicada.
// Embora o e.target já forneça a célula clicada, essa linha armazena o valor em uma variável chamada celula, o que facilita o uso da célula dentro da função. Sem ela, você precisaria acessar e.target diretamente em cada lugar onde precisasse usar a célula clicada.
// A função addClasse adiciona a classe classeAd à celula.
// celula é o elemento (a célula do tabuleiro) onde a classe será adicionada.
// classeAd é a classe que será adicionada, que pode ser 'x' ou 'o', dependendo do jogador.
// Em resumo, ela aplica a classe fornecida à célula especificada.
// o classeAd é o valor x ou o?
// Sim, classeAd é o valor 'x' ou 'o'.
// Se for a vez do jogador X, classeAd será 'x'.
// Se for a vez do jogador O, classeAd será 'o'.
// Esse valor é passado para a função addClasse e é adicionado como uma classe à célula.
// Sim, a função verificarVitoria verifica as possibilidades de vitória e recebe x ou o como parâmetro para verificar se o jogador venceu.
// ele verifica onde tem x e o's  verifica se algum se alinha com as possibilidades de vitória?
// Exato! A função verificarVitoria verifica onde há x ou o nas células do tabuleiro e checa se algum desses símbolos se alinha com as combinações de vitória definidas (como 3 em linha horizontal, vertical ou diagonal).
// então a cada jogada essa função verifica se existe um vencedor? vendo se as celulas com o e x se alinha com as possibilidades de vitoria? ele não adiciona x ou o, apenas verifica se nas celulas onde os x e os baseados na sua posição veirifica se há vitoria?
// Exatamente! A função verificarVitoria não adiciona x ou o. Ela simplesmente verifica se, nas células do tabuleiro, os símbolos x ou o estão alinhados conforme as combinações de vitória predefinidas.
// A cada jogada, ela:
// Verifica as células para ver onde estão os x e o.
// Checa se esses símbolos estão alinhados em uma das possíveis combinações de vitória (como linhas, colunas ou diagonais).
// Ou seja, ela só faz a verificação, sem alterar nada no tabuleiro. Se encontrar uma combinação vencedora, ela retorna true.
// verificaVitoria recebe os valores de classeAd? poderia ser esse nome? respostas curtas
// Sim, verificarVitoria recebe o valor de classeAd (que pode ser 'x' ou 'o') como parâmetro para verificar se esse jogador venceu. O nome classeAd funciona bem, mas pode ser nomeado de qualquer forma que faça sentido, como jogadorAtual, por exemplo.
// e isso vai retorna um valor true ou false?
// Sim, a função verificarVitoria retorna true se o jogador atual (representado por classeAd, que pode ser 'x' ou 'o') tiver uma combinação vencedora no tabuleiro. Caso contrário, retorna false.
// como ele usa o jogadorAtual como parametro para testar as combinações de vitória?
// O parâmetro jogadorAtual (que é o valor de classeAd, sendo 'x' ou 'o') é usado para verificar se as células nas combinações de vitória possuem a classe correspondente ao jogador atual.
// Aqui está como funciona:
// A função verificarVitoria(jogadorAtual) recebe jogadorAtual como argumento (pode ser 'x' ou 'o').
// Dentro da função, a combinaçãoVitoria (um array de arrays com combinações de índices) é percorrida. Cada combinação representa uma linha, coluna ou diagonal no tabuleiro.
// Para cada combination (que é um array de índices, como [0, 1, 2] para uma linha), o método every() verifica se todas as células dessa combinação contêm a classe do jogadorAtual.
// combination.every((index) => {
//     return elementosCelula[index].classList.contains(jogadorAtual);
// });
// elementosCelula[index].classList.contains(jogadorAtual) verifica se a célula no índice index contém a classe correspondente ao jogador (se é 'x' ou 'o').
// Se todas as células da combinação contiverem o jogadorAtual, a função some() retorna true, indicando vitória. Caso contrário, continua verificando outras combinações.
// jogadorAtual (ou classeAd) é usado para testar se todas as células de uma combinação contêm o símbolo do jogador atual.
// Se uma combinação for vencedora, retorna true, caso contrário, false.
// some() verifica se pelo menos uma combinação de células tem a classe do jogador.
// every() verifica se todas as células de uma combinação têm a classe do jogador.
// some() verifica se pelo menos uma combinação é verdadeira (ou seja, se uma combinação tem x ou o em todas as suas células).
// every() verifica se todas as células dentro de uma combinação têm a classe do jogador atual (se é x ou o).

// o every é mais um metodo para que todas as combinações sejam percorridas e every verifica se alguma tem os valores? e quando every retorna true some tbm retorna?
// Sim, exatamente!
// every() percorre uma combinação e verifica se todas as células dessa combinação têm o valor do jogador (ex: "x" ou "o").
// Quando every() retorna true, significa que todas as células daquela combinação têm o valor esperado, e então o some() retorna true também, pois encontrou uma combinação vencedora.
// O some() retorna true assim que encontra qualquer combinação válida, e não verifica mais as outras.
// O **`index`** é a posição do **array de combinações de vitória**. 

// Cada combinação de vitória, como `[0, 1, 2]`, tem índices que representam as posições das células no **array** de células do tabuleiro. O **`index`** percorre essas posições para verificar se a célula correspondente possui a classe do **`jogadorAtual`**.

// Por exemplo, se a combinação de vitória for `[0, 1, 2]`, o **`index`** irá iterar sobre 0, 1 e 2, e verificar se as células nas posições 0, 1 e 2 têm o valor "x" ou "o" (dependendo do jogador).


// every irá verificar se nas posições do array de combinçaõ de vitoria há x ou o?

// Sim, exatamente! O every() verifica se, nas posições do array de combinações de vitória, todas as células possuem o valor correto (ou seja, "x" ou "o").

// Por exemplo, para a combinação [0, 1, 2], every() vai verificar se as células nas posições 0, 1 e 2 têm a classe do jogadorAtual (se é "x" ou "o"). Se todas as células tiverem o valor esperado, every() retorna true.


// elementos celula ira acessar o conteudo da celula baseado no index?

// Sim, exatamente! A elementosCelula é uma lista (ou NodeList) contendo todas as células do tabuleiro, e o index é usado para acessar o conteúdo de uma célula específica.

// Por exemplo, no código:


// elementosCelula[index].classList.contains(jogadorAtual);
// index é a posição da célula na combinação de vitória.
// elementosCelula[index] acessa a célula correspondente a esse índice.
// .classList.contains(jogadorAtual) verifica se a célula contém a classe do jogador atual (se é "x" ou "o").
// Portanto, o index serve para acessar e verificar o conteúdo de cada célula no tabuleiro durante a verificação da vitória.


// e classList contains serve para veriifcar se há a classe do jogador atual?

// Sim, exatamente! O classList.contains(jogadorAtual) verifica se a célula tem a classe correspondente ao jogador atual.

// Por exemplo, se jogadorAtual for "x", então classList.contains("x") verifica se a célula tem a classe "x". Se tiver, a função retorna true, caso contrário, retorna false.

// Esse método é utilizado para checar se uma célula tem o valor de "x" ou "o", ajudando a determinar se a combinação de vitória é válida.

// me explique o elementosCelula[index]

// O elementosCelula[index] acessa um elemento específico dentro da NodeList elementosCelula, que é uma coleção de todas as células do tabuleiro.

// Vamos dividir isso:

// elementosCelula: é uma NodeList (uma lista de nós) que contém todos os elementos HTML que possuem o atributo data-celula, ou seja, as células do tabuleiro do jogo.

// index: é a posição dentro da lista elementosCelula. Em outras palavras, ele indica qual célula específica estamos acessando, baseado na combinação de vitória (por exemplo, [0, 1, 2], [3, 4, 5], etc.).

// elementosCelula[index]: acessa a célula correspondente à posição index na NodeList elementosCelula.

// Por exemplo, se index = 0, elementosCelula[0] se refere à primeira célula do tabuleiro (célula de índice 0).

// Exemplo:
// Se você tiver uma combinação de vitória como [0, 1, 2], e no momento o jogador estiver tentando verificar se essas 3 células estão com o mesmo valor (como "x" ou "o"), o código vai fazer o seguinte:


// elementosCelula[0].classList.contains(jogadorAtual); // Verifica a célula 0
// elementosCelula[1].classList.contains(jogadorAtual); // Verifica a célula 1
// elementosCelula[2].classList.contains(jogadorAtual); // Verifica a célula 2
// Esse código verifica se as células nas posições 0, 1 e 2 têm a classe correspondente ao jogadorAtual.


// é para acessar os index das combinações de vitória? exemplo: se for 0,1,2, elementos[index] acessara os index disso? é o meio de acesso as celulas que estão na lista de combinações de vitória

// Exatamente! 😄

// O elementosCelula[index] serve para acessar as células específicas do tabuleiro de acordo com os índices das combinações de vitória.

// Como funciona:
// A lista combinacaoVitoria contém várias combinações de índices que representam as posições das células no tabuleiro (exemplo: [0, 1, 2], [0, 3, 6]).
// O index dentro do every é o índice de cada célula dentro de uma combinação de vitória específica (por exemplo, 0, 1, 2).
// elementosCelula[index] acessa as células nas posições indicadas pela combinação de vitória (como as células 0, 1 e 2, por exemplo).
// Exemplo prático:
// Se a combinação de vitória for [0, 1, 2], o código vai:

// Verificar a célula na posição 0 (elementosCelula[0])
// Verificar a célula na posição 1 (elementosCelula[1])
// Verificar a célula na posição 2 (elementosCelula[2])
// Ou seja, ele usa os índices das combinações de vitória para acessar as células do tabuleiro correspondentes a essas posições.

// Esse código define a função encerrarJogo, que é chamada quando o jogo termina. Ela recebe um parâmetro empate para determinar se o jogo terminou em empate ou se alguém venceu.

// Se empate for verdadeiro: A mensagem "Deu velha" é exibida, indicando que o jogo terminou em empate.
// Se empate for falso: A função verifica quem venceu. Se for o jogador O (quando vezCirculo é verdadeiro), a mensagem "O VENCEU" é exibida. Caso contrário, se for o jogador X, a mensagem "X VENCEU" é exibida.
// Depois de definir a mensagem, a classe mostrarMsg é adicionada ao elemento cxVitoria para mostrar a mensagem de vitória na tela.
// Resumindo, a função exibe a mensagem de vitória ou empate quando o jogo termina.

// o else se empate for falso ele sabe quem venceu baseado na vez do circulo?

// Sim, exatamente! Quando o empate é falso, a função usa o valor da variável vezCirculo para determinar quem venceu:

// Se vezCirculo for verdadeiro (true), significa que foi o jogador O que venceu, então a mensagem "O VENCEU" será exibida.
// Se vezCirculo for falso (false), significa que foi o jogador X que venceu, e a mensagem "X VENCEU" será exibida.
// Portanto, o vezCirculo serve como indicador de qual jogador foi o vencedor.

// então essa mensagem é adicionada ao html e depois a caixa da mensagem recebe um display para que seja exibida?

// Sim, exatamente! O fluxo é o seguinte:

// Mensagem de vitória: A função encerrarJogo altera o conteúdo da variável msgVitoria com a mensagem apropriada (quem venceu ou se foi empate). Ela faz isso com innerText ou innerHTML.

// Se houver um vencedor, a mensagem será algo como "O VENCEU" ou "X VENCEU", dependendo de quem ganhou.
// Se for empate, a mensagem será "Deu velha".
// Exibição da caixa de mensagem: Após definir a mensagem, a função adiciona a classe mostrarMsg ao elemento cxVitoria. Isso provavelmente ativa um estilo CSS que faz a caixa de mensagem aparecer na tela (como por exemplo, alterar o display para block ou algo semelhante).

// Então, o que acontece é:

// A mensagem é atualizada no HTML.
// A caixa de mensagem se torna visível, mostrando a mensagem de vitória ou empate.
// trocaJogador sera executado apenas se não houver um vencedor pois o codigo ira parar ali?

// Exatamente! O trocarJogador() será executado somente se não houver um vencedor.

// Aqui está o fluxo:

// O clique é registrado e o "X" ou "O" é adicionado à célula.
// A função verificarVitoria(classeAd) é chamada para checar se a jogada resultou em vitória.
// Se houver vitória (vitoria for true), a função encerrarJogo(false) é chamada e o jogo é finalizado, não acontecendo mais nada após isso (o código não chega a executar trocarJogador()).
// Se não houver vitória (vitoria for false), a função trocarJogador() é chamada para alternar entre os jogadores.
// Então, o trocarJogador() só é chamado se não houver um vencedor.
// const trocarJogador = () =>{
//     vezCirculo = !vezCirculo;
//     tabuleiro.classList.remove("o","x");
    
//     if(vezCirculo){
//         tabuleiro.classList.add("o");
//     }else{
//         tabuleiro.classList.add("x");
//     }

// }
// A função trocarJogador serve para alternar entre os jogadores "X" e "O" e atualizar a classe do tabuleiro. Aqui está o que ela faz:

// Alterna o valor de vezCirculo:

// vezCirculo = !vezCirculo: Se vezCirculo for false (jogador "X"), se torna true (jogador "O"). Se for true (jogador "O"), se torna false (jogador "X").
// Remove as classes "o" e "x" do tabuleiro:

// tabuleiro.classList.remove("o", "x"): Antes de adicionar a classe do próximo jogador, removemos qualquer classe existente do tabuleiro (que pode ser "o" ou "x").
// Adiciona a classe do jogador atual ao tabuleiro:

// Se vezCirculo for true, adiciona a classe "o" (indicando que o jogador "O" joga agora).
// Se vezCirculo for false, adiciona a classe "x" (indicando que o jogador "X" joga agora).
// Essa função mantém o controle de qual jogador está em turno e altera a aparência do tabuleiro conforme o jogador ativo.


// Ao começar o jogo (quando você chama comecaJogo() pela primeira vez), a função configura os addEventListener nas células com { once: true }. Isso permite que as células sejam clicadas apenas uma vez.

// Quando o jogo é reiniciado com a função reiniciar(), as células já não têm os addEventListener porque o { once: true } removeu os eventos após a primeira jogada.

// Ao reiniciar o jogo, você chama novamente comecaJogo(). Isso reconfigura os event listeners nas células, permitindo que o jogo continue, e as células voltem a ser clicadas novamente.












// O classList é uma propriedade dos elementos DOM que fornece uma maneira de manipular as classes CSS de um elemento. Ele permite adicionar, remover e verificar as classes de um elemento de forma fácil e eficiente.

// Aqui estão algumas das principais operações que você pode realizar com classList:

// add(className): Adiciona uma ou mais classes ao elemento.

// Exemplo: element.classList.add("x") adiciona a classe x ao elemento.
// remove(className): Remove uma ou mais classes do elemento.

// Exemplo: element.classList.remove("x") remove a classe x.
// toggle(className): Alterna entre adicionar e remover uma classe. Se a classe já estiver no elemento, ela é removida; se não estiver, ela é adicionada.

// Exemplo: element.classList.toggle("active") alterna a classe active.
// contains(className): Verifica se o elemento tem uma classe específica.

// Exemplo: element.classList.contains("x") retorna true se o elemento tiver a classe x.
// replace(oldClass, newClass): Substitui uma classe por outra.

// Exemplo: element.classList.replace("old", "new") substitui a classe old pela classe new.
// O classList é muito útil porque permite manipular as classes de forma mais eficiente do que usando className diretamente, especialmente ao lidar com várias classes ou verificações.
// De maneira resumida:
// - **`add(className)`**: Adiciona uma classe.
// - **`remove(className)`**: Remove uma classe.
// - **`toggle(className)`**: Alterna entre adicionar e remover a classe.
// - **`contains(className)`**: Verifica se a classe existe no elemento.
// - **`replace(oldClass, newClass)`**: Substitui uma classe por outra.

// Some:
// O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
// some() executa a função callback uma vez para cada elemento presente no array até achar um onde o callback retorne um valor true. Se em qualquer dos elementos o valor for encontrado, some() imediatamente retorna true. Caso contrario, some() retorna false. callback é invocado somente para índices do array que contenham valor definido; não é invocado para índices que foram deletados ou os quais nunca tiveram valor definido.