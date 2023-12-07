
const valores = [6, 1, 3, 9, 10, 12];

let i = 0;

function gets(){
    const valor = valores[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };