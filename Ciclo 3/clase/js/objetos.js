const cuentaCorrienteA = {
    numero : 1234,
    nombre:"Juan",
    saldo: 350_000,
    depositar(monto) {
        this.saldo += monto
        return true;
    },
    girar(monto) {
        if (this.saldo >= monto)
            this.saldo -= monto;
        else
            return false;

        return true;
    },
    consultarSaldo() {
        return this.saldo;
    }
}
const cuentaCorrienteB = {
    numero : 9876,
    nombre:"Maria",
    saldo: 450_600,
    depositar(monto) {
        this.saldo += monto
        return true;
    },
    girar(monto) {
        if (this.saldo >= monto)
            this.saldo -= monto;
        else
            return false;

        return true;
    },
    consultarSaldo() {
        return this.saldo;
    }
}
console.log(cuentaCorrienteA.consultarSaldo());
cuentaCorrienteA.depositar(350_000);
cuentaCorrienteA.girar(200_000);
console.log(cuentaCorrienteA.consultarSaldo());
console.log(cuentaCorrienteB.consultarSaldo());
cuentaCorrienteB.depositar(3_050_000);
cuentaCorrienteB.girar(0);
console.log(`el saldo de Maria es ${cuentaCorrienteB.consultarSaldo()}`);





/* LO MISMO DE ARRIBA PERO CON CLASES */

class cuentaCorriente {
    constructor(numero, nombre, saldo) {
        this.numero = numero;
        this.nombre = nombre;
        this.saldo = saldo; 
    }
    depositar(monto) {
        this.saldo += monto
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
const ctaCorrA = new cuentaCorriente(123, "Juan", 350000);
const ctaCorrB = new cuentaCorriente(9876, "Maria", 450600);
console.log(ctaCorrA.consultarSaldo());
ctaCorrA.depositar(350_000);
ctaCorrA.girar(200_000);
console.log(ctaCorrA.consultarSaldo());
console.log("/".repeat(30));
console.log(ctaCorrB.consultarSaldo());
ctaCorrB.depositar(3_050_000);
ctaCorrB.girar(0);
console.log(`el saldo de Maria es ${ctaCorrB.consultarSaldo()}`); 

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
            if (this.numero % i === 0){
                return console.log('el numero no es PRIMO');
            } else {
                return console.log('El numero es PRIMO');
            }
        }

    }
}

const numero1 = new numeroEntero(5);

console.log(numero1.parImpar());
console.log(numero1.posNeg());
console.log(numero1.primo());
