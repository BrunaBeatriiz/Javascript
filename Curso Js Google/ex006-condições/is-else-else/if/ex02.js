var ag = new Date();
var hora = ag.getHours();
console.log(`Agora são ${hora} horas, portanto:`);
if(hora > 5 && hora <= 12 ){
    console.log('Bom dia!');
}else if(hora > 12 && hora <= 18){
    console.log('Boa tarde!');
}else if(hora > 18 && hora < 24){
    console.log('Boa noite!');
}else{
    console.log('Está de madrugada!');
}