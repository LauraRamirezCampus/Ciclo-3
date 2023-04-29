class Producto {
    #codigo;
    #descripcion;
    #precioCompra;
    #precioVenta;
    #cantidadBodega;
    #cantidadMinima;
    #cantidadMaxima;
    #descuento;
    constructor(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento) {
        this.#codigo = codi;
        this.#descripcion = descripcion;
        this.#precioCompra = pCompra;
        this.#precioVenta = pVenta;
        this.#cantidadBodega = cBodega;
        this.#cantidadMinima = cMinima;
        this.#cantidadMaxima = cMaxima;
        this.#descuento = descuento;
    } 
    get codigo() {
        return this.#codigo;
    }
    set descripcion(nuevaDesc) {
        this.#descripcion = nuevaDesc;
    }
    get descripcion() {
        return this.#descripcion;
    }
    set precioCompra(nuevoPreCompra) {
        this.#precioCompra = nuevoPreCompra;
    }
    get precioCompra() {
        return this.#precioCompra;
    }
    set precioVenta(nuevoPreVenta) {
        this.#precioVenta = nuevoPreVenta;
    }
    get precioVenta() {
        return this.#precioVenta;
    }
    set cantidadBodega(nuevaCantBodega) {
        this.#cantidadBodega = nuevaCantBodega;
    }
    get cantidadBodega() {
        return this.#cantidadBodega;
    }
    set cantidadMinima(nuevaCantMinima) {
        this.#cantidadMinima = nuevaCantMinima;
    }
    get cantidadMinima() {
        return this.#cantidadMinima;
    }
    set cantidadMaxima (nuevaCantMaxima) {
        this.#cantidadMaxima = nuevaCantMaxima;
    }
    get cantidadMaxima() {
        return this.#cantidadMaxima;
    }
    set descuento(nuevoDescuento) {
        this.#descuento = nuevoDescuento;
    }
    get descuento() {
        return this.#descuento;
    }

    solPedido(cMinima, cBodega) {
        if (cBodega < cMinima) {
            alert("Tiene que solicitar mas de este producto") // alert creado temporalmente para que me sirva de guia visualmente 
        } else {
            return false;
        }
        return true;
    }

    cantPagar(cBodega, cMinima, cMaxima, pCompra) {
        if (cBodega < cMinima) {
            cantidadPagar = (cBodega - cMaxima) * pCompra;
        } else {
            return false
        }
        return true;
    }

    mostrar();
}

class Prendas extends Producto {
    #tipoPrenda;
    #talla;

    constructor(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento, tPrenda, talla) {
        super(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento);
        this.#tipoPrenda = tPrenda;
        this.#talla = talla;
    }
    set tipoPrenda(nuevaPrenda) {
        this.#tipoPrenda = nuevaPrenda;
    }
    get tipoPrenda() {
        return this.#tipoPrenda;
    }
    set talla(nuevaTalla) {
        this.#talla = nuevaTalla;
    }
    get talla() {
        return this.#talla;
    }

    puedePlanchar(tPrenda) {

    }
    mostrar();
}

class Calzado extends Producto {
    #tipoCalzado;
    #talla;
    constructor(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento, tCalzado, talla) {
        super(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento);
        this.#tipoCalzado = tCalzado;
        this.#talla = talla;
    }
    set tipoCalzado(nuevaCalzado) {
        this.#tipoCalzado = nuevaCalzado;
    }
    get tipoCalzado() {
        return this.#tipoCalzado;
    }
    set talla(nuevaTalla) {
        this.#talla = nuevaTalla;
    }
    get talla() {
        return this.#talla;
    }

    mostrar();
}


