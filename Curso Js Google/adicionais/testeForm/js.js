const button = window.document.getElementById('button');
const inputname = document.getElementById('iname');
const inputEmail = document.getElementById('iemail');
const form = document.getElementById('form');
const lista = document.querySelector('#items');
const body = document.querySelector('body');
const msg = window.document.getElementById('msg');
const h1 = document.getElementById('tituloPrincipal');

button.addEventListener('click', function(event){
    event.preventDefault();
    button.style.background= 'lightgray' ;
    button.style.color= 'black' ;

    const valorName = inputname.value;
    console.log(valorName);
    const valorEmail = inputEmail.value;
    console.log(valorEmail);

    if(inputEmail.value.length === 0 || inputname.value.length === 0){
      msg.innerHTML = 'nome ou email vazios ou incompletos.';

      setTimeout(() =>{
        msg.innerHTML = '';
      },3000)
      //funciona para classe:
      //msg.classList = '';

    //       setTimeout para limpar o conteúdo de um elemento chamado msg após um atraso de 3 segundos (3000 milissegundos). 

    // setTimeout(): Essa função executa um código (ou uma função) após um determinado intervalo de tempo. No seu caso, você está passando uma função de seta (arrow function) como primeiro argumento.

    // () => { msg.innerHTML = ''; }: Esta é a função que será executada após o atraso. Quando chamada, ela define o conteúdo HTML do elemento msg como uma string vazia, ou seja, limpa o conteúdo exibido.

    // 3000: Este é o tempo em milissegundos que o setTimeout deve esperar antes de executar a função. Neste caso, 3000 milissegundos correspondem a 3 segundos.

    // Como Funciona:
    // Quando você chama setTimeout, o código continua a ser executado normalmente.
    // Após 3 segundos, a função que você definiu é chamada e limpa o conteúdo do elemento msg.

    //       return;
    //   msg.classList = "msgg";
    // direciona a uma CLASS no css;
    }

    form.style.background = 'white';
    h1.remove();
    
    var date = new Date();
    const data = date.getFullYear();

    const li = document.createElement('li');
    li.classList = 'item';
    li.innerHTML = `Seu nome é ${valorName}.`;
    lista.appendChild(li);

    const li1 = document.createElement('li');
    li1.classList = 'item';
    li1.innerHTML = `Seu email é ${valorEmail}.`;
    lista.appendChild(li1);

    const li2 = document.createElement('li');
    li2.classList = 'item';
    li2.innerHTML = `Estamos no ano de: ${data}.`;

    lista.appendChild(li2);


    //adiciona um novo filho a lista/dentro do elemento desejado.

    //Para adicionar um id:
    //Para adicionar um ID em um elemento HTML utilizando JavaScript, podemos utilizar a propriedade "id" do elemento:
    //li.id = 'valorId';
    
    // lista.firstElementChild.textContent= `Seu nome é ${valorName}.`;
    // lista.children[1].innerHTML = `Seu email é: ${valorEmail}.`;
    // lista.children[2].innerHTML =`Estamos no ano de: ${data}.
    // `;
    // body.style.background = 'yellow';

    inputname.value = '';
    inputEmail.value = '';

})

// inputname.addEventListener("change", function(event){
//     console.log(event.target.value);
// });


// 1. O que é button.addEventListener?
// Copiar código
// button.addEventListener('click', function(event) {
// button: Presumivelmente, essa variável se refere a um elemento de botão na sua página HTML. Esse elemento deve ter sido selecionado anteriormente no seu código, usando algo como document.getElementById ou document.querySelector.
// addEventListener: Este método adiciona um "ouvinte" de eventos ao elemento. No caso, estamos ouvindo o evento de clique ('click').
// function(event): Essa é uma função anônima (ou callback) que será executada quando o botão for clicado. O parâmetro event representa o objeto do evento que foi disparado, que contém informações sobre o evento.
// 2. O que faz event.preventDefault()?

// event.preventDefault();
// Este método é usado para prevenir o comportamento padrão do evento que ocorreu. No caso de um botão dentro de um formulário, por exemplo, isso evita que o formulário seja enviado quando o botão é clicado. É útil quando você deseja executar algum código JavaScript sem que a página seja recarregada ou redirecionada.
// 3. O que faz button.style.background = 'blue';?

// button.style.background = 'blue';
// Essa linha altera a propriedade background (fundo) do botão para a cor azul.
// style permite que você manipule diretamente o estilo CSS do elemento através do JavaScript. Aqui, estamos definindo a cor de fundo do botão para azul, o que pode ser uma resposta visual ao clique.
// Resumindo
// O código adiciona um ouvinte ao botão que, ao ser clicado, impede o comportamento padrão do evento (como o envio de um formulário).
// Em seguida, altera a cor de fundo do botão para azul.
// Isso pode ser útil em diversas situações, como quando você deseja criar interações mais dinâmicas em sua página. Se você tiver mais dúvidas ou precisar de mais detalhes, é só avisar!







// O que é o event?
// Quando você adiciona um ouvinte de eventos, como button.addEventListener('click', function(event) {...}), a função que você define (neste caso, a função anônima) é chamada automaticamente quando o evento ocorre. O parâmetro event é um objeto que contém informações sobre esse evento específico.

// O que está incluído no objeto event?
// O objeto event contém várias propriedades e métodos que fornecem detalhes sobre o evento. Aqui estão algumas das propriedades mais comuns:

// event.type:

// Indica o tipo do evento que ocorreu (por exemplo, 'click', 'keydown', etc.).
// event.target:

// Refere-se ao elemento que disparou o evento. Por exemplo, se você clicou em um botão, event.target seria esse botão.
// event.preventDefault():

// Como você viu no seu código, esse método é usado para evitar o comportamento padrão do evento. Isso é útil, por exemplo, para evitar que um formulário seja enviado quando um botão é clicado.
// event.stopPropagation():

// Impede que o evento "buble" (suba) para os elementos pai. Isso pode ser útil se você tiver vários ouvintes de eventos em diferentes elementos e quiser evitar que eles sejam acionados.
// event.clientX e event.clientY:

// Esses atributos fornecem a posição do cursor do mouse em relação à janela de visualização no momento em que o evento ocorreu.

// Aqui está um exemplo simples que mostra como você pode usar o objeto event:


// button.addEventListener('click', function(event) {
//     console.log('O tipo de evento é:', event.type); // Exibe: 'click'
//     console.log('O elemento clicado é:', event.target); // Exibe o botão
//     event.preventDefault(); // Impede o comportamento padrão, se houver
// });
// Resumindo
// O parâmetro event é fundamental em manipuladores de eventos, pois fornece informações contextuais sobre o evento que ocorreu.
