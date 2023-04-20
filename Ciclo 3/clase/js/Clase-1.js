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
const CONTAINER = document.querySelector(".container");

let iContador = 0;
const TXTCONTADOR = document.
getElementById("idcontador");


CONTAINER.addEventListener('click', (e) => {
     console.log(e)
    if (e.target.classList.contains("btn-light"))
        TXTCONTADOR.textContent = ++iContador;
    else if (e.target.classList.contains("btn-dark"))
        TXTCONTADOR.textContent = --iContador;
        
        e.stopPropagation();
});


