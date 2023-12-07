/**
Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1
 */

const { gets, print} = require('./funcoes-auxiliares.js'); 

const quantidade = gets();
let par = 0;
let impar = Infinity;

for( let i = 0; i < quantidade; i++) {
    const numero = gets();
    if ( numero % 2 === 0 && numero > par ){
        par = numero;
    } else if (numero % 2 !== 0 && numero < impar) {
        impar = numero;
    }
}

print(`Par: ${par}`);
print(`Impar: ${impar}`);






