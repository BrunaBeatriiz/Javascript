let num = [10,20,30,40,50];
let alvo = 60;
let match = [];
let vistos = {};

function verificar () {
    for(i = 0; i < num.length; i++){
        for (j = i+1; j <= num.length; j++){
            if(num[i] + num[j] === alvo){
                match.push([num[i],num[j]]);
            }
        }
    }
    console.log(match);
}

verificar();