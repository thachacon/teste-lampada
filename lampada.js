var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
    if (!estaQuebrada()){
    lamp.src = 'lampadaacesa.svg'}
}

function desligar(){
    if (!estaQuebrada()){
    lamp.src = 'lampadaapagada.svg'}
}

lamp.addEventListener('click', quebrar)

function quebrar(){
    lamp.src = 'quebrada.svg' 
}