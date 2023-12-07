

const fs = require('fs');

// lê o arquivo
const promisesLeituraDoArquivo = fs.promises.readFile('tarefas.csv');

// chama o arquivo
promisesLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf-8'))  
    .then((texto) => console.log(texto))
    .catch((error) => console.log('Deu erro!', error))

// forma reduzida do promise
async function buscarArquivo(){
    try {
        const arquivo = await fs.promises.readFile('tarefas.csv');
        const texto = arquivo.toString('utf-8');
        console.log(texto);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Finalizou!');
    }
}

buscarArquivo();