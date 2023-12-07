/*
Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

const lista = [2, 7, 3, 8, 10, 4];
let maior = 0;

for (let index = 0; index < lista.length; index++) {
    if(maior < lista[index]){
        maior = lista[index];
    }
}

console.log(maior);