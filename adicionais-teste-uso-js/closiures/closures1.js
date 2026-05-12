function externa() {
    let contador = 0;
    
    return function interna() {
        contador++;
      console.log(contador);
    };
  }
  
  const minhaClosure = externa();
  
  minhaClosure(); // 1
  minhaClosure(); // 2


externa()();






//   Closures são funções que "lembram" o ambiente onde foram criadas, mesmo depois que esse ambiente já terminou de ser executado.

// 💡 Como funciona?
// Quando uma função interna acessa variáveis da função externa, ela cria uma closure.

// A função interna lembra da variável contador, mesmo depois da execução da função externa.

// 🛠️ Pra que serve?
// Encapsulamento de dados

// Criar funções com estado

// Técnicas como currying, funções fábricas etc.

// !


// nao posso apenas declarar console,log(externa())? e os dois minhaClosure é so ela sendo executada duas vezes


// Ótima pergunta! Vamos por partes:

// 🧪 Sobre console.log(externa())
// Sim, você pode fazer isso:


// console.log(externa());
// Mas olha o que acontece:

// externa() retorna uma função, lembra? Então você verá algo assim no console:


// ƒ interna() {
//   contador++;
//   console.log(contador);
// }
// Ou seja, você só vai ver a função, não o resultado da execução dela.

// Se quiser executar a função retornada diretamente, teria que fazer:

// externa()(); // Isso executa a função retornada
// 🔁 Sobre os dois minhaClosure()
// Exatamente! Você está chamando a mesma função retornada duas vezes:


// const minhaClosure = externa(); // Cria uma closure com contador = 0

// minhaClosure(); // contador vira 1
// minhaClosure(); // contador vira 2
// A função interna mantém o valor de contador porque ela fecha (closes) sobre ele — por isso o nome closure. Esse estado persiste entre as chamadas.

// Se ainda estiver meio confuso, posso quebrar em partes visuais ou até animar o fluxo com comentários no código. Quer?


// ela retorna pq dentro dela a outra função? e eu precisaria de dois () para chamar a função interna? 


// Sim, exatamente:

// ✅ Ela retorna a função interna porque dentro de externa() tem um return function interna() { ... }.

// ✅ Se quiser executar a interna direto, usa dois parênteses:


// externa()(); // Primeiro chama externa, depois a função que ela retorna


