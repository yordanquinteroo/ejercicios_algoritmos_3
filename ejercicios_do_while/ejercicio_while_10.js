/**
 * Detección de paridad: Crea un ciclo que recorra los números del 1 al 20 e imprima solo aquellos que son pares, utilizando una estructura condicional dentro del bloque do
 */


let contador = 1;

do {
    if (contador % 2 === 0) {
        console.log(contador);
    }

    contador++;
} while (contador <= 20);