function somar(){
    

    let num1 = Number(window.document.getElementById('num1').value);
    let num2 = Number(window.document.getElementById('num2').value);
    let res = window.document.getElementById('res');
    let soma = num1 + num2;
    res.innerHTML += `<strong>${soma}</strong>`;
}

function menos(){
    

    let num1 = Number(window.document.getElementById('num1').value);
    let num2 = Number(window.document.getElementById('num2').value);
    let res = window.document.getElementById('res');
    let sub = num1 - num2;
    res.innerHTML += `<strong>${sub}</strong>`;
}
function vezes(){
    

    let num1 = Number(window.document.getElementById('num1').value);
    let num2 = Number(window.document.getElementById('num2').value);
    let res = window.document.getElementById('res');
    let ves = num1 * num2;
    res.innerHTML += `<strong>${ves}</strong>`;
}
function div(){
    

    let num1 = Number(window.document.getElementById('num1').value);
    let num2 = Number(window.document.getElementById('num2').value);
    let res = window.document.getElementById('res');
    let divisao = num1 / num2;
    res.innerHTML += `<strong>${divisao}</strong>`;
}

function reset(){
    res.innerHTML = '';
}