let array = [];
let num = document.getElementById('inum');
let res  = document.getElementById('res');
let resultado  = document.getElementById('resultado');
// let buttom = document.querySelector('button#bverificar');
// let select = document.querySelector('select#select')

// num.addEventListener('keypress', function (event){
//     if(event.key === 'Enter'){
        
        
//     }
// })

function inserir(){

    // num.addEventListener('keypress',function(event){
    //     if (event.key === 'Enter'){
    //         event.preventDefault();
    //     }
    // })

    let n =  (num.value);
    if(num.value.length == 0){
        window.alert('Para continuar digite um número!');

    }else if(array.indexOf(n) > -1){
         window.alert(`Este número já foi adiocionado!`);
                                                                                 
    }else if(n < 0  || n > 100){
        window.alert(':(, digite um número entre 0 e 100, para continuar!');

    }else{
        array.push(n);
        // let item = document.createElement('option');
        // item.text = `Valor ${n} adicionado.`;
        // select.appendChild(item);

        // res.innerHTML = `Os números adicionados foi:<br>`

        // for(i = 0; i < array.length ; i++){

        //     res.innerHTML += `${array[i]} </br>`
        // }

        if(array.length == 1){
            res.innerHTML = `O número adicionado foi:<br>`;

            for(i = 0; i < array.length ; i++){

                res.innerHTML += `${array[i]}. </br>`;
                
            }
        }else{
            res.innerHTML = `Os números adicionados foram:<br>`;

            for(i = 0; i < array.length ; i++){

                res.innerHTML += `${array[i]},`;
            }
        }

    }

    
}

function verificar(n){
    if(num.value.length == 0){
        resultado.innerHTML = `[ERRO], por favor digite um número para análise.`;
    }else{
        for (i = 0; i <= array.length; i++){

            if(i == 1){
                resultado.innerHTML = `<br>Você digitou ${i} elemento.<br>`;
            }else{
                resultado.innerHTML = `<br>Ao todo são: ${i} elementos.<br>`;
            }
        }
    
        let ordem = array.sort((a, b) => a - b);
        resultado.innerHTML += `<br> Os numéros em <strong>ordem crescente</strong> são : ${ordem}.<br>`;

        let ordemd = array.sort((a, b) => b - a);
        resultado.innerHTML += `<br> Os numéros em <strong>ordem decrescente</strong> são : ${ordemd}.<br>`;
    
        let primeiro = array[0];
        resultado.innerHTML += `<br> O <strong>menor</strong> número é : ${primeiro}.<br>`;
    
        let last = array.length-1;
        let ultimo = array[last];
        resultado.innerHTML += `<br> O <strong>maior</strong> número é : ${ultimo}.<br>`;
    
        let soma = 0;
    
        for (let i in array){
            
            soma += Number(array[i]);
        }
    
        resultado.innerHTML += `<br> A <strong>soma</strong> dos números é : ${soma}.<br>`;
    
    
        let media = soma / (array.length);
        resultado.innerHTML += `<br> A <strong>média</strong> dos números é : ${media}.<br>`;
    }
    

    


}