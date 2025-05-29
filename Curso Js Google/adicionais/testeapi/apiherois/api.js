let texto = document.getElementById('cxtexto');
const divPrincipal = document.getElementById("principal");
const divSegunda = document.getElementById("resultado");
const divSugestoes = document.getElementById("sugestao");
// let texto = "thor";
console.log(texto);

let herois = [];

async function buscarHerois () {
    try{
        divSegunda.innerHTML ="";
        //requisição para a api 
        const busca = await fetch("https://akabab.github.io/superhero-api/api/all.json");
        //converte a resposta para um  json
        herois = await busca.json();
       
        //imprime
        // console.log(respostas);

        
    }catch(erro){
        //em caso de erro na requisição, imprime uma mensagem de erro;
        console.log(`erro na requisição da api: ${erro}`);
    }
        }



        function mostrarSugestoes(){
            const letra = texto.value.toLowerCase();
            divSugestoes.innerHTML ="";


            if(!letra) return;

            const filtar = herois.filter((l) => {
                return l.name.toLowerCase().includes(letra)
            }).slice(0,10);

            filtar.forEach(l => {
                const sugestao = document.createElement("div");
                sugestao.textContent = l.name;
                sugestao.onclick= () => {
                    texto.value = l.name;
                    divSugestoes.innerHTML = "";
                    procurarHeroi(l);
                }
                divSugestoes.appendChild(sugestao);
                
            });
            }


        function procurarHeroi(){
            const busca = herois.find((heroi) => {
            return heroi.name.toLowerCase() === texto.value.toLowerCase();
         })
         if(busca){
             console.log("heroi encontrado", busca);

             mostrarHeroi(busca)
              
         }else{
             console.log("heroi não encontrado!");
         }
        }

        const mostrarHeroi = (procurarHeroi) => {
            divSegunda.innerHTML = "";
            const nome = document.createElement("h1");
             nome.textContent = procurarHeroi.name;
             divSegunda.appendChild(nome);
 
             const foto = document.createElement("img");
             foto.src = procurarHeroi.images.md;
             divSegunda.appendChild(foto);
 
             const detalhes = document.createElement("p");
             detalhes.innerHTML =
              `<div id="segunda">
                  <div id="cont1">
                      <h2>Biografia:</h2>
                      <strong>Nomec completo:</strong>:
                      ${procurarHeroi.biography.fullName}<br>
                      <strong>Alterego:</strong>:
                      ${procurarHeroi.biography.alterEgos}<br>
                      <strong>Primeira aparição:</strong>:
                      ${procurarHeroi.biography.firstAppearance};<br>
                      <strong>Local de trabalho:</strong>:
                      ${procurarHeroi.work.occupation};<br>
                  </div>
 
                  <div id="cont2">
                      <h2>Estatisticas de Poder </h2>
                      <strong>Inteligencia:</strong>:
                      ${procurarHeroi.powerstats.intelligence};<br>
                      <strong>Força:</strong>:
                      ${procurarHeroi.powerstats.strength};<br>
                      <strong>Velocidade:</strong>:
                      ${procurarHeroi.powerstats.speed};<br>
                      <strong>Poder:</strong>:
                      ${procurarHeroi.powerstats.power}<br>
                      <strong>Combate:</strong>:
                      ${procurarHeroi.powerstats.combat}<br>
                  </div>
 
                  </div>`;
                              divSegunda.appendChild(detalhes);
        }

         
buscarHerois();






// fetch("https://akabab.github.io/superhero-api/api/all.json"): Faz a requisição para o endpoint da API que retorna todos os heróis.

// await busca.json(): Aguarda a resposta da API e converte os dados da resposta em formato JSON.

// console.log(respostas): Imprime no console a lista de todos os heróis, que será um array de objetos, com cada objeto representando um herói e suas propriedades (como name, image, powerstats, etc.).

// catch(erro): Em caso de erro (ex: problemas de rede ou se a API não estiver disponível), o erro será capturado e impresso no console.


