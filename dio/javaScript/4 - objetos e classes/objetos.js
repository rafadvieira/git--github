
const pessoa = {
    nome: 'Rafaella',
    idade: 42,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.descrever();

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

const atributo = 'idade';
console.log(pessoa[atributo]);

console.log(pessoa['nome']);