let datos = [];

function guardar() {
    datos.push(document.querySelector('.nombre').value)
    datos.push(document.querySelector('.apellido').value)
    console.log(datos);

    sessionStorage.setItem('datos', JSON.stringify(datos));
    console.log(sessionStorage.getItem('datos'));

    sessionStorage.setItem('Nombre', document.querySelector('.nombre').value);
    sessionStorage.Apellido = document.querySelector('.apellido').value;
}

function cargar() {
    document.getElementById('agregarNombre').textContent += sessionStorage.Nombre + ", ";
    document.getElementById('agregarApellido').textContent += sessionStorage.Apellido + ", ";

    let newObject = sessionStorage.getItem('datos');
    console.log(JSON.parse(newObject));
}

window.addEventListener("load", function () {
    document.getElementById("Guardar").addEventListener("click", guardar);
});
window.addEventListener("load", function () {
    document.getElementById("cargar").addEventListener("click", cargar);
});


/* LOCALSTORAGE */
/*
function guardar() {
    localStorage.setItem('Nombre', document.querySelector('.nombre').value);
    localStorage.Apellido = document.querySelector('.apellido').value;
    console.log(localStorage);
}
function cargar() {
    document.getElementById('agregarNombre').textContent = localStorage.Nombre;
    document.getElementById('agregarApellido').textContent = localStorage.Apellido;
}
window.addEventListener("load", function () {
    document.getElementById("Guardar").addEventListener("click", guardar);
});
window.addEventListener("load", function () {
    document.getElementById("cargar").addEventListener("click", cargar);
});
*/





/* CONVERTIR UN LOCALSTORAGE EN UN OBJETO */
/*
const myObject = {
    name : 'John doe',
    age : 32,
    gender : 'male',
    profession : 'optician'
}

localStorage.setItem('myObject', JSON.stringify(myObject));
console.log(localStorage.getItem('myObject'));

let newObject = localStorage.getItem('myObject');
console.log(JSON.parse(newObject));
*/





/*  ITRERADORES DEL LOCALSTORAGE */
/*
let nombre = localStorage.Nombre;
let apellido = localStorage.getItem('Apellido');
alert(nombre + ' ' + apellido)
console.log(localStorage);

for (let i=0; i < localStorage.length; i++){
    let k = localStorage.key(i);
    console.log(`Llave: ${k} => Valor: ${localStorage.getItem(k)}`);
}

for (let k in localStorage) {
    if (!localStorage.hasOwnProperty(k))
        continue
    console.log(`Llave: ${k} => Valor: ${localStorage.getItem(k)}`);
}

let keys = Object.keys(localStorage);
for (let key of keys) {
    console.log(`Llave: ${key} => Valor: ${localStorage.getItem(key)}`);
}
*/

