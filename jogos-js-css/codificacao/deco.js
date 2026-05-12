//a:*, e:/, i:?, o:^, u:~.


// let frase = "o peito do pé de pedro é preto.";

// let frasee = " O ceu esta azul hoje, como não esteve em tempos, por isso vamos fazer um pique-nique;"

// let fraseCodificadaInicial = " O c/~ /st* *z~l h^j/, c^m^ nã^ /st/v/ /m t/mp^s, p^r ?ss^ v*m^s f*z/r ~m p?q~/-n?q~/";

let frase = document.getElementById("frase");
console.log(frase);
let resultado = document.getElementById("resultado");

function code () {
    let fraseSeparada = frase.value.split("");
    console.log(fraseSeparada);


    // let fraseCodificadaSeparada = fraseCodificadaInicial.split("");

    let fraseCodificada = fraseSeparada.map((letter)=> {
        if(['a','e','i','o','u'].includes(letter)){
            if(letter === 'a'){
                letter = '*';
            } else if(letter === 'e' || letter === 'é'){
                letter = '/';
            }else if(letter === 'i'){
                letter = '?';
            }else if(letter === 'o'){
                letter = '^';
            }else if (letter === 'u'){
                letter = '~';
            }
        }
        return letter;
    })
    // let fraseDescodificada = fraseCodificadaSeparada.map((letter)=> {
    //     if(['*','/','?','^','~'].includes(letter)){
    //         if(letter === '*'){
    //             letter = 'a';
    //         } else if(letter === '/'){
    //             letter = 'e';
    //         }else if(letter === '?'){
    //             letter = 'i';
    //         }else if(letter === '^'){
    //             letter = 'o';
    //         }else if (letter === '~'){
    //             letter = 'u';
    //         }
    //     }
    //     return letter;
    // })

    let mensCodificada = fraseCodificada.join("");
    // let resultadoDescodificado = fraseDescodificada.join("");
    console.log(mensCodificada);
    // console.log(resultadoDescodificado);
    resultado.innerText = mensCodificada;
}
code();