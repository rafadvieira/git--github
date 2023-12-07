
Para ler e escrever dados em JavaScript:
// - "gets": lê uma linha com dado(s) de Entrada (Inputs) do usuário;
// - "print": imprime um texto de saída (Output) e pulando linha.

object ReceitaFederal {
    fun calcularImposto (salario: Double): Double {
        val aliquota = when {
            (salario >= 0 && salario <= 1100) -> 0.05
            (valor_salario >= 1100.01 && valor_salario <= 2500) -> 0.10
            else -> 0.15
        }
        return aliquota * salario
    }
}

fun main() {
    val valorSalario = readLine()!!.toDouble();
    val valorBeneficios = readLine()!!.toDouble();

    val valoImposto = ReceitaFederal.calcularImposto(valorSalario);
    val saida = valorSalario - valoImposto + valorBeneficios;

    println(String.format("%.2", saida));

}