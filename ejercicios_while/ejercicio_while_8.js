/*
Uso de Continue: Crea un programa que cuente del 1 al 5, pero que "salte" la impresión del número 3 y continúe con los demás números de la secuencia
*/

let contador = 0;

while (contador < 5) {
    contador++;

    if (contador === 3) {
        continue;
    }

    console.log(contador);
}