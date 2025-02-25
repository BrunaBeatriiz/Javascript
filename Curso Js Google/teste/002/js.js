function calcular(){
    let nome = window.document.getElementById('txtnome');
    let nota01 = window.document.getElementById('cxnum1');
    let nota02 = window.document.getElementById('cxnum2');
    let res = window.document.getElementById('res');

    let name = nome.value;

    res.innerHTML = `Aluno(a) ${name} teve as notas `

    let n1 = Number(nota01.value);
    let n2 = Number(nota02.value);

    res.innerHTML += `${n1} e ${n2}, com média de:`;

    let media = (n1 + n2) / 2;
    res.innerHTML += `<strong>${media}</strong>.`;

    if( media > 0 && media < 5.99){
        res.innerHTML += `Sua média é insuficinete, você será <strong>reprovado</strong>.`;
    }else if (media >= 6.00 && media < 7.99){
        res.innerHTML += `Você está na <strong>média</strong>, portanto, você irá passar de ano.`;
    }else if (media > 8.00 && media <= 10.00){
        res.innerHTML += `Você está acima da média, e acima dos oito pontos, <strong> PARABÈNS</strong>, você aprovado.`;
    }else{
        res.innerHTML = 'Parece que vocè esqueceu alguns dados, corrija e tente novamente!';
    }
    
}