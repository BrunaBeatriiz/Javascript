const x = '';
//false
console.log(!!x);

const y = 0 ;
console.log(!!y);
//false

const a = null;
console.log(!!a);
//false

const b = undefined;
console.log(!!b);
//false

// Inicialização:

// A variável x é inicializada como uma string vazia ('').
// Condicional if:

// A condição dentro do if verifica se x é "truthy" (verdadeiro). No JavaScript, valores como false, 0, '' (string vazia), null, undefined e NaN são considerados "falsy" (falsos).
// Resultado:

// Como x é uma string vazia, a condição if (x) avalia como false, e o bloco de código dentro do if não será executado. Portanto, nada será impresso no console.
// Conclusão
// Esse código não exibirá nada no console porque a condição do if não é satisfeita. Se você quiser que algo seja impresso quando x tiver um valor, deve garantir que x não seja uma string vazia. Por exemplo:

// let x = 'Hello';
// if (x) {
//     console.log(x); // Saída: Hello
// }




