class Person {
    constructor(nome,sobrenome,age){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.age =  age
        // this.nome = age,
        // this.sobrenome = sobrenome,
        // this.age =  nome
    }

    //metodo
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
        //ou
        //console.log( `${this.nome} ${this.sobrenome}`);
        //para acessar: person.nomeCompleto();
    }

    static falar(){
        return 'Hello World!';
    //     console.log('Hello World');
    //Para acessar : Person.falar();
    }

    //um metodo estatico, são aqueles que não precisam que a classe seja istanciada para funcionar, ex: em nome completo a classe precisa ser instanciada para que haja um nome e sobrnome para ser usado, em falar isso não é necessário.
    //metodos estaticos não usa nenhum dado de instancia como: this.nome.
}

 
class Jogador {
    constructor(nome,numero,posição){
        this.nome = nome,
        this.numero = numero,
        this.posição = posição
    }
}

const pessoa = new Person('Luiz', 'Diaz', 26);
console.log(pessoa);
console.log(pessoa.nomeCompleto());
console.log(Person.falar());
const pessoa1 = new Person('Trent','Alexander',25);
console.log(pessoa1);

const jogador = new Jogador('Nunez',4,'Atacante');
console.log(jogador);
const jogador1 = new Jogador('Konate',1,'Zaqueiro');
console.log(jogador1);
const jogador2 = new Jogador('Alisson',0,'Goleiro');
console.log(jogador2);


