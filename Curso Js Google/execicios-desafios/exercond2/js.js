function calcular(){
    var num = Number(document.getElementById('txtnum').value);
    let res =document.getElementById('res');

    res.innerHTML = `<h2> Tabuada do número ${num} é:</h2>`;

    for (i = 0; i <= 10; i++){
        let vezes = num * i;
        res.innerHTML += `${num} x ${i} =  ${vezes}. <br>`;
       
    }
}