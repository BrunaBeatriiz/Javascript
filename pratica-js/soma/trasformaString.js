let tabelaAscii = [
    // Letras maiúsculas A–Z
    { letra: "A", codigo: 65 }, { letra: "B", codigo: 66 }, { letra: "C", codigo: 67 }, { letra: "D", codigo: 68 },
    { letra: "E", codigo: 69 }, { letra: "F", codigo: 70 }, { letra: "G", codigo: 71 }, { letra: "H", codigo: 72 },
    { letra: "I", codigo: 73 }, { letra: "J", codigo: 74 }, { letra: "K", codigo: 75 }, { letra: "L", codigo: 76 },
    { letra: "M", codigo: 77 }, { letra: "N", codigo: 78 }, { letra: "O", codigo: 79 }, { letra: "P", codigo: 80 },
    { letra: "Q", codigo: 81 }, { letra: "R", codigo: 82 }, { letra: "S", codigo: 83 }, { letra: "T", codigo: 84 },
    { letra: "U", codigo: 85 }, { letra: "V", codigo: 86 }, { letra: "W", codigo: 87 }, { letra: "X", codigo: 88 },
    { letra: "Y", codigo: 89 }, { letra: "Z", codigo: 90 },
  
    // Letras minúsculas a–z
    { letra: "a", codigo: 97 }, { letra: "b", codigo: 98 }, { letra: "c", codigo: 99 }, { letra: "d", codigo: 100 },
    { letra: "e", codigo: 101 }, { letra: "f", codigo: 102 }, { letra: "g", codigo: 103 }, { letra: "h", codigo: 104 },
    { letra: "i", codigo: 105 }, { letra: "j", codigo: 106 }, { letra: "k", codigo: 107 }, { letra: "l", codigo: 108 },
    { letra: "m", codigo: 109 }, { letra: "n", codigo: 110 }, { letra: "o", codigo: 111 }, { letra: "p", codigo: 112 },
    { letra: "q", codigo: 113 }, { letra: "r", codigo: 114 }, { letra: "s", codigo: 115 }, { letra: "t", codigo: 116 },
    { letra: "u", codigo: 117 }, { letra: "v", codigo: 118 }, { letra: "w", codigo: 119 }, { letra: "x", codigo: 120 },
    { letra: "y", codigo: 121 }, { letra: "z", codigo: 122 },
  
    // Números 0–9
    { letra: "0", codigo: 48 }, { letra: "1", codigo: 49 }, { letra: "2", codigo: 50 }, { letra: "3", codigo: 51 },
    { letra: "4", codigo: 52 }, { letra: "5", codigo: 53 }, { letra: "6", codigo: 54 }, { letra: "7", codigo: 55 },
    { letra: "8", codigo: 56 }, { letra: "9", codigo: 57 },
  
    // Espaço e pontuação comum
    { letra: " ", codigo: 32 }, { letra: "!", codigo: 33 }, { letra: "\"", codigo: 34 }, { letra: "#", codigo: 35 },
    { letra: "$", codigo: 36 }, { letra: "%", codigo: 37 }, { letra: "&", codigo: 38 }, { letra: "'", codigo: 39 },
    { letra: "(", codigo: 40 }, { letra: ")", codigo: 41 }, { letra: "*", codigo: 42 }, { letra: "+", codigo: 43 },
    { letra: ",", codigo: 44 }, { letra: "-", codigo: 45 }, { letra: ".", codigo: 46 }, { letra: "/", codigo: 47 },
    { letra: ":", codigo: 58 }, { letra: ";", codigo: 59 }, { letra: "<", codigo: 60 }, { letra: "=", codigo: 61 },
    { letra: ">", codigo: 62 }, { letra: "?", codigo: 63 }, { letra: "@", codigo: 64 },
  
    // Pontuação adicional
    { letra: "[", codigo: 91 }, { letra: "\\", codigo: 92 }, { letra: "]", codigo: 93 }, { letra: "^", codigo: 94 },
    { letra: "_", codigo: 95 }, { letra: "`", codigo: 96 }, { letra: "{", codigo: 123 }, { letra: "|", codigo: 124 },
    { letra: "}", codigo: 125 }, { letra: "~", codigo: 126 }
  ];

let strng = "Olha que coisa mais linda";

let stringLetras = strng.split("");
console.log(stringLetras);
let stringConvertida = [];

const substituicao = () => {
    stringLetras.forEach((letter) => {
        tabelaAscii.find((caracter) => {
            if(letter === caracter.letra){
                letter = caracter.codigo;
                stringConvertida.push(letter);
            }
        })
    })

    let original =stringConvertida.join("-");
    console.log(stringConvertida);
    console.log(original);
}

substituicao(); 

