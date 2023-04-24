/* Metodos de Set */

// new Set()  Crea un nuevo conjunto
// add()  Agrega un nuevo elemento
// delete()  Elimina un elemento
// has()  Devuelve verdadero si existe un valor
// forEach()  Invoca una devolución de llamada para cada elemento
// values()  Devuelve un iterador con todos los valores
// clear()  Elimina todo el contenido

/* Crear el conjunto */
const CLETRAS = new Set (['a', 'b', 'c', 'd']);
console.log(CLETRAS);
console.log("=".repeat(35)) 

/* diferente forma de crear el mismo Conjunto */
const CLETRAS2 = new Set();
CLETRAS2.add('a');
CLETRAS2.add('b');
CLETRAS2.add('c');
CLETRAS2.add('d');
console.log(CLETRAS2);
console.log("=".repeat(35)) 

/* Eliminar elementos en un conjunto */
CLETRAS.delete('c');
console.log(CLETRAS);
console.log("=".repeat(35)) 

/* Verificamos la existencia de un elemento dentro del Conjunto */
console.log(CLETRAS.has('c')) ? "Existe el elemento" : "No Existe el elemento"; // false
console.log(CLETRAS.has('d')); // true
console.log("=".repeat(35)) 

/* Mostrar la cantidad de elemento de un conjunto */
console.log(CLETRAS.size);
console.log("=".repeat(35)) 

/* Recorrer el conjunto con FOREACH */
let str = "";
CLETRAS.forEach(letra => {
    str += letra + ","; 
});

console.log(str);
console.log("=".repeat(35)) 

/* Iterar el conjunto con for .. of y values()*/
console.log(CLETRAS.values());
let str1 = "";
for (let letra of CLETRAS.values()) {
    str1 += letra + "*"; 
}
console.log(str1);
console.log("=".repeat(35)) 

/* Limpiamos el Conjunto */
CLETRAS.clear()
console.log(CLETRAS);