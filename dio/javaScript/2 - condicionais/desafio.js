/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em KM de viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const valorEtanol = 6.66;
const valorGasolina = 5.79;
const tipoCombustivel = 'etano';
const gastoMedioCombustivel = 11;
const distancia = 100;
let valorGasto = 0;

if (tipoCombustivel === 'etanol'){
    console.log("Valor Gasto: " + (distancia * (valorEtanol / gastoMedioCombustivel)).toFixed(2));
} else {
    console.log("Valor Gasto: " + (distancia * (valorGasolina / gastoMedioCombustivel)).toFixed(2));
}
