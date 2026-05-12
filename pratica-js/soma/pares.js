// let num1 = [0,1,2,3,4,5,6,7,8];
// let num = [12, 7, 25, 48, 3, 66, 91, 40, 17, 2];
let num = [1200, 34567, 89012, 456789, 102030, 777777, 64000, 99999];


let pares = [];
let impar = [];


function separadorNumeros (){
    for (i = 0; i < num.length;i++){
        if(num[i] % 2 === 0){
            pares.push(num[i]);
        }else{
            impar.push(num[i]);
        }

    }
    console.log(pares);
    console.log(impar);
}
separadorNumeros();