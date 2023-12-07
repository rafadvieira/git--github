
# Para ler e escrever dados em Python:
#  - input: lê uma linha com dado(s) de Entrada do usuário;
#  - print: imprime um texto de saída (Output) e pulando linha.

# Função útil para calculo do imposto (baseado em aliquota):
def calcular_imposto(salário) {
    aliquota = 0.0

    if (valor_salario >= 0 and valor_salario <= 1100):
        aliquota = 0.05
    elif (valor_salario >= 1100.01 and valor_salario <= 2500):
        aliquota = 0.10
    else:
        aliquota = 0.15
    return aliquota * valor_salario


#  Lê os valore de entrada:
valor_salario = float(input())
valor_beneficios = float(input())

#  Calcula o imposto através da função calcularImposto:
valor_imposto = calcular_imposto(valor_salario)

# Calcula e imprime a Saída (com 02 casas decimais):
saida = valor_Salario - valor_imposto + valor_beneficios
print(f'{saida:.2f}')


