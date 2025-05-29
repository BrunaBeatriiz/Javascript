

function imprimirArray(array){
    console.log("[" + array.join(", ") + "]");
}

function shellSort(array){
	let i, j, valor;
	let gap = 1;
	
	do{
		gap = 3 * gap + 1;
	}while(gap < array.length);
	
	
	do{
        gap = Math.floor(gap / 3); 
		
		for (i = gap; i < array.length; i++){
			valor = array[i];
			j = i - gap;
			
			while(j >= 0 && valor < array[j]){
				array[j + gap] = array[j]; 
				j -= gap;
			}
			
			array[j+gap] = valor;
		}
		
	}while(gap > 1);
		
}



function principal () {
    let array = [35,67,43,12,144,98,87,54,2];

    console.log("este é seu array antes da ordenação:")
    imprimirArray(array);


    shellSort(array);


    console.log("este é seu array após a ordenação:")
    imprimirArray(array);

}

principal();