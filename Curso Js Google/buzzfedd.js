let num = window.document.getElementById('num');
let h1 = window.document.getElementById('');
let texto1 = window.document.getElementById('texto1');
let texto2 = window.document.getElementById('texto2');
let lista = window.document.getElementById('p');


const chamar = () =>{
    let numero = num.value;
    let txt1 = texto1.value;
    let txt2 = texto2.value;
    const ol = document.createElement('ul');


    for(let i =0; i <= numero; i++){
        const li = document.createElement('li');
        if(i % 3 === 0 && i % 5 === 0){
            li.innerText=`${txt1}${txt2}`;
        }
        else if(i % 3 === 0){
            li.innerText=`${txt1}`;
        }else if(i % 5 === 0){
            li.innerText=`${txt2}`;
        }else{
        li.innerText=i;
        }

        ol.appendChild(li);
    }

    lista.appendChild(ol);
}





// Desafio: Permitir que o usuário escolha os números divisores e as palavras.
// Exemplo: Se o usuário escolher:

// js
// Copiar
// Editar
// fizzBuzz(3, "Foo", 5, "Bar")
// Imprime:

// Foo para múltiplos de 3

// Bar para múltiplos de 5

// FooBar para múltiplos de ambos