function conversor(){
    var temp =Number(window.document.getElementById('inum').value);
    var res = document.getElementById('res');


    res.innerHTML = `<p>A temperatura em Celsius é: <strong>${temp}</strong>ºC.<hr>`;

    var far = (temp * 1.8) + 32;
    res.innerHTML += `<p>A temperatura em Fahrenheit é: <strong>${far}</strong>ºF.<hr>`;

    var kelvin = temp + 273;
    res.innerHTML += `<p>A temperatura em Fahrenheit é: <strong>${kelvin}.15</strong>ºK.<hr>`;

    var newton = (temp * (33/100)).toFixed(2);
    res.innerHTML += `<p>A temperatura em Fahrenheit é: <strong>${newton}</strong>ºN.<hr>`;
    


}