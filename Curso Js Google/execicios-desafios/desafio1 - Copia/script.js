function verificar(){
    var data = new Date();
    var ano = data.getFullYear();

    var cxano = window.document.getElementById('iano');
    var resultado = document.getElementById('res');

    if(cxano.value.length == 0 || cxano.value > ano){
        window.alert('[ERRO]');
    }else{
       var cxsexo = document.getElementsByName('csexo');
       var idade = ano - Number(cxano.value);

       var genero = '';

       var img = document.createElement('img');
       img.setAttribute('id', 'foto');

       var imagem = document.getElementsByTagName('foto');

       var texto = document.getElementById('texto');

       if (cxsexo[0].checked){
        genero = 'mulher';


            if(idade > 0 && idade <= 10){
            img.setAttribute('src', `img/c.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah :), você ainda é uma <strong>criança</strong>, aproveite sua infância!');
           }else if(idade < 21){
            img.setAttribute('src', `img/J.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah, você é um <strong>adolescente</strong>, aproveite sua juventude!');
           }else if(idade < 60){
            img.setAttribute('src', `img/A.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah, você é um <strong>adulto</strong>, aproveite sua jornada!');
           }else{
            img.setAttribute('src', `img/I.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah :), você é um <strong>idoso</strong>, aproveite os melhores anos!');
           }
       }else{
        genero = 'homem';
           if(idade > 0 && idade <= 10){
            img.setAttribute('src', `img/c.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah :), você ainda é uma <strong>criança</strong>, aproveite sua infância!');
           }else if(idade < 21){
            img.setAttribute('src', `img/hj.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah, você é um <strong>adolescente</strong>, aproveite sua juventude!');
           }else if(idade < 60){
            img.setAttribute('src', `img/ha.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah, você é um <strong>adulto</strong>, aproveite sua jornada!');
           }else{
            img.setAttribute('src', `img/hi.jpg`);
            texto.style.textAlign = 'center';
            texto.innerHTML = ('Ah :), você é um <strong>idoso</strong>, aproveite os melhores anos!');
           }
        }

    
    
        

       }

       resultado.style.textAlign = 'center';
       resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

       resultado.appendChild(img);
       
    }