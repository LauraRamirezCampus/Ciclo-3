
/* Fecha y hora del ahora */
const ahora = new Date();
console.log(ahora);

/* Una fecha especifica */
/* Los meses empuezan de cero (0 = enero */
const randomdate = new Date(2015,3,12,6,25,58); 
console.log(randomdate);

/* Una fecha especifica a media noche */
const win95 = new Date(1995, 7, 27); 
console.log(win95);

/* Configuracion de parametro por parametro */
const ahora1 = new Date();
ahora1.setFullYear(2004); //
ahora1.setMonth(1); //
ahora1.setDate(3); // 
console.log(ahora1); //

/* Como obtener los valores */
const ahora2 = new Date();
// Todos los metodos empuezan por get
console.log(ahora2.getMonth());
// milisegundos desde 1 eneto 1970
console.log(ahora.getTime());
// Dia de la semana (domingo = 0)
console.log(ahora.getDay());

/* Funciones para obtener los valores del Date() */

//
//
//
//
//
//
//

/* Convertir la Fecha y la Hora en string ( Util para poder modificarlos cuando sea necesario) */
console.log(ahora1.toDateString());
console.log(ahora.toTimeString());

/* Fecha en formato corto ("00/00/0000") */
console.log(ahora2.toLocaleString());



/* Herramienta para comparar fechas */
const now = new Date();
const before = new Date('October 8 2019 16:30:00');
const diferencia = now.getTime() - before.getTime();
console.log(diferencia) 

const minutes = Math.round(diferencia / 1000 / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 24);

console.log(minutes, hours, days);
console.log(`This post was written ${days} ago`);


/* EJERCICIO EN CLASE */


const fechaPactada = document.querySelector("#fechaPactada");
const fechaEntrega = document.querySelector("#fechaEntrega");





console.log(fechaEntrega);