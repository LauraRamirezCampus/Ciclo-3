class MiMath {
    static cuadrado(number) {
        return number * number;
    }
}

// console.log(MiMath.cuadrado(5))


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
    set telefono(nuevoTelefono) {
        this.__telefono = nuevoTelefono;
    }
    get telefono() {
        return this.__telefono
    }
    set cuenta(nuevaCuenta) {
        this.__cuenta = nuevaCuenta;
    }
    get cuenta() {
        return this.__cuenta
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
        console.log("SET saldo")
        this._saldo = nuevoSaldo;
    }
    get saldo() {
        console.log("GET saldo");
        return this._saldo;
    }
    /* METODOS */
    depositar(monto) {
        this._saldo += monto;
        return this._saldo;
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

class CuentaAhorro extends Cuenta { }

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
        let tsaldo = this._saldo;
        tsaldo -= monto;
        if (tsaldo >= -this.__topeCredito) {
            this._saldo -= tsaldo;
            return true;
        }
        return false;
    }
}


// let ctaC = new CuentaCorriente(753, 2_000_000, 2_000_000);

// let persona1 = new Persona("Natural", "CC", 1234, "Davincho", 123456789, ctaC);
// console.log(persona1.__cuenta.consultarSaldo());

// persona1.cuenta.girar(2_500_000);
// console.log(persona1.__cuenta.consultarSaldo());

// persona1.cuenta.depositar(500_000);
// console.log(persona1.__cuenta.consultarSaldo());

// persona1.cuenta.girar(7_000_000);
// console.log(persona1.__cuenta.consultarSaldo());



/*  CLASE NUEVA  */



class Persona1{
    #nombre;
    #sexo;
    constructor(nombre, sexo) {
        this.#nombre = nombre;
        this.#sexo = sexo;
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }
    get nombre() {
        return this.#nombre
    }
    set sexo(nuevoSexo) {
        this.#sexo = nuevoSexo
    }
    get sexo() {
        return this.#sexo
    }
}
let p1 = new Persona1("Valerie", "F");
// console.log(p1);
p1.nombre = "Valerye";
// console.log(p1);


class Figura {
    #color;
    constructor(color) {
        this.#color = color
    }
    set color(nuevoColor) {
        this.#color = nuevoColor
    }
    get color() {
        return this.#color
    }

    calcularArea(){}
    calcularPerimetros(){}
}

class Cuadrado extends Figura {
    #lado;
    constructor(color, lado,) {
        super(color);
        this.#lado = lado
    }
    set lado(nuevoLado) {
        this.#lado = nuevoLado;
    }
    get lado() {
        return this.#lado
    }

    calcularArea() {
        return this.#lado * this.#lado;
    }
    calcularPerimetros() {
        return 4 * this.#lado
    }
}
class Rectangulo extends Figura {
    #base;
    #altura;
    constructor(color, base, altura) {
        super(color);
        this.#base = base
        this.#altura = altura
    }
    set base(nuevobase) {
        this.#base = nuevobase;
    }
    get base() {
        return this.#base
    }
    set altura(nuevaAltura) {
        this.#altura = nuevaAltura;
    }
    get altura() {
        return this.#altura;
    }
    calcularArea() {
        return this.#base * this.#altura;
    }
    calcularPerimetros() {
        return 2 * (this.#base + this.#altura);
    }
}
class Circulo extends Figura {
    #radio;
    constructor(color, radio) {
        super(color);
        this.#radio = radio
    }
    set radio(nuevoradio) {
        this.#radio = nuevoradio;
    }
    get radio() {
        return this.#radio
    }
    calcularArea() {
        return Math.PI * this.#radio ** 2;
    }
    calcularPerimetros() {
        return 2* Math.PI * this.#radio;
    }
}
class Canva {
    #background;
    #alto;
    #ancho;
    #figuras;
    constructor() {
        this.#background = "white";
        this.#alto = 800;
        this.#ancho = 600;
        this.#figuras = [];
    }
    get figuras() {
        return this.#figuras
    }
    agregarFiguras(figura) {
        this.#figuras.push(figura);
    }

}

let c1 = new Canva();
console.log("Figuras: ", c1.figuras);
let cuad1 = new Cuadrado("Yellow", 3);
c1.agregarFiguras(cuad1);
console.log("Figuras: ", c1.figuras);
console.log("Area del cuadrado: ", c1.figuras[0].calcularArea());
let circ1 = new Circulo("Blue", 10);
c1.agregarFiguras(circ1);
for (let fig of c1.figuras) {
    console.log("Area de ", fig, "es ", fig.calcularArea());
}
console.log("-".repeat(30))


/*           !!!CLASE NUEVA!!!   */


//   ABSTRACTAS
class CalseAbstracta {
    constructor() {
        if (new.target === CalseAbstracta){
            throw new Error("No se puede crear una instancia de esta clase.");
        }
    }
    metodoNormal() {
        console.log('Ejecucion del metodo normal.');
    }
    metodoAbstracto() {
        throw new Error('El metodo no ha sido implementado.')
    }
}
class HijaAbstracta extends CalseAbstracta {
    metodoAbstracto() {
        console.log('Ejecucion del metodo abstracto');
    }
}

// let obt1 = new CalseAbstracta();
let hija1 = new HijaAbstracta();
hija1.metodoNormal();
hija1.metodoAbstracto();



//  INTERFACES
