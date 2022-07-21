var nome:string = "Beto"
var age:number
var boolTest:boolean

boolTest = true

age = 23

console.log(nome);
console.log(age);
console.log(boolTest);

/*------------------------------*/

var arrTestes: string[]
var testes: any //qualquer tipo de variável

testes = 123

arrTestes = ["Guilherme, João"]

console.log(arrTestes[0]);
console.log(testes);

/*-------------------------------*/

function teste(valor:string){
    console.log(valor);
    
}

function somar(v1:number, v2:number){
    return v1 + v2
}

teste(10)
console.log(somar(20,5));




