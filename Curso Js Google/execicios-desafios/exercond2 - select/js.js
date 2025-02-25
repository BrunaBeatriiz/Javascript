function calcular(){
    var num = document.getElementById('txtnum');
    let res =document.getElementById('select');

    res.innerHTML = `<h2> Tabuada do número ${num} é:</h2>`;

    if(num.value.length == 0){
        window.alert('[ERRO], digite um número para continuar!')
    }else{
        let n = Number(num.value);
        res.innerHTML = '';

        for (i = 0; i <= 10; i++){
            let vezes = n* i;
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${vezes}`;
            item.value = `tab${i}`;
            res.appendChild(item);
        }
    }

    
}