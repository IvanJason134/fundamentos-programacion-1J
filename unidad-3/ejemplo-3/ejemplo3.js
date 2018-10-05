var pResultado = document.querySelector('#resultado');
var btnNumero = document.querySelector('#btnNumero');
var opciones = document.querySelector('#opciones');
opciones.addEventListener('change', evalopc);

btnNumero.addEventListener('click', evaluar);

function evalopc() {
    var numero = document.querySelector('#numero');
    var opc = opciones.value;
    var num = Number(numero.value);
    
    if (opc === 'mitad') {
        pResultado.textContent =  'La mitad es: ' + (num/2);
    }
    else if (opc === 'cuadrado') {
        pResultado.textContent = 'El cuadrado es: ' + (num*num);
    }
    else if (opc === 'par'){
        if (num%2 === 0){
            pResultado.textContent = 'El numero es par';
        }
        else{
            pResultado.textContent = 'El numero es impar';
        }
    }
    else{
        pResultado.textContent = "Selecciona algo >:v";
    }
}

function evaluar() {
    var numero1 = document.querySelector('#numero');
    var num = Number(numero1.value);

    if (num > 0) {
        pResultado.textContent = 'El numero ' + num + ' es positivo';
    }
    
    else if (num == 0){
        pResultado.textContent = 'Escribiste el numero cero';
    }
    else {
        pResultado.textContent = 'El numero ' + num + ' es negativo';
    }
}