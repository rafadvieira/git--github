/**
Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
 */

const { gets, print } = require('./funcoes-auxiliares.js');

const quantidade = gets();
let maiorValor = 0;
let menorValor = Infinity;

for (let i = 0; i < quantidade; i++) {
    const numero = gets();
    if (numero > maiorValor) {
        maiorValor = numero;
    }
    if (numero < menorValor) {
        menorValor = numero;
    }

}

print(`Maior= ${maiorValor}`);
print(`Menor= ${menorValor}`);


