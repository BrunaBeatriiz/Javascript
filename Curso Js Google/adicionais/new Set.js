const jogador = ['Alisson','Salah','Virgil','MacAlister','Konate','Trent','Alisson','Konate','Virgil','Salah'];
const newJogador = new Set(jogador);
console.log(newJogador);

let contador = 0;
for(i = 0; i<jogador.length;i++){
    contador += 1;
};

console.log(contador);
let has = newJogador.has('Alisson');
console.log(has);
// console.log(jogador);


const frutas = ['abacaxi', 'abacate', 'amora', 'banana', 'buriti', 'caju', 'carambola', 'cacau' ,'damasco','figo','framboesa', 'goiaba', 'graviola', 'groselha','abacaxi','abacate','buriti', 'caju', 'carambola', 'cacau' ,'damasco','figo','framboesa', 'goiaba', 'graviola', 'groselha','abacaxi','abacate',];

let cont = 0;
for (i = 0; i < frutas.length; i++){
    cont += 1;
};


console.log(cont);

let newFruta = new Set (frutas);
console.log(newFruta);
// let newAF = Array.from(newFruta);
// console.log(newAF);

// let cont1 = 0;
// for (i = 0; i < newAF.length; i++){
//     cont1 += 1;
// };

// console.log(cont1);

newFruta.add('Uva');
newFruta.add('Limão');
newFruta.add('banana');
newFruta.delete('caju');

console.log(newFruta);

const novo = [1,2,3,3,4,1,2];
const newNovo = new Set (novo);
console.log(newNovo);
newNovo.clear();
console.log(newNovo);
