let respostas = [];
const resultado = document.getElementById("resultado");


async function buscar () {
    try{
        const busca = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,continents,languages,borders,region,population"
        );
        respostas = await busca.json();
        console.log(respostas);
        if(Array.isArray(respostas)){
            mostrar();
        }else{
            throw new Error ("respostas inesperada da Api")
        }
    }catch(erro){
        console.log(erro);
    }
}

function mostrar () {
    respostas.forEach((pais) => {
        let div = document.createElement("div");
        const fronteiras =pais.borders? pais.borders.slice(0,3):["Sem fronteiras"] ;
        div.className="pais";
        div.innerHTML = `
        <h2>${pais.name.common}</h2>
        <img src="${pais.flags.svg}">
        <p><strong>Capital</strong>:${pais.capital}</p>
        <p><strong>Continente</strong>:${pais.continents}</p>
        <p><strong>Idioma</strong>:<br>${Object.values(pais.languages || {}).join(",")}</p>
        <p><strong>Fronteiras</strong>:<br>${fronteiras}</p>
        <p><strong>Região</strong>:${pais.region}</p>
        <p><strong>População</strong>:${pais.population}</p>
        `
        resultado.appendChild(div);
    })
}

buscar();