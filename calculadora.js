const botaoNumerico = document.querySelectorAll('#numero');
const operador = document.querySelectorAll('#operador');
let display = document.querySelector('.display')



let numeroAtual = '';
let primOperador = null;


botaoNumerico.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '.' && numeroAtual === '') {
            if (!numeroAtual.includes('.')) {
                numeroAtual = '0'
                numeroAtual += button.textContent;
            }
        }
        else {
            numeroAtual += button.textContent;
            display.value = numeroAtual
        }
    })
})


operador.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'c') {
            limpar();
        }
        else if (button.textContent === 'b') {
            apagar();
        }
        else if (button.textContent === '=') {
            resultado();
        } else {


            if (button.textContent === '-' && numeroAtual === '') {
                numeroAtual += '-'
                display.value = numeroAtual;
            }
            else if (primOperador === null && numeroAtual !== '') {
                primOperador = button.textContent;
                numeroAtual += ` ${primOperador} `;
                display.value = numeroAtual;
            }
        }
    })
})

function limpar() {
    numeroAtual = ''
    primOperador = null
    display.value = numeroAtual;
}

function apagar() {
    numeroAtual = numeroAtual.slice(0, -1)
    display.value = numeroAtual;
}

function resultado() {

}

// poder utilizar o . no segundo numero
// melhorias:   criar mod escuto e salvar o histórico de calculos realizados