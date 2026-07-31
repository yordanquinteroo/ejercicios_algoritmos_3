/**
 * Comparación While vs Do...While: Escribe un ciclo while con una condición que sea falsa desde el inicio (por ejemplo, contador < 0) para observar que no se ejecuta ninguna vez, a diferencia de un do...while
 */

let contador = 0;

while (contador < 0) {
    console.log(contador);
    contador++;
}

console.log("El ciclo ha terminado.");