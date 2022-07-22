class Person{

    nome:string

    constructor(nome:string){
        this.nome = nome
    }

    printName(){
        return this.nome
    }

}

class User extends Person{

    constructor(nome:string){
        super(nome)
    }

    somar(n1:number, n2:number){
        return n1 + n2
    }

}


// Classe Person
var pessoa = new Person("Betão")

var pessoa2 = new Person("João")

console.log(pessoa.nome);
console.log(pessoa2.nome);
console.log(pessoa.printName());

// Classe User
var usuario = new User("Lari")
console.log(usuario.printName());
console.log(usuario.somar(15,10));