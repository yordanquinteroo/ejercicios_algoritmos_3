/**
 * Salida con break: Crea un bucle que cuente del 1 al 50, pero que se detenga y salga completamente del ciclo cuando el contador llegue a 25 usando break
 */

let contador = 1;

while (contador <= 50) {
    if (contador === 25) {
        break;
    }

    console.log(contador);
    contador++;
}