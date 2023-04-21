


function calcularDiferenciaDeDias(fecha1, fecha2) {
    const unDia = 24 * 60 * 60 * 1000;
    const fechaInicial = new Date(fecha1);
    const fechaFinal = new Date(fecha2);
    const diasTransCurridos = Math.round(Math.abs(fechaInicial - fechaFinal) / unDia );
    return diasTransCurridos;
}






const fecha1 = '2023-04-21';
const fecha2 = '2004-02-03';

const diferenciaEnDias = calcularDiferenciaDeDias(fecha1, fecha2);
console.log(`La diferencia de dias ente la fecha ${fecha1} y la fecha ${fecha2} es de ${diferenciaEnDias}`);