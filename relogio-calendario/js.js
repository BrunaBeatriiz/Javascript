function relogio(){
    let horas = window.document.getElementById('d1');
    let minutos = window.document.getElementById('d2');
    let segundos = window.document.getElementById('d3');

    let data = window.document.getElementById('data');



    let dataHora = new Date();
    var pegarHoras = dataHora.getHours();
    var pegarMinutos = dataHora.getMinutes();
    var pegarSegundos = dataHora.getSeconds();
//     let dia = dataHora.getDate();
//     let mes = dataHora.getMonth
// ();
//     let ano = dataHora.getFullYear();
    let anoCompleto = dataHora.toLocaleDateString('pt-BR');

    
    if(pegarHoras < 10){
       pegarHoras = '0'+pegarHoras;

       //atribuição, para ser o novo valor da variavel.
    }
    if(pegarMinutos < 10){
       pegarMinutos = '0'+pegarMinutos;
    }
    if(pegarSegundos < 10){
       pegarSegundos = '0'+pegarSegundos;
    }

    horas.textContent = pegarHoras;
    minutos.textContent = pegarMinutos;
    segundos.textContent = pegarSegundos;
    // data.innerText = `${dia} / ${mes} /${ano}`
    data.textContent = anoCompleto;


}

relogio();

setInterval(relogio,1000);
