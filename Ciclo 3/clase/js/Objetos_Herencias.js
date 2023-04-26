class MiMath {
    static cuadrado(number) {
        return number * number;
    }
}

console.log(MiMath.cuadrado(5))


class Persona {

    static cantPersona = 0;
    constructor(tipoPersona, tipoDNI, numIdentificacion, nombre, telefono, cuenta) {
        this.__tPersona = tipoPersona;
        this.__tDni = tipoDNI;
        this.__nIden = numIdentificacion;
        this._nombre = nombre;
        this.__telefono = telefono;
        this.__cuenta = cuenta;
        ++Persona.cantPersona;
    }

    set tipoPersona(nuevaPersona) {
        this.__tPersona = nuevaPersona;
    }
    get tipoPersona() {
        return this.__tPersona
    }
    set tipoDNI(nuevoDNI) {
        this.__tDni = nuevoDNI;
    }
    get tipoDNI() {
        return this.__tDni
    }
    set numIdentificacion(nuevaIdent) {
        this.__nIden = nuevaIdent;
    }
    get numIdentificacion() {
        return this.__nIden
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get nombre() {
        return this._nombre;
    }

}


class Cuenta {
        /* ESTATICOS */

    static cantidad = 0;

    constructor(numero, saldo = 0,) {
        this._numero = numero;
        this._saldo = saldo;
        ++Cuenta.cantidad;
    }
    /* SETTER / GETTER */

    get numero() {
        return this._numero;
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


