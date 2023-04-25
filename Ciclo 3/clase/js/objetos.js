// const cuentaCorrienteA = {
//     numero : 1234,
//     nombre:"Juan",
//     saldo: 350_000,
//     depositar(monto) {
//         this.saldo += monto
//         return true;
//     },
//     girar(monto) {
//         if (this.saldo >= monto)
//             this.saldo -= monto;
//         else
//             return false;
// 
//         return true;
//     },
//     consultarSaldo() {
//         return this.saldo;
//     }
// }
// const cuentaCorrienteB = {
//     numero : 9876,
//     nombre:"Maria",
//     saldo: 450_600,
//     depositar(monto) {
//         this.saldo += monto
//         return true;
//     },
//     girar(monto) {
//         if (this.saldo >= monto)
//             this.saldo -= monto;
//         else
//             return false;
// 
//         return true;
//     },
//     consultarSaldo() {
//         return this.saldo;
//     }
// }
// console.log(cuentaCorrienteA.consultarSaldo());
// cuentaCorrienteA.depositar(350_000);
// cuentaCorrienteA.girar(200_000);
// console.log(cuentaCorrienteA.consultarSaldo());
// console.log(cuentaCorrienteB.consultarSaldo());
// cuentaCorrienteB.depositar(3_050_000);
// cuentaCorrienteB.girar(0);
// console.log(`el saldo de Maria es ${cuentaCorrienteB.consultarSaldo()}`);
// 
// 
// 
// 
// 
/* LO MISMO DE ARRIBA PERO CON CLASES */

class cuentaCorriente {
    constructor(numero, nombre, saldo) {
        this._numero = numero;
        this._nombre = nombre;
        this._saldo = saldo;
    }
    /* SETTER / GETTER */
    set numero(nuevoNumero) {
        this._numero = nuevoNumero;
    }
    get numero() {
        return this._numero;
    }
    set nombre(nuevoNombre) {
        console.log("SET nombre");
        this._nombre = nuevoNombre;
    }
    get nombre() {
        console.log("GET nombre");
        return this._nombre;
    }
    set saldo(nuevoSaldo) {
        this._saldo = nuevoSaldo;
    }
    get saldo() {
        console.log("GET saldo");
        return this._saldo;
    }
    /* METODOS */
    depositar(monto) {
        this._saldo += monto;
        return true;
    }
    girar(monto) {
        if (this.saldo >= monto)
            this.saldo -= monto;
        else
            return false;

        return true;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
// const ctaCorrA = new cuentaCorriente(1234, "Juan", 350000);
// ctaCorrA.depositar(100_000);
// console.log(ctaCorrA.consultarSaldo());
// 
// ctaCorrA.nombre = "Oscar";
// console.log("Nombre: ", ctaCorrA.nombre);
// 
// 
// console.log(ctaCorrA.nombre);
// const ctaCorrB = new cuentaCorriente(9876, "Maria", 450600);
// console.log(ctaCorrA.consultarSaldo());
// ctaCorrA.girar(200_000);
// console.log(ctaCorrA.consultarSaldo());
// console.log("/".repeat(30));
// console.log(ctaCorrB.consultarSaldo());
// ctaCorrB.depositar(3_050_000);
// ctaCorrB.girar(0);
// console.log(`el saldo de Maria es ${ctaCorrB.consultarSaldo()}`); 


class numeroEntero {
    constructor(numero) {
        this.numero = numero;
    }
    parImpar() {
        if (this.numero % 2 == 0) {
            console.log('El numero es PAR');
        }
        else
            console.log('El numero es IMPAR');
    }
    posNeg() {
        if (this.numero > 0)
            console.log('El numero es POSITIVO');
        else if (this.numero < 0)
            console.log('El numero es NEGATIVO')
        else
            console.log('El numero es CERO')
    }
    primo() {
        for (let i = 2; i < this.numero; i++) {
            if (this.numero % i === 0) {
                return console.log('el numero no es PRIMO');
            } else {
                return console.log('El numero es PRIMO');
            }
        }

    }
}
// const numero1 = new numeroEntero(5);
// console.log(numero1.parImpar());
// console.log(numero1.posNeg());
// console.log(numero1.primo());


class producto {
    constructor(codigo, precio, cantidadB, cantidadM) {
        this.__codigo = codigo;
        this.__precio = precio;
        this.__cantidadBodega = cantidadB;
        this.__cantidadMinima = cantidadM;
    }
    get codigo() {
        return this.__codigo;
    }
    set precio(nuevoPrecio) {
        this.__precio = nuevoPrecio;
    }
    get precio() {
        return this.__precio;
    }
    set cantidadB(nuevoCantidadB) {
        this.__cantidadBodega = nuevoCantidadB;
    }
    get cantidadB() {
        return this.__cantidadBodega;
    }
    set cantidadM(nuevoCantidadM) {
        this.__cantidadMinima = nuevoCantidadM;
    }
    get cantidadM() {
        this.__cantidadMinima
    }
    solPedido() {
        if (this.__cantidadBodega < this.__cantidadMinima)
        // Pendiente la solucion del error en solPedido
            tarjeta++
    }
    menorProducto
}
const bodega = [];
let tarjeta = "";

function agregar() {
    codigo = document.querySelector(".codigo").value;
    precio = document.querySelector(".precio").value;
    cantidadB = document.querySelector(".cantidadB").value;
    cantidadM = document.querySelector(".cantidadM").value;
    const datosProducto = new producto(codigo, precio, cantidadB, cantidadM)
    bodega.push([datosProducto]);
    
    console.log(datosProducto);
    console.log(bodega);

    if (producto.solPedido())

    tarjeta += /* HTML */ ` 
    <div class="card text-bg-danger mb-3 mt-3 col-3 ms-5" >
      <div class="card-header">ALERTA!!!</div>
      <div class="card-body">
        <h5 class="card-title">El producto con el codigo ${codigo} tiene poco stock!!</h5>
        <p class="card-text">Solicitele mas de ese producto a su respectivo proveedor.</p>
      </div>
    </div>
          `;
    document.querySelector("#tarjeta").innerHTML = tarjeta;
}
window.addEventListener("load", function () {
    document.getElementById("agregar").addEventListener("click", agregar);
});