let nome = 'bruna';
let novoNome = '';
let tamanho = 20;

let separado = nome.split("");
//console.log(separado);

function reverse () {
    for(i = 0; i < tamanho; i++){
        const letra = separado.pop();
        if(!letra){
            break;
        }
        novoNome += letra;

    }
    console.log(novoNome)
}
reverse();
