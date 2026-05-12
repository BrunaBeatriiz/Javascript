const animais = [
    "cachorro","gato","elefante","leão","tigre","macaco","girafa","coelho","urso","zebra",
    "cavalo","rato","hipopótamo","jacaré","pinguim","camelo","tartaruga","golfinho","foca","abelha",
    "borboleta","crocodilo","lobo","raposa","rinoceronte","onça","panda","veado","touro","galinha",
    "galo","águia","coruja","caracol","formiga"
  ];
  
  const comidas = [
    "pizza","hamburguer","bolo","lasanha","sushi","macarrão","churrasco","sorvete","torta","pão",
    "arroz","feijão","chocolate","salada","creme","café","batata","queijo","manteiga","coxinha",
    "pastel","tapioca","panqueca","brigadeiro","mousse","omelete","molho","abacate","uva","maçã",
    "banana","melancia","morango","abacaxi","cenoura"
  ];
  
  const objetos = [
    "cadeira","mesa","computador","caneta","livro","celular","copo","geladeira","telefone","sofá",
    "lâmpada","teclado","mochila","relógio","porta","janela","televisão","prato","faca","garfo",
    "colher","pincel","martelo","óculos","controle","mouse","escova","lençol","travesseiro","cadeado",
    "pente","tapete","abajur","armário","carteira"
  ];
  
  const cores = [
    "azul","verde","vermelho","amarelo","roxo","laranja","rosa","preto","branco","cinza",
    "marrom","bege","turquesa","violeta","dourado","prata","creme","caramelo","vinho","lilás",
    "lavanda","salmon","ciano","carmesim","magenta","jade","pêssego","terracota","aqua","mostarda",
    "bronze","púrpura","menta","azul-marinho","esmeralda"
  ];
  
  const paises = [
    "brasil","argentina","chile","peru","méxico","canadá","estados unidos","portugal","espanha","frança",
    "alemanha","itália","inglaterra","japão","china","rússia","índia","austrália","egito","áfrica do sul",
    "suécia","noruega","holanda","suiça","grécia","turquia","cuba","colômbia","uruguai","venezuela",
    "polônia","ucrânia","croácia","finlândia","irlanda"
  ];
  
  const profissoes = [
    "médico","professor","engenheiro","advogado","policial","bombeiro","enfermeiro","dentista","piloto","cantor",
    "ator","motorista","cozinheiro","garçom","jornalista","designer","programador","psicólogo","arquiteto","artista",
    "bibliotecário","vendedor","mecânico","veterinário","costureira","eletricista","pedreiro","bancário","fotógrafo","padeiro",
    "barbeiro","jardineiro","professor de dança","marceneiro","instrutor"
  ];
  
  const lugares = [
    "escola","igreja","praia","parque","hospital","biblioteca","supermercado","cinema","restaurante","loja",
    "padaria","aeroporto","rodoviária","farmácia","estádio","teatro","museu","hotel","delegacia","universidade",
    "cachoeira","praça","zoológico","shopping","montanha","posto","porto","mercado","fazenda","floresta",
    "rio","lago","ilha","academia","castelo"
  ];

  const palavrasComplexas = [
    "onomatopeia","proparoxítono","hipopotomonstrosesquipedaliofobia","anticonstitucionalissimamente","paralelepípedo","inconstitucionalidade","extraterrestre","incompreensível","subterrâneo","interdisciplinar","desoxirribonucleico","otorrinolaringologista","psicossomático","contrarrevolução","desencadeamento","internacionalização","bibliotecário","incompatibilidade","autossuficiente","resplandecente","transcendental","heterossexual","microorganismo","desproporcional","reconhecimento","inquestionável","hiperatividade","cinematográfico","desestabilização","ininterruptamente","irreversibilidade","microcomputador","desnecessariamente","inconstitucional","antropomórfico","subdesenvolvimento"
  ];
  

let palavraVista = document.getElementById("palavra");
let letrasPalavraOriginal = [];
let estado = []; //remete a palavra que está sendo mostrada ao jogador, [---a--a];
let letrasDigitadas = [];
let jogoIniciado = false;

// Captura teclas no input
// document.getElementById("letra").addEventListener("keydown", function(event) {
//     if(event.key.length === 1 && event.key.match(/[a-zA-Z]/)) { // apenas letras
//         document.getElementById("letra").value = event.key.toLowerCase(); // coloca no input
//         verificar(); // chama a função de verificar automaticamente
//         event.preventDefault(); // evita que a letra apareça duas vezes
//     } else if(event.key === "Enter") {
//         verificar(); // Enter também verifica
//         event.preventDefault();
//     }
// });


// Função para iniciar o jogo
function iniciarJogo() {
   letrasDigitadas =[];
   document.getElementById("historico").innerText = "";
    let select = document.getElementById("categoria");
    let categoriaEscolhida = select.value;
    let arrayEscolhido;

    switch(categoriaEscolhida){
        case "animais":
            arrayEscolhido = animais;
            break;
        case "comidas":
            arrayEscolhido = comidas;
            break;
        case "objetos":
            arrayEscolhido = objetos;
            break;
        case "cores":
            arrayEscolhido = cores;
            break;
        case "profissoes":
            arrayEscolhido = profissoes;
            break;
        case "lugares":
            arrayEscolhido = lugares;
            break;
        case "paises":
            arrayEscolhido = paises;
            break;
        case "palavrasComplexas":
            arrayEscolhido = palavrasComplexas;
            break;
        default:
            alert("Escolha uma categoria para iniciar o jogo!");
            return;
    }

    let palavra = palavraEscolhida(arrayEscolhido);
    letrasPalavraOriginal = palavra.split("");
    estado = Array.from(palavra, () => "-");

    palavraVista.innerText = estado.join(" ");
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
    jogoIniciado = true;
   
}

// Função para escolher a palavra aleatória
function palavraEscolhida(arrayEscolhido) {
    const numeroSorteado = Math.floor(Math.random() * arrayEscolhido.length);
    return arrayEscolhido[numeroSorteado];
}

// Função para verificar letra
const verificar = () => {
    if(!jogoIniciado){
        alert("Clique em 'Iniciar' antes de verificar letras!");
        return;
    }

    let letraInput = document.getElementById("letra").value.toLowerCase();

    if(letraInput.length !== 1){
        alert("Digite apenas uma letra!");
        document.getElementById("letra").value = "";
        return;
    }

    if(!letrasDigitadas.includes(letraInput)){
        letrasDigitadas.push(letraInput);
    }

    let letraEncontrada = false;
    letrasPalavraOriginal.forEach((letraAtual, indice) => {
        if(letraAtual === letraInput){
            estado[indice] = letraInput;
            letraEncontrada = true;
        }
    });

    palavraVista.innerText = estado.join(" ");
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
    document.getElementById("historico").innerText = letrasDigitadas.join(",");

    if(!estado.includes("-")){
        alert("Parabéns! Você acertou a palavra!");
        jogoIniciado = false;
    } else if(!letraEncontrada){
        console.log("Letra incorreta:", letraInput);
    }
};

