
// Para ler e escrever dados em JavaScript:
// - "gets": lê uma linha com dado(s) de Entrada (Inputs) do usuário;
// - "print": imprime um texto de saída (Output) e pulando linha.

// Lê os valore de entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

// Calcula o imposto através da função calcularImposto:
const valorImposto = calcularImposto(valorSalario);

// Calcula e imprime a Saída (com 02 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));

// Função útil para calculo do imposto (baseado em aliquota):
function calcularImposto(salário) {
    let aliquota;

    if (valorSalario >= 0 && valorSalario <= 1100) {
        aliquota = 0.05;
    } else if (valorSalario >= 1100.01 && valorSalario <= 2500) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }

    return aliquota * valorSalario
}

        
        
       
   