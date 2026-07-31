/**
 * Acumulador de suma: Escribe un ciclo que sume los números del 1 al 10 y muestre el total acumulado al finalizar
 */

let contador = 1;
let suma = 0;

while (contador <= 10) {
    suma += contador;
    contador++;
}

console.log("La suma total es: " + suma);