// comentario em linha

/*
Comentario em bloco
*/

// criar variaveis use let ou var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write(`Preço Total R$ ${precoTotal} <br>`)

console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <hr>`)

// criar constante
const nome = 'Edson Maia'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write("Nota Final " + notaFinal+ '<br>')

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(compraComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '<br>')

document.write(compraComDesconto + '<hr><br>')

document.write(`<h1>Exercicios e Desafios </h1>`);

/**Desafio 1*/

let pessoa = {
    lutador: ['Fedor Vladimirovich Emelianenko'],
    nacionalidade: ['Russo'],
    idade: [44],
    peso: [106],
    altura: [1.83]
}

document.write(`<div class='card'>
                <h2>Lutador</h2>
                <img src='./image/fedor-2015.jpg'>
                <p>Lutador: ${pessoa.lutador}</p>
                <p>Nacionalidade: ${pessoa.nacionalidade}</p>
                <p>Idade: ${pessoa.idade}</p>
                <p>Peso: ${pessoa.peso}</p>
                <p>Altura: ${pessoa.altura}</p>
                </div>`)

/**Desafio 02*/

const data = new Date();
const frase = 'Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade. Aaron Swartz.'; 

document.write(`<div class='citacao'>
                <h2>Frase do Dia</h2>
                <h3>${data.getDay()}/${data.getMonth()}/${data.getFullYear()}</h3> 
                <blockquote>&#10077;${frase}&#10078;</blockquote></h3>
                </div>`);

/**Desafio 03*/

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];

document.write(`<div class='meses'>
                <h2>Array de Meses do Ano</h2>
                <p>${meses[0]}, ${meses[1]}, ${meses[2]} ...</p>
                </div>`)


/**Desafio 04*/

let jogos = {
    jogo: ['League Of Legends - LOL'],
    desenvolvedor: ['Riot Games'],
    ano: [2009]
}

document.write(`<div class='jogo'>
                <h2>Jogo</h2>
                <span>Titulo:</span>
                <p>${jogos.jogo}</p>
                <span>Desenvolvido por:</span> 
                <p>${jogos.desenvolvedor}</p>
                <span>Ano do Lançamento: </span>
                <p>${jogos.ano}</p>
                </div>`)


