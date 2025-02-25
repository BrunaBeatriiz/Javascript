function carregar(){
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    var msg =window.document.getElementById('msg');
    var foto = window.document.getElementById('imagem');

    var m = window.document.getElementById('msgs');


    msg.innerHTML=`Agora são ${hora}:${minuto}:${segundo} horas.`;

    if(hora >= 6 && hora < 12 ){
        foto.src = 'img/amanhecer.jpg';
        document.body.style.background ='#FCFE76';
        m.innerHTML= 'Estamos no <strong>nascer do sol</strong>.';
        
    }else if(hora >= 12 && hora < 18){
        foto.src = 'img/tarde.jpg';
        document.body.style.background ='#FC3B00';
        m.innerHTML = 'Estamos no <strong>meio do dia</strong>!.';

    }else if (hora >= 18 && hora < 24){
        foto.src = 'img/noite.jpg';
        document.body.style.background ='#264F73';
        m.innerHTML = 'Estamos no <strong>pôr do sol</strong>!.';
    }else{
        foto.src = 'img/noite3.jpg';
        document.body.style.background ='rgb(13, 13, 37)';
        m.innerHTML = 'Estamos na <strong>madrugada</strong>.';
}
}