//Búsqueda de índice: Dado un arreglo de elementos, utiliza un ciclo para encontrar en qué posición (índice) se encuentra un valor específico y detén la búsqueda una vez hallado.

let frutas = ["Manzana", "Pera", "Uva", "Banano", "Mango"];
let valorBuscado = "Banano";

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === valorBuscado) {
        console.log("El elemento se encuentra en la posición: " + i);
        break;
    }
}