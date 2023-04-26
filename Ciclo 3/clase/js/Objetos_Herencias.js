class MiMath {
    static cuadrado(number) {
        return number * number;
    }
}

console.log(MiMath.cuadrado(5))
class Persona {

}
class Cuenta {
        /* ESTATICOS */

    static cantidad = 0;

    constructor(numero, nombre, saldo = 0, Persona) {
        this._numero = numero;
        this._nombre = nombre;
        this._saldo = saldo;
        this.__persona = Persona
        ++Cuenta.cantidad;
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

    static nombreBanco() {
        return "Campus Bank"
    }
}

class CuentaAhorro extends Cuenta {

}

let ctaAh1 = new CuentaAhorro(789, "Lucho Tu Papa", 50000, Persona)
let ctaAh2 = new CuentaAhorro(123, "Julian", 23165421)
ctaAh1.depositar(1550000);


class CuentaCorriente extends Cuenta {
    static cantidad = 0;
    constructor(numero, nombre, saldo = 0, topeCredito) {
        super(numero, nombre, saldo);
        this.__topeCredito = topeCredito;
        if (this.__topeCredito == undefined){
            this.__topeCredito = saldo;
        }
        ++CuentaCorriente.cantidad;
    }
    /* SETTER / GETTER */
    set topeCredito(nuevoTope) {
        this.__topeCredito = nuevoTope
    }
    get topeCredito() {
        return this.__topeCredito
    }
    /* METODO DE LA CLASE */
    girar(monto) {

        let tsaldo = this.__saldo;
        tsaldo -= monto;
        if (tsaldo >= -this.__topeCredito) {
            this.__saldo -= tsaldo;
            return true;
        }
        return false;
    }
}

let ctaC = new CuentaCorriente(654, "Daniela", 2_000_000, 2_000_000);
ctaC.girar(2_500_000);
ctaC.depositar(500_000);
ctaC.girar(7_000_000);
console.log("Saldo: ", ctaC.consultarSaldo());

console.log(Cuenta.cantidad);
console.log(CuentaCorriente.cantidad);
