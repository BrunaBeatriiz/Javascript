const inicio = Date.now();

for(i = 0 ; i < 1000; i++){
    console.log(i);
}console.log('fim');



const fim = Date.now();

console.log(`Tempo de execução ${fim - inicio}ms`);