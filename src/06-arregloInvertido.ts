//  Arreglo Invertido

let cantidad: number = Number(prompt("cantidad del arreglo"));
let numeros: number[] = new Array(cantidad);
let i: number;

for (let i: number = 0; i < cantidad; i++) {
  numeros[i] = Number(prompt("valores del arreglo"));
}

let invertir: string = "";
for (i = cantidad - 1; i >= 0; i--) {
  invertir = invertir + numeros[i] + " ";
}

console.log(invertir);
