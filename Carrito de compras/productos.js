export default class Producto {
    constructor(nombre,cantidad,precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;

        console.log(compra);
    }

    getPesos(){
        this.pesos = (this.precio * this.cantidad);
    }
    getDolares(){
        this.dolares = (this.precio * this.cantidad) * 20;
    }
}

