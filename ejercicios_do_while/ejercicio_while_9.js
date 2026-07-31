/**
 * Formato de lista: Genera una secuencia de números del 1 al 20 que se impriman en una sola línea, concatenados con un guion ("-") entre ellos
 */

let contador = 1;
let resultado = "";

while (contador <= 20) {
    resultado += contador;

    if (contador < 20) {
        resultado += "-";
    }

    contador++;
}

console.log(resultado);