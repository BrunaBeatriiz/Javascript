function calcular(){
    let altura = window.document.getElementById('txtalt');
    let peso = window.document.getElementById('txtpeso');
    var res = document.getElementById('res');
    var resultado = document.getElementById('res2');

    if(altura.value.length == 0 || peso.value.length == 0 ){
        window.alert('[ERRO]')
    }else{
        res.innerHTML = 'Seu imc é :'
        let alt = Number(altura.value);
        let pes = Number(peso.value);

        let imcp =  (pes /(alt *alt));
        
        //res.innerHTML = (`${imcp}`);


        
        let imc =(imcp * 10000).toFixed(2);
        res.innerHTML = (` Seu IMC é : <strong>${imc}</strong>.`);


        if(imc< 18.50){
            resultado.innerHTML = ('Segundo a interpretação do IMC, você esta na faixa do abaixo do normal.')
        }else if (imc > 18.50 && imc < 24.90){
            resultado.innerHTML = ('Segundo a interpretação do IMC, você esta na faixa normal.')
        }else if(imc > 24.90 && imc < 29.90){
            resultado.innerHTML = ('Segundo a interpretação do IMC, você esta na faixa do sobrepeso.')
        }else if (imc > 29.91 && imc < 34.90){
            resultado.innerHTML = ('Segundo a interpretação do IMC, você esta na faixa da obesidade grau I.')
        }else if(imc > 35.00 && imc < 39.90){
            resultado.innerHTML = ('Segundo a interpretação do IMC, você esta na faixa da obesidade grau II.')
        }else{
            resultado.innerHTML = ('Segundo a interpretação do IMC, você esta na faixa da obesidade grau III.')
        }



    }

}