// Functions declaration (Função de declaração)
function name(){}

function name1(parametos1, parametros2){}

function ola() {
    console.log('Olá')
}
ola()

//declarar funções dentro de funções
function ola1() {
    function mensagem() {
        return 'Olá'
    }
    console.log(mensagem())
}
ola1()

function ola2(nome) {
    console.log('Olá', nome)
}
ola2('Matheus')

// Functions expression (Função de expressão) - está sendo atribuída para uma variável, onde não definimos o nome da função e sim o nome da variável que irá referenciar a mesma.
const ola3 = function() {
    console.log('Olá')
}
ola3()

// Arrow Functions (Função de flecha) - são simplificações para as functions expression.
const numeroAleatorio = function() {
    return Math.random()
}

const numeroAleatorio1 = () => {
    return Math.random()
}

const numeroAleatorio2 = () => Math.random()

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

// Functions constructor (Função construtora) - normalmente o nome de funções construtoras começa com a primeira letra maiúscula
function Pessoa(nome) {
    this.nome = nome
}
const p = new Pessoa('Matheus') // { nome: 'Matheus' }

// Generator Functions (Função geradora) - uma pequena diferença está na adição de um * na palavra reservada function, ou seja, function*
function* ola(p1, p2) {}