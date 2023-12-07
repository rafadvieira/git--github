
const nome = 'Rafaella de Abreu Dantas Vieira';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

const nota = [];

nota.push(5);
nota.push(7);
nota.push(8);
nota.push(2);
nota.push(5);
nota.push(8);

let soma = 0;

for (let index = 0; index < nota.length; index++) {
    soma += nota[index]; 
}

const media = (soma / nota.length).toFixed(2);

console.log(`Média: ${media}`);