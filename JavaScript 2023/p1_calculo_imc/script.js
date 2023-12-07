

/**SELECIONAR TODOS OS ELEMENTOS QUE DESEJA MANIPULAR */

//TODO O FORMULARIO
let formulario = document.querySelector('form');

//DADOS DO FORMULÁRIO - utilizando o #id
let cxNome = document.querySelector('#nome');
let cxIdade = document.querySelector('#idade');
let cxPeso = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');

//BOTÕES
let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpar');

//CAIXA IMC
let cxImc = document.querySelector('#resultadoImc');
let aviso = document.querySelector('#aviso');

//RESULTADO - gera um array
let dados = document.querySelectorAll('.pessoa');

/**PARA PEGAR TODOS OS DADOS DENTRO DAS CAIXAS DE TEXTO, UTILIZAR A PROPRIEDADE .value. MAS, ANTES DETERMINAR IM EVENTO COMO REFERÊNCIA PARA PEGAR OS DADOS*/

//ESCUTADOR PARA O BOTÃO btnEnviar
btnEnviar.addEventListener('click', function (e){

    //pegar os values(dados) de cada input
    let nome = cxNome.value;
    let idade = cxIdade.value;
    let peso = cxPeso.value;
    let altura = cxAltura.value;

    //calculo do imc
    let imc = (peso / (altura * altura)).toFixed(1);

    //processamento dos dados
    cxImc.value = imc;
    let sit = situacaoDoPeso(imc);
    aviso.textContent = sit;

    //criar objeto pessoa
    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        sit: sit
    }

    //mostrar os dados
    console.log(pessoa);
    dados[1].textContent = pessoa.nome;
    dados[2].innerHTML = pessoa.idade + ' anos';
    dados[3].textContent = pessoa.peso + ' Kg'
    dados[4].textContent = pessoa.altura + ' m';
    dados[5].innerHTML = pessoa.imc + ' ' + pessoa.sit;
    
    //previnir o comportamento padrão
    e.preventDefault();

});

//função para situação
function situacaoDoPeso(imc) {

    let situação = '';

    if (imc < 18.5) {
        situação = 'Baixo Peso';
    }else if (imc >= 18.5 && imc <= 24.9) {
        situação = 'Peso normal';
    }else if (imc >= 25 && imc <= 29.9) {
        situação = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        situação = 'Obesidade I';
    } else if (imc >= 35 && imc <= 39.9) {
        situação = 'Obesidade II';
    } else if (imc >= 40) {
        situação = 'Obesidade III';
    } else {
        situação = 'Informe seu peso corretamente';
    }

    return situação;
}