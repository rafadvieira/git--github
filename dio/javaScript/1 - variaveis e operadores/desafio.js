/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por Km;
3 - Distância em KM de viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const valorCombustivel = 5.79;
const gastoMedio = 10.0;
let distancia = 100;

let valorGasto = distancia * (valorCombustivel / gastoMedio);

console.log("Valor gasto: " + valorGasto.toFixed(2));