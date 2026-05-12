let simbolos = "{[(]{}";
let pilha = [];

const verificar = () => {
    let simbolosSeparados = simbolos.split("");

    if(simbolosSeparados.length % 2 !== 0){
        console.log("falso.");
        return;
    }else{
        simbolosSeparados.forEach((simbols)=> {
            if(simbols === "{"||simbols === "["||simbols === "("){
                pilha.push(simbols);
            }else{
                let ultimo = pilha[pilha.length - 1];
                if((ultimo === "{" && simbols === "}")||(ultimo === "[" && simbols === "]")||(ultimo === "(" && simbols === ")")){
                    pilha.pop();
                }
            }
        })
    }
    if(pilha.length === 0){
        console.log("Sequencia válida");
    }else{
        console.log("Sequencia falsa.")
    }
}
verificar();