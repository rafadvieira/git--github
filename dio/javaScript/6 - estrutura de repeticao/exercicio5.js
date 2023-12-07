/**
Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
 */

const lista = [];

for (let index = 10; index <= 50; index++) {
    if (index % 2 === 0){
        lista.push(index);
    }
}

console.log(lista);