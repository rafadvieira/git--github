function imprimirNome(nome){
    return nome;
}

function verificarIdade (idade, nome){
    if (idade >= 18 ){
        console.log(imprimirNome(nome) + ', você é maior de idade');
    } else {
        console.log(imprimirNome(nome) + ', você é menor de idade');
    }
}

verificarIdade(22, 'Rafaella');