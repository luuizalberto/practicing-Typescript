var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(nome) {
        this.nome = nome;
    }
    Person.prototype.printName = function () {
        return this.nome;
    };
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(nome) {
        return _super.call(this, nome) || this;
    }
    User.prototype.somar = function (n1, n2) {
        return n1 + n2;
    };
    return User;
}(Person));
// Classe Person
var pessoa = new Person("Betão");
var pessoa2 = new Person("João");
console.log(pessoa.nome);
console.log(pessoa2.nome);
console.log(pessoa.printName());
// Classe User
var usuario = new User("Lari");
console.log(usuario.printName());
console.log(usuario.somar(15, 10));
