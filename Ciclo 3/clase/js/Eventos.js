/*******  SIN TARGET *******/

// const BTN1 = document.querySelector(".btn-danger");
// const BTN2 = document.querySelector(".btn-dark");

// let iContador = 0;

// const TXTCONTADOR = document.
// getElementById("idcontador");

// BTN1.addEventListener("click", ()=> {
//     aumentarValor();
// });

// BTN2.addEventListener("click", ()=> {
//     disminuirValor();
// });

// function aumentarValor() {
//     TXTCONTADOR.textContent = ++iContador;
// };

// function disminuirValor() {
//     TXTCONTADOR.textContent = --iContador;
// };


/*******  CON TARGET *******/
const container = document.querySelector(".container");
let iContador = 0;
const txtcontador = document.
getElementById("idcontador");


container.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn-light")) {
        txtcontador.textContent = ++iContador;
    }
    else if (e.target.classList.contains("btn-dark")) {
        txtcontador.textContent = --iContador;
    }

    e.stopPropagation();
});

document.body.addEventListener('click', e => {
    console.log('Se hizo click en el body');
});
