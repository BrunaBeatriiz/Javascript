let respostas = [];
const resultado = document.getElementById("resultado");


async function buscar () {
    try{
        const busca = await fetch("https://restcountries.com/v3.1/all");
        respostas = await busca.json();
        console.log(respostas);
        mostrar();
    }catch(erro){
        console.log(erro);
    }
}

function mostrar () {
    respostas.forEach((pais) => {
        let div = document.createElement("div");
        const fronteiras =pais.borders? pais.borders.slice(0,3):["Sem fronteiras"] ;
        div.id="pais";
        div.innerHTML = `
        <h2>${pais.name.common}</h2>
        <img src="${pais.flags.svg}">
        <p><strong>Capital</strong>:${pais.capital}</P>
        <p><strong>Continente</strong>:${pais.continents}</P>
        <p><strong>Idioma</strong>:<br>${Object.values(pais.languages || {}).join(",")}</P>
        <p><strong>Fronteiras</strong>:<br>${fronteiras}</P>
        <p><strong>Região</strong>:${pais.region}</P>
        <p><strong>População</strong>:${pais.population}</P>
        `
        resultado.appendChild(div);
    })
}

buscar();