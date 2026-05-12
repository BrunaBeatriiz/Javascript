let numeros = [60,3,1,2,4,71,61,62];;

const sequenciaConsecutiva = () => {
   for(let i = 0; i < numeros.length; i++){
    for(let j = 0 ; j < numeros.length -1 ; j++){
        if(numeros[j]>numeros[j+1]){
            let temp = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] = temp;
        }
    }
   }
   let contador = 1;
   let sequencia = 0;
   for(let i = 0; i<numeros.length; i++){
    
    if(numeros[i]+1=== numeros[i+1]){
        contador++;
        if(contador > sequencia){
            sequencia = contador;
        }
    }else{
        contador = 1;
    }
   }

   console.log(contador);
   console.log(sequencia);

   return numeros;
}

console.log(sequenciaConsecutiva());
