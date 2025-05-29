const segundaDiv = document.getElementById("segunda");
const botao = document.getElementById("procurar");
botao.disabled = true;
let filmes = [];

async function busca () {
    try{
        const procurar = await fetch("https://ghibliapi.vercel.app/films");
        filmes = await procurar.json()
        console.log(filmes);
        botao.disabled = false;

    }catch(erro){
        console.log(`erro na requisição: ${erro}`);
    }
}

function mostrar () {
    filmes.forEach((filme) => {
        const item = document.createElement("div");
        item.innerHTML = 
        `<h2>${filme.title}</h2>
        <img src = "${filme.image}" alt="${filme.title}">
        <p>${filme.description}</p>`
        segundaDiv.appendChild(item);
    })
}

busca();