const botao = document.querySelectorAll('.botao');
const botaoNumerico = document.querySelectorAll('#numero');
const botaoOperador = document.querySelectorAll('#operador');

const botaoResultado = document.querySelector('#igual')

let display = document.querySelector('.display');
let num1 = '';
let sinal = null;
let num2 = '';
let resultado = '';




let equacao = '';

botaoNumerico.forEach(button => {

    button.addEventListener('click', () => {

        if (button.textContent === ('.') && equacao === ('') || equacao === '0') {
            equacao = '0'
            equacao += button.textContent;
        }
        else if (button.textContent === ('.') && equacao.includes('.'))
            return
        else {
            equacao += button.textContent
        }


        display.value = equacao
    }
    )
})

botaoOperador.forEach(button => {
    button.addEventListener('click', () => {

        const operadores = ['+', '-', '*', '/']
        const ultimoCaractere = equacao[equacao.length - 1]


        if (operadores.includes(ultimoCaractere) && operadores.includes(button.value)) {
            equacao = equacao.slice(0, -1) + button.value
        } else if (equacao === '' && button.value === '-') {
            equacao += button.value;
        } else if (equacao !== '') {
            equacao += button.value;
        }

        display.value = equacao

        if (equacao !== '' && operadores.includes(equacao[equacao.length - 1])) {
            num1 = equacao.slice(0, -1)
            sinal = equacao[equacao.length - 1]
            equacao = ''
        }

        if (sinal && num1) {
            botaoOperador.forEach(b => b.disabled = true);
        } else {
            botaoOperador.forEach(b => b.disabled = false);
        }


    })
})


botao.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            if (num1 && sinal && equacao) {
                num2 = equacao
            }
            calcular()

        }
        if (button.textContent === 'c') {
            resetar()
        }

        if (button.textContent === 'b') {
            apagar()
        }
    })
})





function calcular() {
    if (num1 && num2 && sinal) {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        resultado = eval(num1 + sinal + num2)
        num1 = resultado
        num1 = num1.toString()
        display.value = resultado
        sinal = null
        num2 = ''
        resultado = ''
        botaoOperador.forEach(b => b.disabled = false)
        equacao = num1

    }
}

function resetar() {
    num1 = '';
    sinal = null;
    num2 = '';
    equacao = ''
    resultado = ''
    botaoOperador.forEach(b => b.disabled = false)
    display.value = equacao
}

function apagar() {
    equacao = equacao.slice(0, -1)
    display.value = equacao;
}