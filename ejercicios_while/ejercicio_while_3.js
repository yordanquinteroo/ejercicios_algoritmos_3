/*
Suma Acumulada: Escribe un ciclo que sume los números del 1 al 5 (1+2+3+4+5) y muestre el resultado total al final de la ejecución
*/

let contador = 1;
let suma = 0;

while (contador <= 5) {
    suma = suma + contador;
    contador++;
}

console.log("La suma total es: " + suma);