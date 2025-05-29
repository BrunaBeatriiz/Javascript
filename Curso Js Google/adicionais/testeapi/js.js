// fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((respostas)=>
//     respostas.json()).then((dados) => {
//     console.log(dados);
// }).catch((erro)=> {
//     console.log(`erro: ${erro}`);
// })

//parametros de Url;
// https://api.com/recurso?chave1=valor1&chave2=valor2
// O ? inicia os parâmetros.

// Os parâmetros são separados por &.
// Por que com underline (_)?
// O underline evita conflito com nomes normais de campos (como title, id, etc).

// Indica que são parâmetros de controle da API, e não filtros por dados reais.
let lista = window.document.getElementById("lista");

const userId =4;
const limite = 5; 
async function buscarTarefas() {
    try{
        // const respostas = await fetch("https://jsonplaceholder.typicode.com/todos?userId=3&_limit=10");
        const respostas = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}&_limit=${limite}&_sort=id&_order=asc`);
        const dados = await respostas.json();
        console.log(dados);
        dados.map((tarefa) => {
            const item = document.createElement("li");
            item.textContent=`${tarefa.title}`;
            lista.appendChild(item);
        })



    }catch(erro){
        console.log(`Erro ao buscar os dados: ${erro}`)
    }
}

buscarTarefas();




// dados.forEach((tarefa) => {
//     const item = document.createElement("li");

//     // Cria o checkbox
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";

//     // Você pode marcar como completo se a tarefa já estiver concluída
//     checkbox.checked = tarefa.completed; // Se a API fornece isso

//     // Adiciona evento: riscar o texto quando marcado
//     checkbox.addEventListener("change", () => {
//         if (checkbox.checked) {
//             item.style.textDecoration = "line-through";
//         } else {
//             item.style.textDecoration = "none";
//         }
//     });

//     // Cria o texto da tarefa
//     const texto = document.createTextNode(` ${tarefa.title}`);

//     // Adiciona o checkbox e o texto ao item
//     item.appendChild(checkbox);
//     item.appendChild(texto);

//     // Adiciona o item à lista
//     lista.appendChild(item);
// });
