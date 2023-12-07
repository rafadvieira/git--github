/*
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Car {
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio; 
    }

    valorGasto(distancia, valorCombustivel){
        return (distancia * (valorCombustivel / this.gastoMedio)).toFixed(2);
    }
}

const c1 = new Car('Fiat', "azul", 12);
console.log(c1);
console.log(c1.valorGasto(70, 5));

const c2 = new Car('Fiat', 'preta', 10);
console.log(c2);
console.log(c2.valorGasto(70, 5));