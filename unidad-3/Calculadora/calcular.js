var btnSuma = document.querySelector('#btnsuma');
btnSuma.addEventListener('click', sumar);

var btnResta = document.querySelector('#btnresta');
btnResta.addEventListener('click', restar);

var btnMultiplicacion = document.querySelector('#btnmulti');
btnMultiplicacion.addEventListener('click', multiplicar);

var btnDivision = document.querySelector('#btndivision');
btnDivision.addEventListener('click', dividir);

var btnResiduo = document.querySelector('#btnresiduo');
btnResiduo.addEventListener('click', residuo);

function sumar() {
    var numero1 = document.querySelector('#nm1');
    var numero2 = document.querySelector('#nm2');

    var result = Number(numero1.value) + Number(numero2.value);

    var resultado = document.querySelector('#resultado');

    resultado.value = result;
}

function restar() {
        var numero1 = document.querySelector('#nm1');
        var numero2 = document.querySelector('#nm2');
    
        var result = Number(numero1.value) - Number(numero2.value);
    
        var resultado = document.querySelector('#resultado');
    
        resultado.value = result;
}

function multiplicar() {
        var numero1 = document.querySelector('#nm1');
        var numero2 = document.querySelector('#nm2');
    
        var result = Number(numero1.value) * Number(numero2.value);
    
        var resultado = document.querySelector('#resultado');
    
        resultado.value = result;
}

function dividir() {
        var numero1 = document.querySelector('#nm1');
        var numero2 = document.querySelector('#nm2');
    
        var result = Number(numero1.value) / Number(numero2.value);
    
        var resultado = document.querySelector('#resultado');
    
        resultado.value = result;
}

function residuo() {
        var numero1 = document.querySelector('#nm1');
        var numero2 = document.querySelector('#nm2');
    
        var result = Number(numero1.value) % Number(numero2.value);
    
        var resultado = document.querySelector('#resultado');
    
        resultado.value = result;
}