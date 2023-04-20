/* Crear el conjunto */
const CLETRAS = new Set (['a', 'b', 'c', 'd']);
console.log(CLETRAS);

/* diferente forma de crear el mismo Conjunto */
const CLETRAS2 = new Set();
CLETRAS2.add('a');
CLETRAS2.add('b');
CLETRAS2.add('c');
CLETRAS2.add('d');
console.log(CLETRAS2);

/* Eliminar elementos eb unb conjunto */
CLETRAS.delete('c');
console.log(CLETRAS);

/* Verificamos la existencia de un elemento dentro del Conjunto */
console.log(CLETRAS.has('c')) ? "Existe el elemento" : "No Existe el elemento"; // false
console.log(CLETRAS.has('d')); // true

/* Mostrar la cantidad de elemento de un conjunto */
console.log(CLETRAS.size);

/* Recorrer el conjunto con FOREACH */
let str = "";
CLETRAS.forEach(letra => {
    str += letra + ","; 
});

console.log(str);

/* Iterar el conjunto con for .. of */
console.log(CLETRAS.values())
let str1 = "";
for (let letra of CLETRAS.values()) {
    str1 += letra + "*"; 
}
console.log(str1);

