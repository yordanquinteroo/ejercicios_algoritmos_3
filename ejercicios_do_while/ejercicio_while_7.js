/**
 * Salto con continue: Escribe un ciclo del 1 al 10 que imprima los números, pero que "salte" la impresión del número 5 usando la sentencia continue
 */

let contador = 0;

while (contador < 10) {
    contador++;

    if (contador === 5) {
        continue;
    }

    console.log(contador);
}