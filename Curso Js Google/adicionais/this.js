// O this em JavaScript é uma palavra-chave que se refere ao contexto de execução de uma função. O valor de this pode variar dependendo de como uma função é chamada. Aqui estão algumas regras e situações comuns que ajudam a entender seu comportamento:

// 1. No contexto global
// No escopo global, this se refere ao objeto global. Em um navegador, isso é o objeto window.


// console.log(this); // No navegador, isso será o objeto `window`
// 2. Dentro de uma função regular
// Quando uma função é chamada, this se refere ao objeto que a chamou. Se a função for chamada no contexto global, this será o objeto global.


// function mostrarThis() {
//     console.log(this);
// }

// mostrarThis(); // No navegador, isso será o objeto `window`
// Se a função for chamada como um método de um objeto, this se referirá a esse objeto.


// const pessoa = {
//     nome: 'Alice',
//     mostrarNome: function() {
//         console.log(this.nome);
//     }
// };

// pessoa.mostrarNome(); // Saída: Alice
// 3. Dentro de uma função com use strict
// Quando o modo estrito ('use strict') está ativado, this em uma função regular que não é chamada como um método de objeto será undefined.


// 'use strict';

// function mostrarThis() {
//     console.log(this);
// }

// mostrarThis(); // Saída: undefined
// 4. Dentro de uma arrow function
// As arrow functions não têm seu próprio this. Em vez disso, elas herdam this do contexto em que foram definidas.


// const pessoa = {
//     nome: 'Alice',
//     mostrarNome: function() {
//         const mostrar = () => {
//             console.log(this.nome);
//         };
//         mostrar();
//     }
// };

// pessoa.mostrarNome(); // Saída: Alice
// 5. Métodos de objetos
// Quando uma função é chamada como um método de um objeto, this se refere a esse objeto.


// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     mostrarInfo: function() {
//         console.log(`${this.marca} ${this.modelo}`);
//     }
// };

// carro.mostrarInfo(); // Saída: Toyota Corolla
// 6. Com call, apply e bind
// Você pode explicitamente definir o valor de this usando os métodos call(), apply() e bind().

// call(): chama uma função com um valor específico de this.

// function mostrarNome() {
//     console.log(this.nome);
// }

// const pessoa = { nome: 'Alice' };

// mostrarNome.call(pessoa); // Saída: Alice
// apply(): semelhante ao call(), mas aceita um array de argumentos.

// function mostrarNome(sobrenome) {
//     console.log(`${this.nome} ${sobrenome}`);
// }

// const pessoa = { nome: 'Alice' };

// mostrarNome.apply(pessoa, ['Silva']); // Saída: Alice Silva
// bind(): cria uma nova função que, quando chamada, tem this definido para o valor fornecido.

// function mostrarNome() {
//     console.log(this.nome);
// }

// const pessoa = { nome: 'Alice' };
// const mostrar = mostrarNome.bind(pessoa);

// mostrar(); // Saída: Alice
// Resumo
// O this é uma parte fundamental do JavaScript que se refere ao contexto de execução de funções. Entender como ele funciona em diferentes contextos é crucial para escrever código eficaz e evitar erros. Se precisar de mais detalhes ou exemplos específicos, estou aqui para ajudar!