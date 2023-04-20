const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener('click', agregarEmpleadoNomina);

/*
    mapEmpleado = {
        cedula: {
            nombre: xxx
            categoria: xxx
            abrcategoria: xxx
             ...
                }
        }
    vEmpleados = [{emp1}, {emp2}, {emp3}, ...]

*/

const vEmpleados = [];
const mapTotalNomina = new Map();
const mapEstadistica = new Map();
const salMinimo = 1_160_000;

function agregarEmpleadoNomina(e) {
    // e.preventDefault();

    if (capturarInformacion () == false) return;

    // const ultEmpleado = vEmpleados.at(-1);
    // if (calcularNominaEmpleado(ultEmpleado) == false) return;

    // console.log("mapEstadistica", mapEstadistica)
}

function capturarInformacion() {
    const mapEmpleado = new Map();
    const cedula = document.getElementById("cedula");
    if (cedula.value.lenght <= 0) {
        alert("Valor incorrecto en la cédula.");
        cedula.focus();
        return false;
    }
    const nombre = document.getElementById("nombre");
    const ctrlcategoria = document.getElementById("categoria");
    const categoria = ctrlcategoria.options[ctrlcategoria.selectedIndex].text;
    const abrCategoria = ctrlcategoria.value;
    const datEmpl = new Map([
        ["nombre",nombre],
        ["categoria",categoria],
        ["abrcaregoria",abrCategoria]
    ]);

    mapEmpleado.set(cedula, datEmpl);
    vEmpleados.push(mapEmpleado);
    console.log(vEmpleados);
    return true;
}