//Herança:

class Animal {
    constructor (nome,cor){
        this.nome = nome,
        this.cor = cor
    }

    latir(){
        return `${this.nome} fez algum barulho!`;
    }
}

class Dog extends Animal {
    //herança da classe animal, tem que receber os mesmos parametros de Animal;
    constructor(name,cor, raça){
        super(name,cor),
        this.raça = raça;
    }

    latir(){
        return `${this.nome} latiu!`;
    }

}

const animal = new Animal ('Simba','Marrom');
console.log(animal);
console.log(animal.latir());

const dog = new Dog ('Mike','Preto','Caramelo');
console.log(dog);
console.log(dog.latir());


// super(name, cor);
// O super é uma chamada que invoca o construtor da classe pai (Animal neste caso).
// Isso é necessário porque a classe Dog herda propriedades de Animal, e precisamos inicializar essas propriedades.
// Quando chamamos super(name, cor), estamos dizendo: "Chame o construtor da classe Animal e passe name e cor para ele."
// Com isso, as propriedades nome e cor da instância de Dog são inicializadas.
// 3. Inicializando Propriedades Específicas da Subclasse
// this.raça = raça;:
// Aqui, estamos atribuindo o valor do parâmetro raça à propriedade raça da instância de Dog.
// Esta linha é específica para a classe Dog, ou seja, raça não existe na classe Animal, apenas em Dog.
// Resumindo
// O construtor da classe Dog recebe três parâmetros: name, cor, e raça.
// Ele usa super(name, cor) para inicializar as propriedades que Dog herda da classe Animal.
// Por fim, ele inicializa a propriedade específica raça para instâncias de Dog.
