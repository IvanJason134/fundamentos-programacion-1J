var btnUno = document.querySelector('#btnUno');
btnUno.addEventListener('click', ciclo);
var tabla = document.querySelector('#resultado');
var btnDos = document.querySelector('#btnDos');
btnDos.addEventListener('click', ejemplo2);
var btnTres = document.querySelector('#btnTres');
btnTres.addEventListener('click', ejemplowhile);
var btnCuatro = document.querySelector('#btnCuatro');
btnCuatro.addEventListener('click', select);
var opciones = document.querySelector('#opciones');

function select(){
    var n = document.querySelector('#n');
    var fin = Number(n.value);
    
    var i = fin;
    while (i>0) {
        var option = document.createElement('option');
        option.text = i;
        opciones.add(option);
        i--;
    }
}

function ejemplowhile() {
    var n = document.querySelector('#n');
    var fin = Number(n.value);

    var i = 1;
    while ( i <= fin) {
        var row = tabla.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;

        i++;
    }
}
 
function ejemplo2(){
    var n = document.querySelector('#n');
    var fin = Number(n.value);

    for (var i= 1; i <= fin; i++){
        var valor = prompt("Ingresa el numero " + i +"/" + fin + ":");
        var row = tabla.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = valor;
    }
}

function ciclo() {
    var n = document.querySelector('#n');
    var numero = Number(n.value);
    for (var i = 1; i <= numero; i++){
        var row = tabla.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;
    }
}