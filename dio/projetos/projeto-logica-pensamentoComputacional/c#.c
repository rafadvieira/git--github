
// Para ler e escrever dados em C#:
// - Console.ReadLine: lê uma linha com dado(s) de Entrada (Inputs) do usuário;
// - Console.WriteLine: imprime um texto de saída (Output) e pulando linha.

using System;

public class DesafioC# 
{

    public static void Main() 
    {
        // Lê os valore de entrada:
        float valorSalario = float.Parse(Console.ReadLine());
        float valorBeneficios = float.Parse(Console.ReadLine());

        float valorImposto = 0;

        // Atribuia aliquota de acordo com o salário
        if (valorSalario >= 0 && valorSalario <= 1100)
        {
            valorImposto = 0.05F * valorSalario;
        } 
        else if (valorSalario >= 1100.01 && valorSalario <= 2500) 
        {
            valorImposto = 0.10F * valorSalario;
        } 
        else 
        {
            valorImposto = 0.15F * valorSalario;
        }
        
        // Calcula e imprime a Saída (com 02 casas decimais):
        float saida = valorSalario - valorImposto + valorBeneficios;
        Console.WriteLine(saida.ToString("0.00"));
    }
}