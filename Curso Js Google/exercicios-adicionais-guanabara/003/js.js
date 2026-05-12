function analisar(){
    var num = Number(window.document.getElementById('inum').value);
    let res = document.getElementById('res');


    res.innerHTML = `O número ${num} é:`

    let resto = num % 2;

    if(resto == 0){
        res.innerHTML += `<strong> PAR </strong>.`
    }else{
        res.innerHTML += `<strong> ÍMPAR </strong>.`
    }
    
}