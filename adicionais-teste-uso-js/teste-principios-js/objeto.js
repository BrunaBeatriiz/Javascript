const pessoa = {
    nome: 'Darwin',
    sobrenome: 'Nunez',
    idade: 24,
    hobbies :['Jogar Futebol', 'Ficar impedido', 'Criar confusão'],
    scoredGoals : {
        goals: 4,
        withLeg: 2,
        headScore: 1,
    },
};


console.log(pessoa.scoredGoals);


const {nome : e,sobrenome,idade,hobbies,scoredGoals: {goals:goal},} = pessoa;


console.log(e);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa.hobbies[1]);

// pessoa.scoredGoals = 4;

console.log(pessoa.scoredGoals.goals);
console.log(goal);


// O destructuring (ou desestruturação) em JavaScript é uma sintaxe que permite extrair valores de arrays ou propriedades de objetos de forma mais concisa e legível. Essa técnica facilita o acesso a valores e a atribuição de variáveis.

// Desestruturação de Arrays
// A desestruturação de arrays permite que você extraia valores de um array e os atribua a variáveis de maneira rápida.

// Exemplo:

// const numeros = [1, 2, 3];

// const [primeiro, segundo, terceiro] = numeros;

// console.log(primeiro); // Saída: 1
// console.log(segundo);  // Saída: 2
// console.log(terceiro); // Saída: 3
// Ignorando Valores
// Você também pode ignorar valores que não precisa:


// const numeros = [1, 2, 3, 4];

// const [primeiro, , terceiro] = numeros;

// console.log(primeiro); // Saída: 1
// console.log(terceiro); // Saída: 3
// Desestruturação de Objetos
// A desestruturação de objetos permite extrair propriedades de um objeto e atribuí-las a variáveis.

// Exemplo:

// const pessoa = {
//   nome: 'Alice',
//   idade: 25,
// };

// const { nome, idade } = pessoa;

// console.log(nome); // Saída: Alice
// console.log(idade); // Saída: 25
// Renomeando Variáveis
// Você pode renomear as variáveis ao desestruturar um objeto:


// const pessoa = {
//   nome: 'Alice',
//   idade: 25,
// };

// const { nome: nomeCompleto, idade: anos } = pessoa;

// console.log(nomeCompleto); // Saída: Alice
// console.log(anos);         // Saída: 25
// Valores Padrão
// Você também pode definir valores padrão para variáveis durante a desestruturação:



// const pessoa = {
//   nome: 'Alice',
// };

// const { nome, idade = 30 } = pessoa;

// console.log(nome); // Saída: Alice
// console.log(idade); // Saída: 30 (valor padrão)
// Desestruturação em Funções
// Você pode usar desestruturação diretamente em parâmetros de funções:


// function mostrarPessoa({ nome, idade }) {
//   console.log(`Nome: ${nome}, Idade: ${idade}`);
// }

// const pessoa = {
//   nome: 'Alice',
//   idade: 25,
// };

// mostrarPessoa(pessoa); // Saída: Nome: Alice, Idade: 25
// Resumo
// A desestruturação é uma técnica poderosa e conveniente em JavaScript que permite acessar e atribuir valores de arrays e objetos de forma mais limpa e concisa. Ela melhora a legibilidade do código e facilita o trabalho com dados complexos.