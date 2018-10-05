var btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener('click', sumar);

function sumar() {
    var numero1 = document.querySelector('#numero1');
    var numero2 = document.querySelector('#numero2');

    var result = Number(numero1.value) + Number(numero2.value);

    var resultado = document.querySelector('#resultado');

    resultado.value = result;
}