var btnUno = document.querySelector('#btnUno');
btnUno.addEventListener('click', ciclo);
var tabla = document.querySelector('#resultado');
var btnDos = document.querySelector('#btnDos');
btnDos.addEventListener('click', ejemplo2);
var btnTres = document.querySelector('#btnTres');
btnTres.addEventListener('click', ejemplowhile);
var btnCuatro = document.querySelector('#btnCuatro');
btnCuatro.addEventListener('click', select);
var btnCinco = document.querySelector('#btnCinco');
btnCinco.addEventListener('click', dowhile);
var circulos30 = document.querySelector('#circulos30');
circulos30.addEventListener('click', circuloslocos);

var opciones = document.querySelector('#opciones');
var lienzo = document.querySelector('#lienzo');

function circuloslocos() {
    var n =document.querySelector('#n');
    var fin = Number(n.value);

    var i = 0
    do{
        var x = Math.trunc((Math.random() * 501) + 1);
        var y = Math.trunc((Math.random() * 501) + 1); 
        var diametro = Math.trunc((Math.random() * 50) + 1);  
        if (x > 300) {
            continue;
        }    
        var c = lienzo.getContext('2d'); 
        c.beginPath();
        c.fillStyle = 'rgba(0,255,0,0.5)';
        c.arc(x, y, diametro, 0, 2*Math.PI);
        c.fill();
        i++;
    }while(i <= 30)
}

function dowhile() {
    var c = lienzo.getContext('2d');

    c.beginPath();
    c.fillStyle = 'rgba(0,255,0,0.5)';
    c.arc(250, 250, 150, 0, 2*Math.PI);
    c.fill();
}

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