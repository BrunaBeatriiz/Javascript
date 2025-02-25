var idade = 0;
console.log(`Você tem ${idade} anos, portanto:`)
if(idade < 16){
    console.log('Você é menor de idade, mas, não vota!');
}else if(idade < 18){
        console.log('Você é menor de idade, portanto, seu voto é opcional!');
}else if(idade > 18 && idade < 65){
    console.log('Você é maior de idade, e seu voto é obrigatório!')
}else {
    console.log('Você é maior de idade, porém, seu voto não é obrigatório!');
}