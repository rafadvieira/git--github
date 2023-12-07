/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function calcularDesconto( valor, desconto ){
    return (valor - (valor * (desconto / 100))).toFixed(2);
}

function aplicarJuros (valor, juros) {
    return (valor + (valor * juros/100)).toFixed(2);
}

const precoProduto = 100;
const condicaoPagamento = 4;

if (condicaoPagamento === 1){
    console.log('Valor: ' + calcularDesconto(precoProduto, 10));
}else if (condicaoPagamento === 2){
    console.log('Valor: ' + calcularDesconto(precoProduto, 15));
}else if (condicaoPagamento === 3){
    console.log('Valor: ' + precoProduto);
}else {
    console.log('Valor: ' + aplicarJuros(precoProduto, 10));
}

console.log(200 * 10 / 100);
console.log(200 * 0.1);