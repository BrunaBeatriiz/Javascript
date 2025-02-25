function fatorial(n){
    let fat = 1;
    for ( i = 1; i <= n; i++){
        fat *= i 
    }

    return fat;
}

console.log(fatorial(5));