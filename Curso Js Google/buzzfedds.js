

for(let i =0; i <= 10; i++){
    if(i % 3 === 0 && i % 5 === 0){
       console.log('BuzzFizz');
    }
    else if(i % 3 === 0){
       console.log('Buzz');
    }else if(i % 5 === 0){
       console.log('Fizz');
    }else{
       console.log(i);
    }

}

