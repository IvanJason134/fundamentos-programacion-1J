import Producto from './productos.js';

class Main{
    constructor(){
        document.querySelector("#btnAgregar").addEventListener('click', this.onAgregar);
        let nombre = document.querySelector("#nombre");
        let cantidad = document.querySelector("#cantidad");
        let precio = document.querySelector("#precio");
    }

    onAgregar(){
            var compra = new Producto(
                String(nombre.value),
                Number(cantidad.value),
                Number(precio.value)
            );
            console.log(compra);
    }
}
