



function mudarCor(){
    let color = window.document.getElementById('icolor').value;
    let principal = window.document.getElementById('principal');
    console.log(color);
    document.body.style.background = color;
    if(color == '#ffffff' ){
        // document.querySelector('h1').style.color = 'black';
        principal.style.color ='black';
    }else{
        principal.style.color ='white';
    }
}