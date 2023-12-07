/* Aula 15 de JS Aplicacao Calculadora de Media */

//SELECIONAR A SEÇÃO FORMULARIO
let formulario = document.querySelector('form');

//SELECIONAR CAIXAS DE TEXTO POR ID
let cxNota1 = document.querySelector('#nota1');
let cxNota2 = document.querySelector('#nota2');

//SELECIONAR OS BOTÕES POR ID
let btnCalcular = document.querySelector('#btnCalcular');
let btnLimpar = document.querySelector('#btnLimpar');

let cxMedia = document.querySelector('#media');
let cxSituacao = document.querySelector('#situacao');

let aviso = document.querySelector('#aviso');

//FUNÇAO PARA VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
    let num1 = cxNota1.value;
    let num2 = cxNota2.value;

    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset(); // limpa formulário
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0';
        aviso.classList.add('alerta');
        setTimeout(function() {
            aviso.textContent = '';
            aviso.classList.remove('alerta');
        }, 2000);
    }
}

//FUNÇÃO PARA CALCULAR MÉDIA
function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

//CALCULAR MÉDIA APÓS O CLICK NO BOTÃO
btnCalcular.addEventListener('click', function(e) {

    //pegar o valor que está dentro das caixas usar o método parseFloat para converter String para Float
    let nota1 = parseFloat(cxNota1.value);
    let nota2 = parseFloat(cxNota2.value);
    let media = calcularMedia(nota1, nota2);

    if (isNaN(media) || media < 0) {
        cxSituacao.value = '';
    } else {
        cxMedia.value = parseFloat(media);
        cxSituacao.value = situacaoFinal(media);
        formatarSituacao(situacaoFinal(media));
    }

    e.preventDefault();
})

//FUNÇAO PARA DEFINIR SITUAÇÃO FINAL COM BASE NA MÉDIA
function situacaoFinal(mediaFinal) {
    let situacaoFinal = '';

    if (mediaFinal >= 7) {
        situacaoFinal = 'Aprovado (a)';
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado (a)';
    } else {
        situacaoFinal = 'Recuperação';
    }

    return situacaoFinal;
}

//FUNÇÃO PARA FORMATAR A CAIXA DE SITUAÇÃO FINAL
function formatarSituacao(situacaoFinal) {
    switch(situacaoFinal) {

        case 'Aprovado (a)':
            cxSituacao.classList.remove('reprovado');
            cxSituacao.classList.remove('recuperacao');
            cxSituacao.classList.add('aprovado');
            break;
        
        case 'Reprovado (a)':
            cxSituacao.classList.remove('aprovado');
            cxSituacao.classList.remove('recuperacao');
            cxSituacao.classList.add('reprovado');
            break;

        case 'Recuperacao':
            cxSituacao.classList.remove('aprovado');
            cxSituacao.classList.remove('reprovado');
            cxSituacao.classList.add('recuperacao');
            break;
        
        default:
            console.log('Situaçao Indefinida');
    }
}

// APÓS LIMPAR TIRAR AS CLASS DA CAIXA SITUAÇÃO
btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado');
    cxSituacao.classList.remove('reprovado');
    cxSituacao.classList.remove('recuperacao');
})



