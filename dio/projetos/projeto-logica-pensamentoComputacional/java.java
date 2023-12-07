
// Para ler e escrever dados em Java:
// - new Scanner(System.in): cria um leitor de Entrada, com métodos úteis com prefixo "next";
// - System.out.println: imprime um texto de Saída (Output) e pulando uma linha.

import java.util.Scanner;

public class DesafioJava {

    public static void main(String[] args) {
        // Lê os valore de entrada:
        Scanner leitorDeEntradas = new Scanner(System.in);
        float valorSalario = leitorDeEntradas.nextFloat();
        float valorBeneficios = leitorDeEntradas.nextFloat();

        float valorImposto = 0;

        // Atribuia aliquota de acordo com o salário
        if (valorSalario >= 0 && valorSalario <= 1100) {
            valorImposto = 0.05F * valorSalario;
        } else if (valorSalario >= 1100.01 && valorSalario <= 2500) {
            valorImposto = 0.10F * valorSalario;
        } else {
            valorImposto = 0.15F * valorSalario;
        }
        
        // Calcula e imprime a Saída (com 02 casas decimais):
        float saida = valorSalario - valorImposto + valorBeneficios;
        System.out.println(String.format("%.2f", saida));

    }
}