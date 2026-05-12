//a:*, e:/, i:?, o:^, u:~.

let palpite = document.getElementById("frase");
let resultado = document.getElementById("palavra");
let palvavraCodificada = document.getElementById("resultado");
let frase;


const frases = [
    "O sol brilha forte hoje",
    "Gosto de aprender JavaScript",
    "Meu cachorro está dormindo",
    "A vida é cheia de surpresas",
    "Vamos viajar nas próximas férias",
    "O café está muito quente",
    "Aprender é sempre divertido",
    "Ela gosta de pintar quadros",
    "O livro está sobre a mesa",
    "Ele correu para não se atrasar",
    "A música animou a festa",
    "O filme foi muito emocionante",
    "Preciso comprar frutas no mercado",
    "O vento sopra forte no inverno",
    "A chuva molhou o jardim",
    "Ele resolveu o problema rapidamente",
    "O computador travou de repente",
    "Gosto de escrever histórias curtas",
    "A comida estava deliciosa",
    "O pôr do sol é maravilhoso"
  ];

  function fraseALeatoria (){
    const number = Math.floor(Math.random() * frases.length);
    return frases[number];
  }



function code () {
    frase = fraseALeatoria();
    let fraseSeparada = frase.split("");
    console.log(fraseSeparada);


    let fraseCodificada = fraseSeparada.map((l)=> {
        let letter = l.toLowerCase();
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

    let mensCodificada = fraseCodificada.join("");
    console.log(mensCodificada);
    palvavraCodificada.innerText = mensCodificada;
    palpite.value = "";
}


function verificar (){
    let palpiteUser = palpite.value;
    if(palpiteUser.toLowerCase() === frase.toLowerCase()){
        resultado.innerText = "Parabéns, você acertou!"
    }else{
       resultado.innerText = "Ops! Tente novamente."
    }
}