
//Js assíncrono:
//ele leva um tempo para ser executado, e pode ou não ser bem sucedido.
//ex: chamadas para APIs,interações com banco de dados.
//três maneiras de lidar com isso:
//callbacks, promises, promises com Async/Await.


const promises = new Promise((resolve,reject) =>{
    const nome = "Mircos";

    if(nome === "Mircos"){
        resolve("Usuario Mircos encontrado!");
    }else{
        reject("O usuario Mircos não foi encontrado!");
    }
})

promises.then((dados) => {
    console.log(dados);
})

//encadeamento de then's
const promises1 = new Promise((resolve,reject) =>{
    const nome = "Mircos";

    if(nome === "Mircos"){
        resolve("Usuario Mircos encontrado!");
    }else{
        reject("O usuario Mircos não foi encontrado!");
    }
})

promises1.then((dados) => {
    return dados.toUpperCase()
}).then((novaString) => {
    console.log(novaString);
})
//retorno do cacht

const promises2 = new Promise((resolve,reject) =>{
    const nome = "Marcos";

    if(nome === "Mircos"){
        resolve("Usuario Mircos encontrado!");
    }else{
        reject("O usuario Mircos não foi encontrado!");
    }
})

promises2.then((dados) => {
    console.log(dados);
}).catch((erro) =>{
    console.log('Erro: ' + erro);
})

//resolver varias promesas de uma vez: todas resolvidas:
 const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve("P1 ok!");
    },2000)
 })

 const p2 = new Promise((resolve,reject) => {
    resolve("P2 ok!");
 })

 const p3 = new Promise((resolve,reject) => {
    resolve("P3 ok!");
 })

const resolveTodas = Promise.all([p1,p2,p3]).then((dados) =>{
    console.log(dados);
})

console.log("Depois do all")

//vqrias promesas com race, a que for resolvida primeiro sera a vencedora e terá o resultado exibido
const p4 = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve("p4 ok!");
    },2010)
 })

 const p5 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p5 ok!");
        },2009)
 })

 const p6 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p6 ok!");
        },2008)
 })

const resolveRace = Promise.race([p4,p5,p6]).then((dados) =>{
    console.log(dados);
})

console.log("Depois do all")


//fecth request na apo github
//fecth api

const userName = 'matheusbattisti';

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'aplication/vnd.github.v3+json',
    },
}).then((resposta) => {
    console.log(typeof resposta);
    console.log(resposta);
    return resposta.json()
}).then((dados) => {
    console.log(`O nome do usuario é: ${dados.name}`);
}).catch((erro) => {
    console.log(`erro: ${erro}`);
})
