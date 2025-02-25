var ag = new Date();
var diaSem = ag.getDay();
diaSem = 7;

switch(diaSem){
    case 0:
        console.log('Hoje é domingo!');
        break;
    case 1:
         console.log('Hoje é segunda!');
         break;
    case 2:
         console.log('Hoje é terça!');
         break;
    case 3:
        console.log('Hoje é quarta!');
        break;
    case 4:
        console.log('Hoje é quinta');
        break;
    case 5:
        console.log('UUUUUUUUUU, hoje é sexta!');
        break;
    case 6:
        console.log('YEEAH, hoje é sabádo!');
        break;
    default:
        console.log('[ERRO}, dia inválido!');
        break;    
    }